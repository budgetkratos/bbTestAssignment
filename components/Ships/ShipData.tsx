import { useQuery, gql } from "@apollo/client";
import ShipCardComponent from "../ShipCardComponent/ShipCard";
import ShipCardStyles from "../ShipCardComponent/ShipCard.module.css";
// import styles from "../birdbuddylistapp/styles/Home.module.css";

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
    return <h2>Loading Data...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Sorry, there's been an error...</h2>;
  }

  const { ships } = data;

  return (
    <div className={ShipCardStyles.container}>
      {ships.map((ship) => (
        <ShipCardComponent key={ship.id} props={ship} />
      ))}
    </div>
  );
}
