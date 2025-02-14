import useSWR from "swr";
import { fetcher, slugit } from "../helpers";
import type { Cocktail, CocktailResponse } from "../types/Cocktail";
import { Link } from "react-router";
import CocktailCard from "../components/cocktailCard";

const Cocktails = () => {
  const {
    data: cocktails,
    isLoading,
    error,
  } = useSWR<CocktailResponse<Cocktail>>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );
  return (
    <>
      <h1>Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="cocktails">
        {cocktails?.drinks &&
          cocktails.drinks.map((cocktail) => (
            <li key={cocktail.idDrink}>
            <CocktailCard cocktail={cocktail} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cocktails;
