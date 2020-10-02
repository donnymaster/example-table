<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'date_of_birth' => 'required|date_format:Y-m-d',
            'weight' => 'numeric',
            'height' => 'numeric',
            // // 'height' => 'string|regex:/\d{1,}(\')\d{1,}(")/i',
            'salary' => 'numeric',
            'position' => 'array',
            'position.*.id' => 'numeric|exists:positions,id'
        ];
    }
}
