<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToDoDetail\StoreRequest;
use App\Models\ToDo;
use App\Models\ToDoDetail;
use Illuminate\Http\Request;

class ToDoDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $toDos = ToDoDetail::get();

        return $toDos;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $toDoDetail = new ToDoDetail();

        $toDoDetail->to_do_id = $request->get('to_do_id');
        $toDoDetail->name = $request->get('name');
        $toDoDetail->completed_flag = false;
        $toDoDetail->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $toDoDetail = ToDoDetail::find($id);
        $toDoDetail->name = $request->get('name');
        $toDoDetail->completed_flag = $request->get('completed_flag');
        $toDoDetail->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $toDoDetail = ToDoDetail::find($id);
        $toDoDetail->delete();
    }
}
