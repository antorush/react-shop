import { Link } from "react-router";
import type { TNewArrival, TSupprot } from "../../data/data";
import SectionTitle from "../../utility/SectionTitle";
import Container from "../../utility/Container";
import NewArrivalItem from "./NewArriaval";
import Supports from "./Supports";

interface NewArrivalProps {
  arriaval: TNewArrival[];
  supports: TSupprot[];
}

const NewArrival: React.FC<NewArrivalProps> = ({ arriaval, supports }) => {
  return (
    <section>
      <Container>
        <SectionTitle title="New Arrival" subtitle="Featured" />
        <ul className="grid grid-cols-3 max-h-[600px] grid-rows-2 gap-7">
          {arriaval.map((item, index) => (
            <NewArrivalItem item={item} index={index} />
          ))}
        </ul>
        <Supports supports={supports} />
      </Container>
    </section>
  );
};

export default NewArrival;
