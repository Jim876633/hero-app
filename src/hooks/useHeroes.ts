import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useHeroes = () => {
  return useQuery({
    queryKey: ["heroes"],
    queryFn: api.getHeroes,
  });
};
