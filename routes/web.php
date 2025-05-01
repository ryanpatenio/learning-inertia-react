<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home',['name' => 'Ryan']);
});
Route::get('/About', function () {
    return inertia('About');
});
Route::inertia('/Contact','Contact');
