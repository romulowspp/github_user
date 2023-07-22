<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GithubUser extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'username',
        'name',
        'avatar_url',
        'html_url',
        'blog',
        'company',
        'location',
        'bio',
        'public_repos',
        'followers',
        'following',
    ];

    protected $casts = [
        'public_repos' => 'integer',
        'followers' => 'integer',
        'following' => 'integer',
    ];

    public function followingUsers()
    {
        return $this->hasMany(GithubUserFollowing::class);
    }
}
