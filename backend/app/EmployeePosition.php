<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeePosition extends Model
{
    protected $table = 'employee_position';

    protected $fillable = [ 'employee_id', 'position_id' ];
}
