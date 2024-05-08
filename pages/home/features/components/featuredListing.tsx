"use client";
import PropertyCard from "@/components/cards/property-card";
import { Pagination } from "@/theme/components/Pagination/pagination";
import SectionTitle from "@/theme/components/section-title/section-title";
import { PropertyDetails } from "@/types/property-card-types";
import Image from "next/image";
import React, { useState } from "react";
const property: PropertyDetails[] = [
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoC8140516-1.jpeg",
    price: "$1,800",
    address: "197 DUNDAS ST, TORONTO",
    bathrooms: 1,
    bedrooms: 2,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoE8251270-1.jpeg",
    price: "$1,175,000",
    address: "9 MCHUGH RD, AJAX ",
    bathrooms: 4,
    bedrooms: 5,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoX6214100-1.jpeg",
    price: "$1,175,000",
    address: "7100 COUNTY RD 18, ALNWICK/HALDIMAND",
    bathrooms: 1,
    bedrooms: 3,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoS8106550-1.jpeg",
    price: "$1,495,000",
    address: "1005 LAIDLAW AVE,SEVERN",
    bathrooms: 3,
    bedrooms: 3,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoN8307682-1.jpeg",
    price: "$4,050",
    address: "38 BROOKFAM ST, RICHMOND HILL",
    bathrooms: 4,
    bedrooms: 4,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoN8278754-1.jpeg",
    price: "$3,498,000",
    address: "130 MELLINGS DR, VAUGHAN",
    bathrooms: 6,
    bedrooms: 6,
  },

  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoC8288226-1.jpeg",
    price: "$1,499,900",
    address: "258 BETTY ANN DR, TORONTO",
    bathrooms: 3,
    bedrooms: 5,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoC8289810-1.jpeg",
    price: "$1,399,000",
    address: "237 BROADWAY AVE, TORONTO",
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    imageUrl:
      "https://filecenter2.bestforagents.com/Properties/TrebIDXImages/PhotoC8065868-1.jpeg",
    price: "$3,700",
    address: "123 PORTLAND ST, TORONTO",
    bathrooms: 2,
    bedrooms: 3,
  },
];
const FeaturedListing = () => {
  const cardsData = [1, 2, 3, 4];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(property.length / itemsPerPage);

  const currentItems = property.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4 my-10">
        <SectionTitle
          title="Featured Listings"
          description="Check New Listings"
        />
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
          >
            <PropertyCard details={item} />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </section>
  );
};

export default FeaturedListing;
