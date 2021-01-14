<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCheckout extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'customer_name' => 'required|string|max:255',
            'customer_phone_number' => 'required',
            'customer_email' => 'required|email',
            'customer_address' => 'required|string',
            'total_price' => 'required|',
            'payment_method' => 'required',
            'invoice_id' => 'required',
            'product_id' => 'required',
            'quantity' => 'required',
            'unit_price' => 'required',
        ];
    }
}
