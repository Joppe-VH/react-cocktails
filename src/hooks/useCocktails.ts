import useSWR from "swr";
import { fetcher } from "../helpers";
import type { Cocktail, CocktailResponse } from "../types/Cocktail";

export const useCocktails = () => {
  const { data, ...swrProps } = useSWR<CocktailResponse<Cocktail>>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );
  return {
    ...swrProps,
    cocktails: data?.drinks,
  };
};
