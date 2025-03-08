import HostelPage from "@/components/hostel";
import TimetablePage from "@/components/timetable.tsx";
import React from "react";

export const metadata = {
  title: "Class Timetables | Motion Educare School",
  description:
    "Find the latest class schedules and timetables for different grades at Motion Educare School.",
  keywords: ["Class Schedule", "School Timetable", "Daily Routine"],
};

export default function Apage() {
  return (
    <>
      <TimetablePage />
    </>
  );
}
