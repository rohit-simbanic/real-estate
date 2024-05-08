import Image from "next/image";
import React from "react";

const PreConstructedProject = () => {
  const properties = [
    {
      title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      beds: "4 Beds",
      baths: "4 Baths",
      sqft: "8000sqf",
      price: "$5000",
      rating: "5.0(30)",
    },
    {
      title: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
      imageSrc:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      beds: "4 Beds",
      baths: "4 Baths",
      sqft: "8000sqf",
      price: "$5000",
      rating: "5.0(30)",
    },
    {
      title: "3723 SANDBAR DR, Addis, LA 70710, USA",
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      beds: "4 Beds",
      baths: "4 Baths",
      sqft: "8000sqf",
      price: "$5000",
      rating: "5.0(30)",
    },
    {
      title: "4400 Brightwork Way, Spring, TX 77386, USA",
      imageSrc:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Additional item's image URL
      beds: "3 Beds",
      baths: "2 Baths",
      sqft: "6000sqf",
      price: "$4500",
      rating: "4.8(25)",
    },
  ];

  return (
    <div className="container relative lg:mt-24 mt-16 px-4">
      <div className="flex flex-wrap justify-center gap-8 mt-8"></div>
    </div>
  );
};

export default PreConstructedProject;
