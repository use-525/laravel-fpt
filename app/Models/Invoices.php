<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    use HasFactory;
     protected $table = 'invoices';
       protected $fillable = [
        'customer_name', 'customer_phone_number', 'customer_email','customer_address', 'total_price','payment_method'
    ];
}
