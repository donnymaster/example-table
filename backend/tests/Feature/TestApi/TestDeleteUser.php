<?php

namespace Tests\Feature\TestApi;

use App\Employee;
use App\Http\Resources\EmployeeResource;
use App\Position;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TestDeleteUser extends TestCase
{
    private $url_delete = 'api/employees';

    public function testNegativeDeleteUser()
    {
        $response = $this->withHeaders([
            'access_token' => env('TOKEN_ACCESS')
        ])->deleteJson("{$this->url_delete}/0");

        $response
            ->assertStatus(404)
            ->assertJson([
                'error' => 'user not found'
            ]);
    }

    public function testPositiveDeleteUser()
    {
        $employee = factory(Employee::class, 1)
            ->create()
            ->each(function ($user) {
                $user->positions()->createMany(
                    factory(Position::class, 2)->make()->toArray()
            );
        })->first();

        $employee->positions()->delete();

        $response = $this->deleteJson(
            "{$this->url_delete}/{$employee->id}",
            array(),
            ['access_token' => env('TOKEN_ACCESS')]
        );

        $employeeArray = array_merge(
            json_decode(
                (new EmployeeResource($employee))->toJson(),
                true
            ),
            [ 'positions' => [] ]
        );

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => $employeeArray
        ]);

        $this->assertDeleted($employee);
    }
}
