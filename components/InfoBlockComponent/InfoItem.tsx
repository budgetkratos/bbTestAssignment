import InfoBlockStyles from "./InfoBlock.module.css";
import infoBlock from "../../public/infoBlock.svg";
import { InfoItemProps } from "../../helpers/interfaces";

const InfoItem = (props: InfoItemProps) => {
  const { titleData, title } = props;
  return (
    <div className={InfoBlockStyles.infoContainer}>
      <div className={InfoBlockStyles.infoCardContainer}>
        <img className={InfoBlockStyles.infoFrame} src={infoBlock.src} />
        <div className={InfoBlockStyles.textContainer}>
          <div className={InfoBlockStyles.title}>{title}</div>
          <div className={InfoBlockStyles.titleData}>{titleData}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
