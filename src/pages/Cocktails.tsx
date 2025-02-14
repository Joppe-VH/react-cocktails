import { useCocktails } from "../hooks/useCocktails";
import CocktailCard from "../components/CocktailCard";

const Cocktails = () => {
  const { cocktails, isLoading, error } = useCocktails();
  return (
    <>
      <h1>Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="cocktails">
        {cocktails?.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <CocktailCard cocktail={cocktail} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cocktails;
