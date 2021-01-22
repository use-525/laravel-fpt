<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Products;
use App\Models\Product_galleries;
use App\Http\Requests\StoreProduct;
use App\Http\Requests\UpdateProduct;
class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $prd = Products::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProduct $request)
    {
        //
        $model = new Products;
        $model->fill($request->all())->save();
        foreach ($request->img_url as $url) {
			Product_galleries::create([
			'product_id' => $model->id,
			'img_url' => $url
		]);
        }
        return $model;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $prd = Products::find($id);
        $cate_id = $prd->cate_id;
        $cate = Category::find($cate_id);
        $prd_gallery = Product_galleries::where('product_id',$id)->get();
        return  $result = [
        'cate' => $cate,
        'prd' => $prd,
        'prd_gallery'=>$prd_gallery
    ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $model = Products::findOrFail($id);
        $model->fill($request->all());
        $model->save();
        $cate_id = $model->cate_id;
        $cate = Category::find($cate_id);
        if($request->img_url != null){
            foreach ($request->img_url as $url) {
                Product_galleries::create([
            'product_id' => $model->id,
            'img_url' => $url
            ]);
        }
            return  $result = [
        'cate' => $cate,
        'prd' => $model
    ];
        }else{
            return  $result = [
        'cate' => $cate,
        'prd' => $model
    ];
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $model = Products::find($id);
        if($model){
        Product_galleries::where('product_id',$id)->delete();
        Products::destroy($id);
        }
        return $model;
    }
    public function searchProduct(Request $request){
        $model = Products::where('name','like',"%$request->keywords%")->get();
        return $model;
    }
    public function sortProduct(Request $request){
        switch ($request->keysort) {
             case 'all':
                return  Products::all();
            break;
            case 'sort=price-asc':
                return  Products::orderBy('price', 'asc')->get();
            break;
             case 'sort=price-desc':
                return  Products::orderBy('price', 'desc')->get();
            break;
             case 'sort=views':
                return  Products::orderBy('views', 'desc')->get();
            break;
             case 'sort=start':
                return  Products::orderBy('start', 'desc')->get();
            break;
             case 'sort=name-asc':
                return  Products::orderBy('name', 'asc')->get();
            break;
             case 'sort=name-desc':
                return   Products::orderBy('name', 'desc')->get();
            break;
            case 'sort=cate_id':
                return   Products::where('cate_id',"$request->cate_id")->get();
            break;
            case 'sort-price':
                return   Products::where('price', '>=',"$request->price_min")->where('price', '<=',"$request->price_max")->get();
            break;
            default:
}}
}
