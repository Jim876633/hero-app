import type { HeroProfileType } from "../types/hero";

export const STATS: Array<{ key: keyof HeroProfileType; label: string }> = [
  { key: "str", label: "STR" },
  { key: "int", label: "INT" },
  { key: "agi", label: "AGI" },
  { key: "luk", label: "LUK" },
];
export const API_BASE_URL = "https://hahow-recruit.herokuapp.com";
