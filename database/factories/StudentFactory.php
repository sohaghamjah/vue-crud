<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->userName(),
            'email' => $this->faker->unique()->email(),
            'phone' => $this->faker->phoneNumber(),
            'gender' => $this->faker->randomElement(['Male', 'Female']),
        ];
    }
}
