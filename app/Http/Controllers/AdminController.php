<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Products;
use App\Models\User;
class AdminController extends Controller
{
    //
    public function Index() {
    $cate = Category::count();
    $prd = Products::count();
    $user = User::count();
    return view('Admin.index',compact('cate', 'prd', 'user'));
}
    public function Category () {
    return view('Admin.category.index');
}
    public function Product() {
    return view('Admin.product.index');
}
    public function User () {
    return view('Admin.user.index');
}
 public function formLogin()
    {
        return view('admin.login.login');
    }
}
