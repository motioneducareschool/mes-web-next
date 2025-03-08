import GeneralErrorPage from "@/components/error/general-error";
import LibraryPage from "@/components/library";
import React from "react";

export const metadata = {
    title: "Library | Motion Educare School",
    description:
      "A vast collection of books and digital resources to enhance learning at Motion Educare School.",
    keywords: ["School Library", "Books for Students", "Best Learning Resources"],
  };
  

export default function Apage() {
  return (
    <>
      <LibraryPage />
    </>
  );
}
