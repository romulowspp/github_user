<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('github_user_followings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('github_user_id')->constrained();
            $table->string('name');
            $table->string('avatar_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('github_user_followings');
    }
};
