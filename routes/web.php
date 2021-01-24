<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');

Route::get('/admin',[AdminController::class, 'Index'])->name('Admin.index');
Route::get('/admin/category',[AdminController::class, 'Category'])->name('Admin.category');
Route::get('/admin/product', [AdminController::class, 'Product'])->name('Admin.product');
Route::get('/admin/user',[AdminController::class, 'User'])->name('Admin.user');
Route::get('/', [HomeController::class, 'Home'] )->name('Home');
Route::get('/shop', [HomeController::class, 'Shop'] )->name('Shop');
Route::get('/cart', [HomeController::class, 'Cart'] )->name('Cart');
Route::get('/product-details/{id}',  [HomeController::class, 'ProductDetail'])->name('ProductDetail');
