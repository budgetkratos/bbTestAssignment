import MissionListStyles from "../MissionListComponent/MissionList.module.css";
import missionInfoArrow from "../../public/basicInfoArrow.svg";
import cardArrow from "../../public/cardArrow.svg";
import Link from "next/link";

const MissionList = ({ props }) => {
  const { missions } = props;
  return (
    <div className={MissionListStyles.container}>
      <div className={MissionListStyles.missionInfoContainer}>
        <div className={MissionListStyles.missionInfoTitle}>Missions</div>
        <img
          className={MissionListStyles.missionInfoArrow}
          src={missionInfoArrow.src}
        />
      </div>
      {missions.map((mission) => {
        return (
          <div
            key={`${mission.name}-${mission.missionFlight}`}
            className={MissionListStyles.singleMissionContainer}
          >
            <div className={MissionListStyles.missionName}>{mission.name}</div>
            <div className={MissionListStyles.missionFlight}>
              Flight: {mission.flight}
            </div>
          </div>
        );
      })}
      <div className={MissionListStyles.cardArrowContainer}>
        <Link href="/" className={MissionListStyles.cardArrowLink}>
          <img className={MissionListStyles.cardArrow} src={cardArrow.src} />
          <div className={MissionListStyles.cardArrowText}>
            Back to the list
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MissionList;
