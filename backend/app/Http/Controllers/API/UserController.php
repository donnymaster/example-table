<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // paginate
        // return UserResource::collection(User::paginate($page = 15));
        return UserResource::collection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'date_of_birth' => 'required|numeric',
            'weight' => 'numeric',
            'height' => 'string|regex:/\d{1,}(\')\d{1,}(")/i',
            'salary' => 'numeric',
            'position' => 'string'
        ]);

        if($data->fails()){
            return response()->json([
                'error' => $data->errors()
            ], 400);
        }

        try {

            // создаем запись
            User::create($data->validated());

        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 451);
        }

        return response()->json([
            'create' => 'success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if(!$user){
            return response([
                'error' => 'user not found'
            ], 404);
        }
        $user->delete();

        return response([
            [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'date_of_birth' => $user->date_of_birth,
                'weight' => $user->weight,
                'height' => $user->height,
                'salary' => $user->salary,
                'position' => $user->position
            ]
        ], 200);
    }
}
