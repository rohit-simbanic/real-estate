"use client";

import ButtonRegister from "@/components/button/button-register";
import { Pagination } from "@/theme/components/pagination/pagination";
import SectionTitle from "@/theme/components/section-title/section-title";
import { Property } from "@/types/constructed-property-card-types";
import Image from "next/image";
import React, { useState } from "react";

const PreConstructedProject: React.FC<{ property: Property[] }> = ({
  property = [],
}) => {
  const cardsData = [1, 2, 3, 4];
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(property?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = property.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4 my-10">
        <SectionTitle
          title="Latest Pre-Construction Projects"
          description="CLICK ON IMAGES FOR MORE DETAILS"
        />
        {currentItems.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
          >
            <div className="rounded overflow-hidden shadow-lg hover:shadow-xl dark:bg-gray-900">
              <Image
                src={card.imageUrl}
                alt="Property Image"
                width={600}
                height={300}
                layout="responsive"
                className="!h-[300px]"
              />
              <div className="px-4 py-4">
                <div className="mb-2">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-teal-600 pb-3">
                    {card.title}
                  </h2>
                  <p className="dark:text-teal-600 my-2 text-sm h-[53px]">
                    {card.address}
                  </p>
                  <ButtonRegister href={"/"} text={"Register"} />
                </div>
              </div>
            </div>
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

export default PreConstructedProject;
