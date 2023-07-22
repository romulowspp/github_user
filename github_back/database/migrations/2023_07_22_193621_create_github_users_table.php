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
        Schema::create('github_users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('username')->unique();
            $table->string('name')->nullable();
            $table->string('avatar_url')->nullable();
            $table->string('html_url')->nullable();
            $table->string('blog')->nullable();
            $table->string('company')->nullable();
            $table->string('location')->nullable();
            $table->text('bio')->nullable();
            $table->integer('public_repos')->nullable();
            $table->integer('followers')->nullable();
            $table->integer('following')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('github_users');
    }
};
