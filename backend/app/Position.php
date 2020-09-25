<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $fillable = [ 'position_name' ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class);
    }
}
