<?php

namespace Tests\Feature\TestApi;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TestDeleteUserNegative extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->deleteJson('/api/employees/0');

        $response
            ->assertStatus(404)
            ->assertJsonFragment([
                'error' => 'user not found'
            ]);
    }
}
