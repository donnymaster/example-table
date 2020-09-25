<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Employee;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

$factory->define(Employee::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstNameMale,
        'last_name' => $faker->lastName,
        'date_of_birth' => Carbon::now()->format('Y-m-d'),
        'weight' => rand(70, 230),
        'height' => (rand(40, 120)/10),
        'salary' => rand(1000, 5000),
        'remember_token' => Str::random(10)
    ];
});
