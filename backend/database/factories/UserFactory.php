<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstNameMale,
        'last_name' => $faker->lastName,
        'date_of_birth' => $faker->unixTime(),
        'weight' => rand(70, 230),
        'height' => rand(4, 9) . "'" . rand(5, 13) . '"',
        'salary' => rand(1000, 3000),
        'position' => rand(0, 100) > 50 ? 'Manager' : 'Developer',
        'remember_token' => Str::random(10)
    ];
});
