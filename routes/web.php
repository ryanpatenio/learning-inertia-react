<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home',['name' => 'Ryan']);
});
Route::get('/About', function () {
    return inertia('About');
});
Route::inertia('/Contact','Contact');
Route::get('/Posts',[PostController::class,'index']);

Route::resource('posts',PostController::class)->except('index');
