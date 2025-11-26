import { API_BASE_URL } from "../constant";
import type { HeroProfileType, HeroType } from "../types/hero";

export const api = {
  async getHeroes(): Promise<HeroType[]> {
    const response = await fetch(`${API_BASE_URL}/heroes`);
    if (!response.ok) {
      throw new Error("Failed to fetch heroes");
    }
    return response.json();
  },

  async getHero(heroId: string): Promise<HeroType> {
    const response = await fetch(`${API_BASE_URL}/heroes/${heroId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch hero ${heroId}`);
    }
    return response.json();
  },

  async getHeroProfile(heroId: string): Promise<HeroProfileType> {
    const response = await fetch(`${API_BASE_URL}/heroes/${heroId}/profile`);
    if (!response.ok) {
      throw new Error(`Failed to fetch hero profile ${heroId}`);
    }
    return response.json();
  },

  async updateHeroProfile(
    heroId: string,
    profile: HeroProfileType
  ): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/heroes/${heroId}/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    if (!response.ok) {
      throw new Error(`Failed to update hero profile ${heroId}`);
    }
  },
};
