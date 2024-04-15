<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToDo\StoreRequest;
use App\Http\Requests\ToDo\UpdateRequest;
use App\Models\ToDo;
use App\Models\ToDoDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ToDoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
           // ToDoを取得する
           $toDos = ToDo::with('toDoDetails')->get();

           // 取得したToDoを返却する
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
        $todo = new ToDo();
        $todo->title = $request->get('title');
       

        $toDoDetail = new ToDoDetail();
        $toDoDetail->name = null;
        $toDoDetail->completed_flag = false;
        
        DB::transaction(function () use($todo,$toDoDetail){
            $todo->save();
            $todo->toDoDetails()->save($toDoDetail);
        });
       
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
    public function update(UpdateRequest $request, string $id)
    {
        $toDo = ToDo::find($id);
        $toDo->title = $request->get('title');
        $toDo->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $toDo = ToDo::find($id);
        $toDo->delete();
    }
}
