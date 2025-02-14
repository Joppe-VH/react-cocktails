import useSWR from "swr";
import { fetcher } from "../helpers";
import type { CocktailDetails, CocktailResponse } from "../types/Cocktail";

export const useCocktailDetail = (id: number) => {
  const { data, ...swrProps } = useSWR<CocktailResponse<CocktailDetails>>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );
  return {
    ...swrProps,
    cocktailDetails: data?.drinks[0],
  };
};
