<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\GithubUser;

class GithubUserService {
    /**
     * Get a GitHub user by username
     *
     * @param string $username
     * @return GithubUser
     */
    public static function getGitHubUser(string $username): GithubUser {
        $response = Http::get("https://api.github.com/users/{$username}")->json();
        if (!$response) {
            return null;
        }

        $github_user = new GithubUser;
        $github_user->username = $response['login'];
        $github_user->name = $response['name'];
        $github_user->avatar_url = $response['avatar_url'];
        $github_user->html_url = $response['html_url'];
        $github_user->blog = $response['blog'];
        $github_user->company = $response['company'];
        $github_user->location = $response['location'];
        $github_user->bio = $response['bio'];
        $github_user->public_repos = $response['public_repos'];
        $github_user->followers = $response['followers'];
        $github_user->following = $response['following'];

        return $github_user;
    }
}