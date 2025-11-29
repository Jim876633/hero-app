import { API_BASE_URL } from "../constant";
import type { HeroProfileType, HeroType } from "../types/hero";

export const api = {
  async getHeroes(): Promise<HeroType[]> {
    const response = await fetch(`${API_BASE_URL}/heroes`);
    if (!response.ok) {
      throw new Error("載入英雄列表失敗，請稍後再試！");
    }
    return response.json();
  },

  async getHero(heroId: string): Promise<HeroType> {
    const response = await fetch(`${API_BASE_URL}/heroes/${heroId}`);
    if (!response.ok) {
      throw new Error(`載入英雄失敗，請稍後再試！`);
    }
    return response.json();
  },

  async getHeroProfile(heroId: string): Promise<HeroProfileType> {
    const response = await fetch(`${API_BASE_URL}/heroes/${heroId}/profile`);
    if (!response.ok) {
      throw new Error(`載入英雄的資料失敗，請稍後再試！`);
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
      throw new Error(`更新資料失敗，請稍後再試！`);
    }
  },
};
