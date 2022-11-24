import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import InfoBlock from "../../components/InfoBlockComponent/InfoBlock";
import ShipFrontPage from "../../components/DetailViewFrontPage/ShipFrontPage";
import ShipFrontPageStyles from "../../components/DetailViewFrontPage/ShipFrontPage.module.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import MissionList from "../../components/MissionListComponent/MissionList";

export default function IndividualShipData() {
  const router = useRouter();

  const GET_INDIVIDUAL_SHIP = gql`
  query shipQuery($id: ID! = "${router.query.id}") {
    ship(id: $id) {
      type
      weight_kg
      year_built
      class
      missions {
        flight
        name
      }
      home_port
      image
      name
    }
  }
  
  `;

  const { data, loading, error } = useQuery(GET_INDIVIDUAL_SHIP);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.error(error);
    return <h2>Sorry, there has been an error...</h2>;
  }

  const { ship } = data;

  return (
    <div className={ShipFrontPageStyles.container}>
      <ShipFrontPage props={ship} />
      <InfoBlock props={ship} />
      <MissionList props={ship} />
    </div>
  );
}
