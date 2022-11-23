import Link from "next/link";
import InfoItem from "./InfoItem";
import InfoBlockStyles from "./InfoBlock.module.css";
import basicInfoArrow from "../../public/basicInfoArrow.svg";

const InfoBlock = ({ props }) => {
  const { home_port, missions, type, weight_kg, year_built } = props;
  return (
    <>
      <div className={InfoBlockStyles.basicInfoContainer}>
        <div className={InfoBlockStyles.basicInfoTitle}>Basic info</div>
        <img
          className={InfoBlockStyles.basicInfoArrow}
          src={basicInfoArrow.src}
        />
      </div>
      <InfoItem titleData={year_built} title="Year built" />
      <InfoItem titleData={`${weight_kg} kg`} title="Weight" />
      <InfoItem titleData={props.class} title="Class" />
      <InfoItem titleData={home_port} title="Home port" />
      <Link href="/">
        <button>back</button>
      </Link>
    </>
  );
};

export default InfoBlock;
