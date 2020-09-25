<?php

use Illuminate\Database\Seeder;
use App\Employee;
use App\Position;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Employee::class, 10)
            ->create()
            ->each(function ($employee) {
                $employee->positions()->createMany(
                    factory(Position::class, 3)->make()->toArray()
                );
            });
    }
}
