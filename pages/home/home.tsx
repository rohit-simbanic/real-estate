import React from "react";
import Banner from "./features/components/banner";
import FeaturedListing from "./features/components/featuredListing";
import PreConstructedProject from "./features/components/preConstructedProject";
import { Property } from "@/types/constructed-property-card-types";
import MapComponent from "./features/components/map";
import CalculatorGrid from "./features/components/services/calculator-grid";

const HomePage: React.FC = () => {
  const dataProperty: Property[] = [
    {
      imageUrl:
        "https://filecenter.bestforagents.com/fileManager/System-Folder/PreSalesImages/Lake%20Pointe/ProjectsList/LakePointe_condo_fp_01.jpg",
      title: "Lake Pointe",
      address: "253 Lake Driveway W, Ajax, ON L1S 5B5",
    },
    {
      imageUrl:
        "https://filecenter.bestforagents.com/fileManager/System-Folder/PreSalesImages/Kipling%20Station/ProjectsList/KiplingStation_condo_fp_01.jpg",
      title: "Kipling Station",
      address: "5251 Dundas St W, Etobicoke, ON M9B 1B1",
    },
    {
      imageUrl:
        "https://filecenter.bestforagents.com/fileManager/System-Folder/PreSalesImages/UnionCity/ProjectsList/UnionCity_condo_fp_01.jpg",
      title: "UnionCity",
      address: "Enterprise Boulevard & University Boulevard Markham L3R 2E4",
    },
    {
      imageUrl:
        "https://filecenter.bestforagents.com/fileManager/System-Folder/PreSalesImages/Raglan%20House/ProjectsList/RaglanHouse_condo_fp_01.jpg",
      title: "Raglan House",
      address: "77 Raglan Ave, Toronto ON M6C 2K7",
    },
    {
      imageUrl:
        "https://filecenter.bestforagents.com/fileManager/System-Folder/PreSalesImages/Fairway%20Meadows/ProjectsList/FairwayMeadows_condo_fp_01.jpg",
      title: "Fairway Meadows",
      address: "Franklin Boulevard & Saginaw Parkway, Cambridge, ON",
    },
    {
      imageUrl:
        "https://filecenter.bestforagents.com/fileManager/System-Folder/PreSalesImages/Exhale/ProjectsList/Exhale_condo_fp_01.jpg",
      title: "Exhale",
      address: "1381 Lakeshore Rd E, Mississauga, ON L5E 1G6",
    },
  ];
  return (
    <div>
      <Banner />
      <FeaturedListing />
      <PreConstructedProject property={dataProperty} />
      <CalculatorGrid />
      <MapComponent />
    </div>
  );
};

export default HomePage;
