import HostelPage from "@/components/hostel";
import TransportPage from "@/components/transport";
import React from "react";

export const metadata = {
  title: "Transport Facilities | Motion Educare School",
  description:
    "Safe and reliable school transport services for students. Check routes and details here.",
  keywords: ["School Bus Service", "Transport Routes", "Student Safety"],
};

export default function Apage() {
  return (
    <>
      <TransportPage />
    </>
  );
}
