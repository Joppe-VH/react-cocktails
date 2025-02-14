import CocktailDetail from "../components/CocktailDetail";
import { useRandomCocktail } from "../hooks/useRandomCocktail";

const Home = () => {
  const { cocktailDetails, error } = useRandomCocktail();
  return (
    <>
      <h1 className="subtle">Home</h1>
      {error && <p>error.message</p>}
      {cocktailDetails && <CocktailDetail details={cocktailDetails} />}
    </>
  );
};
export default Home;
