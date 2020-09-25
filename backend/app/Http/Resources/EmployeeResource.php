<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */

    public $preserveKeys = true;

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'full_name' => $this->full_name,
            'weight' => $this->weight,
            'height' => $this->height,
            'salary' => $this->salary,
            'date_of_birth' => $this->date_of_birth,
            'positions' => PositionResource::collection($this->positions)
        ];
    }
}
