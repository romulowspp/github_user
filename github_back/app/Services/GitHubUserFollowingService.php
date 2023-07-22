<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\GithubUserFollowing;

class GitHubUserFollowingService {
    /**
     * Get profiles followed by a GitHub user
     *
     * @param string $username
     * @return GithubUserFollowing[]
     */
    public static function getFollowingUsers(int $id, string $username): array {
        $response = Http::get("https://api.github.com/users/{$username}/following")->json();
        if (!$response) {
            return null;
        }

        $github_following_users = [];

        foreach($response as $following) {
            $github_following_user = new GithubUserFollowing;
            $github_following_user->github_user_id = $id;
            $github_following_user->name = $following['login'];
            $github_following_user->avatar_url = $following['avatar_url'];
            $github_following_user->save();
            $github_following_users[] = $github_following_user;
        }

        return $github_following_users;
    }
}