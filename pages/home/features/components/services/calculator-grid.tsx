import React from "react";
import { CalculatorCard } from "../calculator";
import SectionTitle from "@/theme/components/section-title/section-title";

const CalculatorGrid: React.FC = () => {
  const products = [
    {
      title: "Mortgage Payment",
      imageUrl:
        "https://www.abt.bank/wp-content/uploads/2022/03/Mortgage-Icons_Refinance-Icon.png",
    },
    {
      title: "Mortgage Amortization",
      imageUrl:
        "https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Calculator-icon.png",
    },
    {
      title: "Land Transfer Tax",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Calculator_icon.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 mt-8">
      <SectionTitle
        title="Real Estate Calculators"
        description="SELECT CALCULATOR FROM FOLLOWING LIST"
      />
      <div className="p-1 flex flex-wrap items-center justify-center">
        {products.map((product, index) => (
          <CalculatorCard
            key={index}
            title={product.title}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CalculatorGrid;
