import type { CocktailDetails } from "../types/Cocktail";
import { JSX } from "react";

type Props = {
  details: CocktailDetails;
  TitleTags?: keyof JSX.IntrinsicElements;
};

const CocktailDetail = ({ details, TitleTags = "h2" }: Props) => {
  return (
    <div className="cocktail-detail">
      <TitleTags>{details.strDrink}</TitleTags>
      <p>{details.strInstructions}</p>
      <div className="img-container">
        <img
          src={
            details.strImageSource ??
            details.strDrinkThumb ??
            "/images/placeholder-cocktail.png"
          }
          alt={details.strDrink}
        />
      </div>
    </div>
  );
};
export default CocktailDetail;
