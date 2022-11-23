export type ShipFrontPageProps = {
  props: {
    name: string;
    image: string;
    type: string;
  };
};

export type InfoBlockProps = {
  props: {
    home_port: string;
    weight_kg: number;
    year_built: number;
    class: string;
  };
};

export type InfoItemProps = {
  titleData: string;
  title: string;
};

export type MissionsListProps = {
  props: {
    missions: Array<MissionObject>;
  };
};

export type MissionObject = {
  name: string;
  flight: string;
  missionFlight: string;
};

export type ShipCardProps = {
  props: {
    id: string;
    image: string;
    name: string;
    type: string;
  };
};

export type ShipProps = {
  id: string;
  image: string;
  name: string;
  type: string;
};
