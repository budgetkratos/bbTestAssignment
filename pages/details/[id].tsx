import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import InfoBlock from "../../components/InfoBlockComponent/InfoBlock";

export default function IndividualShipData() {
  const router = useRouter();
  console.log("router", router.query.id);

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
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_INDIVIDUAL_SHIP);

  if (loading) {
    return <h2>Loading Data...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Sorry, there's been an error...</h2>;
  }

  const { ship } = data;
  console.log("ship", ship);

  return (
    <div>
      {/* {ships.map((ship) => (
        <ShipCard key={ship.id} props={ship} />
      ))} */}
      <InfoBlock props={ship} />
    </div>
  );
}
