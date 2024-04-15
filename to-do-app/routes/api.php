<?php

use App\Http\Controllers\ToDoController;
use App\Http\Controllers\ToDoDetailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::resource('todos',ToDoController::class);
Route::resource('toDoDetails',ToDoDetailController::class);