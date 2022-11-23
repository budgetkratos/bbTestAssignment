import ShipCardStyles from "../ShipCardComponent/ShipCard.module.css";
import cardArrow from "../../public/cardArrow.svg";
import Link from "next/link";

const ShipCard = ({ props }) => {
  const { id, image, name, type } = props;
  return (
    <div className={ShipCardStyles.cardContainer}>
      <img className={ShipCardStyles.image} src={image} />
      <div className={ShipCardStyles.cardBottomText}>
        <div className={ShipCardStyles.cardBottomLeftText}>
          <div className={ShipCardStyles.shipName}>{name}</div>
          <div className={ShipCardStyles.shipType}>{type}</div>
        </div>
        <Link href={`/details/${id}`}>
          <img className={ShipCardStyles.cardArrow} src={cardArrow.src} />
        </Link>
      </div>
    </div>
  );
};

export default ShipCard;
