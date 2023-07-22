<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GithubUserFollowing>
 */
class GithubUserFollowingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'github_user_id' => $this->faker->numberBetween(1, 10),
            'name' => $this->faker->userName,
            'avatar_url' => $this->faker->imageUrl(),
        ];
    }
}
