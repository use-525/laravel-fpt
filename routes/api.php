<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::resource('Category', 'App\Http\Controllers\Api\CategoryController');
Route::resource('User', 'App\Http\Controllers\Api\UserController');
Route::resource('Product', 'App\Http\Controllers\Api\ProductsController');
Route::resource('ProductGalleries', 'App\Http\Controllers\Api\Product_galleriesController');
Route::resource('Invoices', 'App\Http\Controllers\Api\InvoicesController');
Route::resource('InvoicesDetails', 'App\Http\Controllers\Api\Invoices_detailsController');
Route::get('searchProduct','App\Http\Controllers\Api\ProductsController@searchProduct')->name('Product.searchProduct');
Route::get('sortProduct','App\Http\Controllers\Api\ProductsController@sortProduct')->name('Product.sortProduct');
Route::post('changePassword/{id}', 'App\Http\Controllers\Api\UserController@changePassword')->name('User.changePassword');
Route::post('Checkout', 'App\Http\Controllers\Api\ClientController@Checkout')->name('Client.Checkout');
