"use client";
import PropertyCard from "@/components/cards/property-card";
import SectionTitle from "@/theme/components/section-title/section-title";
import React, { useState } from "react";
import propertiesData from "../../../../data/featured-property.json";
import { PropertyDetails } from "@/types/property-card-types";
import Pagination from "@/theme/components/pagination/pagination-button";

const FeaturedListing = () => {
  const cardsData = [1, 2, 3, 4];
  const property: PropertyDetails[] = propertiesData as PropertyDetails[];
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
            <PropertyCard details={item} index={index} />
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
