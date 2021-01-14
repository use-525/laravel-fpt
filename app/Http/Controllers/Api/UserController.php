<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $user =  User::all();
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
        $model = new User;
        $model->password = Hash::make($request['password']);
        $model->fill($request->all());
        $model->save();
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
         $user = User::findOrFail($id);
        return  $result = [
        'user' => $user
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
        $model = User::findOrFail($id);
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
        $model = User::find($id);
        if($model){
        User::destroy($id);
        }
        return $model;
    }
    public function changePassword(Request $request, $id){
        $model = User::find($id);
        $model->password = Hash::make($request['password']);
        $model->save();
       return  $result = [
        'user' => $model
    ];
    }
    // public function searchUser(Request $request){
    //     $model = User::where('email', 'LIKE',"%$request->keywords%")->get();

    //     return $model;
    // }
}
