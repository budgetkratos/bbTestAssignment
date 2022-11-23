import ShipCardStyles from "../ShipCard/ShipCard.module.css";
import cardArrow from "../../public/cardArrow.svg";

const ShipCard = ({ props }) => {
  console.log("cardArrow", cardArrow);
  const { image, name, type } = props;
  return (
    <div className={ShipCardStyles.cardContainer}>
      <img className={ShipCardStyles.image} src={image} />
      <div className={ShipCardStyles.cardBottomText}>
        <div className={ShipCardStyles.cardBottomLeftText}>
          <div className={ShipCardStyles.shipName}>{name}</div>
          <div className={ShipCardStyles.shipType}>{type}</div>
        </div>
        <img className={ShipCardStyles.cardArrow} src={cardArrow.src} />
      </div>
    </div>
  );
};

export default ShipCard;
