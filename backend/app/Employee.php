<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Employee extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'date_of_birth',
        'weight', 'height', 'salary', 'position_id'
    ];

    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime'
    ];

    public function positions()
    {
        return $this->belongsToMany(Position::class);
    }

    public function getFullNameAttribute()
    {
        $user_info = "{$this->first_name} {$this->last_name}";

        if($this->relationLoaded('positions') && $this->positions()->first()) {
            // $user_position = optional($this->positions()->first())->position_name;
            $user_position = $this->positions()->first()->position_name;
            return "{$user_info}, {$user_position}";
        }

        return $user_info;
    }

    public function getDateOfBirthAttribute($date)
    {
        return Carbon::parse($date)->timestamp;
    }
}
