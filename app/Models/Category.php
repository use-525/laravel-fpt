<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
     protected $fillable = [
        'cate_name', 'show_menu', 'desc','created_by'
    ];
}
