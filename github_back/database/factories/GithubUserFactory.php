<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GithubUser>
 */
class GithubUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username' => $this->faker->userName,
            'name' => $this->faker->name,
            'avatar_url' => $this->faker->imageUrl(),
            'html_url' => $this->faker->url,
            'blog' => $this->faker->url,
            'company' => $this->faker->company,
            'location' => $this->faker->city,
            'bio' => $this->faker->text,
            'public_repos' => $this->faker->numberBetween(0, 100),
            'followers' => $this->faker->numberBetween(0, 100),
            'following' => $this->faker->numberBetween(0, 100),
        ];
    }
}
