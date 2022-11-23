import { useQuery, gql } from "@apollo/client";
import ShipCardComponent from "../ShipCardComponent/ShipCard";
import ShipCardStyles from "../ShipCardComponent/ShipCard.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ShipProps } from "../../helpers/interfaces";

const GET_SHIPS = gql`
  query shipsQuery {
    ships {
      id
      name
      image
      type
    }
  }
`;

export default function ShipData() {
  const { data, loading, error } = useQuery(GET_SHIPS);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.error(error);
    return <h2>Sorry, there's been an error...</h2>;
  }

  const { ships } = data;

  return (
    <div className={ShipCardStyles.container}>
      {ships.map((ship: ShipProps) => (
        <ShipCardComponent key={ship.id} props={ship} />
      ))}
    </div>
  );
}
