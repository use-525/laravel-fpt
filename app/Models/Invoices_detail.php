<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices_detail extends Model
{
    use HasFactory;
    protected $table = 'invoices_details';
      protected $fillable = [
        'invoice_id', 'product_id', 'quantity','unit_price'
    ];
}
