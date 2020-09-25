<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'API'], function () {
    Route::get('/employees', 'EmployeeController@index');
    Route::post('/employees', 'EmployeeController@store')->middleware('access.token');
    Route::delete('/employees/{id}', 'EmployeeController@destroy')->middleware('access.token');
});
