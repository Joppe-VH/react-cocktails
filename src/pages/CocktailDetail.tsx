import { fetcher } from "../helpers";
import useSWR from "swr";
import type { CocktailResponse, CocktailDetails } from "../types/Cocktail";
import { useParams } from "react-router";
import CocktailDetail from "../components/CocktailDetail";

const CocktailDetailPage = () => {
  const { id } = useParams();
  const { data, error } = useSWR<CocktailResponse<CocktailDetails>>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );
  const cocktailDetails = data?.drinks[0];
  return (
    <>
      {error && <p>error.message</p>}
      {cocktailDetails && (
        <>
          <CocktailDetail details={cocktailDetails} TitleTags="h1" />
        </>
      )}
    </>
  );
};
export default CocktailDetailPage;
