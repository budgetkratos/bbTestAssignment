import Link from "next/link";
import ShipFrontPageStyles from "../DetailViewFrontPage/ShipFrontPage.module.css";
import cardArrow from "../../public/cardArrow.svg";
import { ShipFrontPageProps } from "../../helpers/interfaces";

const ShipFrontPage = ({ props }: ShipFrontPageProps) => {
  const { name, image, type } = props;

  return (
    <div className={ShipFrontPageStyles.frontPageContainer}>
      <Link href="/">
        <img className={ShipFrontPageStyles.cardArrow} src={cardArrow.src} />
      </Link>
      <img className={ShipFrontPageStyles.frontPageImage} src={image} />
      <div className={ShipFrontPageStyles.frontPageTextContainer}>
        <div className={ShipFrontPageStyles.frontPageShipTitle}>{name}</div>
        <div className={ShipFrontPageStyles.frontPageShipType}>{type}</div>
      </div>
    </div>
  );
};

export default ShipFrontPage;
