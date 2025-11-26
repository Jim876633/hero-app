import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import type { HeroProfileType } from "../types/hero";

export const useHeroProfile = (heroId: string | undefined) => {
  return useQuery({
    queryKey: ["heroProfile", heroId],
    queryFn: () => api.getHeroProfile(heroId!),
    enabled: !!heroId,
  });
};

export const useUpdateHeroProfile = (heroId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profile: HeroProfileType) =>
      api.updateHeroProfile(heroId, profile),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroProfile", heroId] });
    },
  });
};
