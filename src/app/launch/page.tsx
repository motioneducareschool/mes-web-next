import type { Metadata } from "next";
import LaunchPage from "@/components/launch/launch";

export const metadata: Metadata = {
  title: "Motion Educare School",
  description:
    "Motion Educare School provides top-quality education with experienced faculty, interactive learning, and a student-centric approach. Enroll today for a brighter future!",
  robots: "index, follow", // Allows Google to index this page
  alternates: {
    canonical: "https://motioneducareschool.in/launch",
  },
};
export default function page() {
  return (
    <>
      <LaunchPage />
    </>
  );
}
