<?php

namespace Tests\Feature\TestApi;

use App\Employee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Arr;

class TestHeaderToken extends TestCase
{
    private $url_delete = 'api/employees';

    public function testNegativeTokenDeleteUser()
    {
        $response = $this->deleteJson("{$this->url_delete}/1");

        $response
            ->assertStatus(403)
            ->assertJson([
                'error' => 'Forbidden'
            ]);
    }

    public function testNegativeTokenCreateUser()
    {
        $response = $this->postJson("{$this->url_delete}");

        $response
            ->assertStatus(403)
            ->assertJson([
                'error' => 'Forbidden'
            ]);
    }

    public function testPositiveTokenCreateUser()
    {
        $employee = Arr::except(
            factory(Employee::class, 1)->make()->first()->toArray(),
            ['first_name']
        );

        $response = $this->postJson(
            "{$this->url_delete}",
            $employee,
            ['access_token' => env('TOKEN_ACCESS')]
        );

        $response
            ->assertStatus(422)
            ->assertJson([
                'errors' => [
                    'first_name' => [
                        'Поле Имя обязательно для заполнения.'
                    ]
                ]
            ]);

    }
}
