<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GithubUserFollowing extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'github_user_id',
        'name',
        'avatar_url'
    ];

    protected $casts = [
        'github_user_id' => 'integer',
    ];

}
