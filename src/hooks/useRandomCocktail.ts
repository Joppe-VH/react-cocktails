import useSWR from "swr";
import { fetcher } from "../helpers";
import type { CocktailDetails, CocktailResponse } from "../types/Cocktail";

export const useRandomCocktail = () => {
  const { data, ...swrProps } = useSWR<CocktailResponse<CocktailDetails>>(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    fetcher,
    { revalidateOnFocus: false }
  );
  return {
    ...swrProps,
    cocktailDetails: data?.drinks[0],
  };
};
