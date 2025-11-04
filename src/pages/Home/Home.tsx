import FlashSales from "../../components/Flash Sales/FlashSales";
import Hero from "../../components/Hero/Hero";
import { BrowseCategoryData, CategoryList } from "../../data/data";
import Container from "../../utility/Container";
import { FLashSales } from "../../data/data";
import BrowseCategory from "../../components/Browse Category/BrowseCategory";
import BestSell from "../../components/Best Selling/BestSell";
import ExploreProducts from "../../components/Explore Products/ExploreProducts";
import NewArrival from "../../components/NewArrival/NewArrival";
import { NewArrivalList, SupportList } from "../../data/data";


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <Hero catList={CategoryList} />
      <FlashSales salesProducts={FLashSales} />
      <BrowseCategory CategoryList={BrowseCategoryData} />
      <BestSell data={FLashSales} />
      <ExploreProducts exploreProducts={FLashSales} />
      <NewArrival arriaval={NewArrivalList} supports={SupportList} />
    </Container>
  );
};

export default Home;
