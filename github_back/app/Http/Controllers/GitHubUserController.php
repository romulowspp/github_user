<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Models\GithubUser;
use App\Models\GithubUserFollowing;
use App\Services\GithubUserService;
use App\Services\GithubUserFollowingService;

class GitHubUserController extends Controller
{
    public function index($username)
    {
        $user = GithubUser::where('username', $username)->first();
        if ($user) {
            return response()->json($user, 200);
        }

        $github_user = GithubUserService::getGitHubUser($username);

        if($github_user) {
            $github_user->save();
            return response()->json($github_user, 200);
        }
        return response()->json([
                'message' => 'User not found'
            ], 404);
    }

    public function following($username)
    {
        $user = GithubUser::where('username', $username)->first();
        if (!$user) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        $following_users = GithubUserFollowing::where('github_user_id', $user->id)->get();
        if (!$following_users->isEmpty()) {
            return response()->json($following_users, 200);
        }

        $following_users = GithubUserFollowingService::getFollowingUsers($user->id, $username);

        if($following_users) {
            return response()->json($following_users, 200);
        }
        return response()->json([
                'message' => 'User not found'
            ], 404);
    }
}
