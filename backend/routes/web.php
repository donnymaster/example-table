<?php

use App\Employee;
use App\Position;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Arr;
use App\Http\Resources\EmployeeResource;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    // return view('welcome');
});
