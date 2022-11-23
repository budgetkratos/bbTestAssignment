import Link from "next/link";
import InfoItem from "./InfoItem";
import InfoBlockStyles from "./InfoBlock.module.css";
import basicInfoArrow from "../../public/basicInfoArrow.svg";

const InfoBlock = ({ props }) => {
  const { home_port, missions, weight_kg, year_built } = props;
  return (
    <div className={InfoBlockStyles.frontPageInfoContainer}>
      <div className={InfoBlockStyles.basicInfoContainer}>
        <div className={InfoBlockStyles.basicInfoTitle}>Basic info</div>
        <img
          className={InfoBlockStyles.basicInfoArrow}
          src={basicInfoArrow.src}
        />
      </div>
      {year_built ? (
        <InfoItem titleData={year_built} title="Year built" />
      ) : null}
      {weight_kg ? (
        <InfoItem titleData={`${weight_kg} kg`} title="Weight" />
      ) : null}
      {props.class ? <InfoItem titleData={props.class} title="Class" /> : null}
      {home_port ? <InfoItem titleData={home_port} title="Home port" /> : null}
    </div>
  );
};

export default InfoBlock;
