<?php

use Illuminate\Database\Seeder;
use App\Position;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $positions = [
            'Developer',
            'Manager',
            'Human Resources Manager',
            'Network Administrator',
            'IT Project Manager',
            'Business Analyst',
            'Systems architect',
            'Network architect',
            'Director',
            'IT Director'
        ];

        foreach($positions as $position) {
            Position::create([
                'position_name' => $position
            ]);
        }
    }
}
