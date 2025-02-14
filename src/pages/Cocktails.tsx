import useSWR from "swr";
import { fetcher, slugit } from "../helpers";
import type { Cocktail, CocktailResponse } from "../types/Cocktail";
import { Link } from "react-router";

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
              <Link
                to={`/cocktails/${cocktail.idDrink}/${slugit(
                  cocktail.strDrink
                )}`}
              >
                <div className="img-container">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </div>
                <p>{cocktail.strDrink}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Cocktails;
