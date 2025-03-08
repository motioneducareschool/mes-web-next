import FeeStructure from "@/components/fee-structure";
import React from "react";

export const metadata = {
  title: "Fee Structure | Motion Educare School",
  description:
    "Check our transparent and affordable fee structure for all grades. Scholarships available!",
  keywords: ["School Fees", "Affordable Education", "Scholarships"],
};

export default function Fpage() {
  return (
    <>
      <FeeStructure />
    </>
  );
}
