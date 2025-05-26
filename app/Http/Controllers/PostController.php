<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(5);
        return Inertia::render('Posts/Post',['posts'=> $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

      $fields =  $request->validate([
            'title' => 'required|string',
            'body'  => 'required'
      ]);
      
        Post::create($fields);
        
        return redirect('/Posts')->with('message','New post created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Posts/View',['post'=> $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Posts/update',['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {

        $fields = $request->validate([
           'title' => 'required|string',
            'body'  => 'required'
        ]);

        $post->update($fields);
        
        return redirect('/Posts')->with([
            'message' => 'The post was updated successfully!',
            'type' => 'success'
        ]);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/Posts')->with([
            'message' => 'The post was deleted successfully!',
            'type' => 'error'
        ]);
    }
}
