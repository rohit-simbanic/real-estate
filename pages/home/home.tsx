import React from "react";
import Banner from "./features/components/banner";
import FeaturedListing from "./features/components/featured-listing";
import PreConstructedProject from "./features/components/pre-constructed-project";
import { Property } from "@/types/constructed-property-card-types";
import MapComponent from "./features/components/map";
import CalculatorGrid from "./features/components/services/calculator-grid";
import propertiesData from "../../data/pre-construction-property.json";
import calculatorData from "../../data/calculator-items.json";
import { CalculatorDataProps } from "@/types/calculator-data-types";

const HomePage: React.FC = () => {
  const dataProperty: Property[] = propertiesData as Property[];
  const calculatorItems: CalculatorDataProps[] =
    calculatorData as CalculatorDataProps[];
  return (
    <div>
      <Banner />
      <FeaturedListing />
      <PreConstructedProject property={dataProperty} />
      <CalculatorGrid items={calculatorItems} />
      <MapComponent />
    </div>
  );
};

export default HomePage;
