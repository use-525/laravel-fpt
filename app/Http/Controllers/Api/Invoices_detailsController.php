<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoices_detail;
use App\Models\Invoices;
use App\Models\Products;

class Invoices_detailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $invoice =  Invoices_detail::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $model = new Invoices_detail;
        $model->fill($request->all())->save();
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
        $invoices_detail = Invoices_detail::find($id);
        $invoice_id = $invoices_detail->invoice_id;
        $invoice = Invoices::find($invoice_id);
        return  $result = [
        'invoices_detail' => $invoices_detail,
        'invoice' => $invoice,
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
        $model = Invoices_detail::findOrFail($id);
        $model->fill($request->all());
        $model->save();
        return  $model;
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
         $model = Invoices_detail::find($id);
        if($model){
        Invoices_detail::destroy($id);
        }
        return $model;
    }
}
