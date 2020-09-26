<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Http\Requests\EmployeeRequest;

use Illuminate\Http\JsonResponse;

use App\Employee;
use App\EmployeePosition;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmployeeResource::collection(
            Employee::with('positions')->paginate(20)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\EmployeeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequest $request)
    {
        try {
            $employee = Employee::create($request->all());

            if($request->has('position')) {
                $positions = $request->input('position');

                foreach ($positions as $position) {
                    EmployeePosition::create([
                        'employee_id' => $employee->id,
                        'position_id' => $position['id']
                    ]);
                }
            }
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response()->json([
            'create' => 'success'
        ], JsonResponse::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);

        if(!$employee){
            return response([
                'error' => 'user not found'
            ], JsonResponse::HTTP_NOT_FOUND);
        }

        $employee->delete();

        return new EmployeeResource($employee);
    }
}
