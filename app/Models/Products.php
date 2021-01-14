<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table = 'products';
        protected $fillable = [
        'name','image','cate_id','price','short_desc','detail', 'star', 'views'
    ];
}
