<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class GitHubUserController extends Controller
{
    public function index($username)
    {
        $response = Http::get("https://api.github.com/users/{$username}");

        if($response->successful()) {
            return response()->json($response->json(), 200);
        }
        return response()->json([
                'message' => 'User not found'
            ], 404);
    }

    public function following($username)
    {
        $response = Http::get("https://api.github.com/users/{$username}/following");

        if($response->successful()) {
            return response()->json($response->json(), 200);
        }
        return response()->json([
                'message' => 'User not found'
            ], 404);
    }
}
