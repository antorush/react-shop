import type { TOptionProduct } from "../../data/data";
import Container from "../../utility/Container";
import SectionTitle from "../../utility/SectionTitle";
import FLashSalesItem from "../Flash Sales/FlashSalesItem";

interface ExploreProductsProps {
  exploreProducts: TOptionProduct[];
}

const ExploreProducts: React.FC<ExploreProductsProps> = ({
  exploreProducts,
}) => {
  return (
    <section className="block pt-[77px]">
      <Container>
        <SectionTitle
          flexMode="justify-between"
          title="Explore Our Products"
          subtitle="Our Products"
        />
        <ul className="grid mt-[60px] grid-cols-4 place-content-center grid-rows-2 gap-x-[30px] gap-y-[60px]">
          {exploreProducts
            .filter((product) => !product.isSale || product.newProduct)
            .slice(0, 8)
            .map((item) => (
              <FLashSalesItem key={item.id} product={item} />
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default ExploreProducts;
