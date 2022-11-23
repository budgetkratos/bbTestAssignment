import Link from "next/link";
import ShipFrontPageStyles from "../DetailViewFrontPage/ShipFrontPage.module.css";

const ShipFrontPage = ({ props }) => {
  const { name, image, type } = props;
  console.log("props ship", props);

  return (
    <>
      <div className={ShipFrontPageStyles.frontPageContainer}>
        <img className={ShipFrontPageStyles.frontPageImage} src={image} />
        <div className={ShipFrontPageStyles.frontPageTextContainer}>
          <div className={ShipFrontPageStyles.frontPageShipTitle}>{name}</div>
          <div className={ShipFrontPageStyles.frontPageShipType}>{type}</div>
        </div>
        <Link href="/">
          <button>back</button>
        </Link>
      </div>
    </>
  );
};

export default ShipFrontPage;
