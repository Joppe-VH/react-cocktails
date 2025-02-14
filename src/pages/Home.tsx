import CocktailDetail from "../components/CocktailDetail";
import { fetcher } from "../helpers";
import useSWR from "swr";
import type { CocktailResponse, CocktailDetails } from "../types/Cocktail";

const Home = () => {
  const { data, error } = useSWR<CocktailResponse<CocktailDetails>>(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const cocktailDetails = data?.drinks[0];
  return (
    <>
      <h1 className="subtle">Home</h1>
      {error && <p>error.message</p>}
      {cocktailDetails && <CocktailDetail details={cocktailDetails} />}
    </>
  );
};
export default Home;
