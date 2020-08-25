<?php

namespace Tests\Feature\TestApi;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Arr;
use Tests\TestCase;

class TestDeleteUserPositive extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $test_user = new User([
            'first_name' => 'test',
            'last_name' => 'test',
            'date_of_birth' => 65476544,
            'weight' => 32,
            'height' => '4\'32"',
            'salary' => 1200,
            'position' => 'Manager'
        ]);

        $test_user->save();

        $response = $this->deleteJson('/api/employees/' . $test_user->id);

        $response
            ->assertStatus(200)
            ->assertJsonFragment(
                Arr::except($test_user->toArray(), [
                    'created_at',
                    'updated_at'
                ])
            );
    }
}
