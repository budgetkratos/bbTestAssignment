import Link from "next/link";
import InfoItem from "./InfoItem";

const InfoBlock = ({ props }) => {
  console.log("props info block", props);
  const { home_port, missions, type, weight_kg, year_built } = props;
  return (
    <>
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
