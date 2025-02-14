import { useParams } from "react-router";
import CocktailDetail from "../components/CocktailDetail";
import { useCocktailDetail } from "../hooks/useCocktailDetail";

const CocktailDetailPage = () => {
  const { id } = useParams();
  const { cocktailDetails, error } = useCocktailDetail(Number(id));
  return (
    <>
      {error && <p>error.message</p>}
      {cocktailDetails && (
        <CocktailDetail details={cocktailDetails} TitleTags="h1" />
      )}
    </>
  );
};
export default CocktailDetailPage;
