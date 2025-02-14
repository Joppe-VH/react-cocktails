import type { Cocktail } from "../types/Cocktail";
import { Link } from "react-router";
import { slugit } from "../helpers";

type Props = {
  cocktail: Cocktail;
};

const CocktailCard = ({ cocktail }: Props) => {
  return (
    <Link to={`/cocktails/${cocktail.idDrink}/${slugit(cocktail.strDrink)}`}>
      <div className="img-container">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <p>{cocktail.strDrink}</p>
    </Link>
  );
};
export default CocktailCard;
