<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function Home() {
        return view('font-end.home');
    }
    public function Shop() {
        return view('font-end.shop');
    }
      public function Cart() {
        return view('font-end.cart');
    }
      public function ProductDetail(){
        return view('font-end.product-detail');
    }
}
