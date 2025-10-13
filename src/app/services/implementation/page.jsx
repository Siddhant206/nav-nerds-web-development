import React from "react";
import { generateMetadata } from "@/component/SEO/generateMetadata";
import { pagesMetadata } from "@/component/SEO/pages-metadata";
import ImplementationPage from "./implementationPage";

export const metadata = generateMetadata(pagesMetadata.implementationServicesMetadata);
export default function page() {
  return (
    <div>
      <ImplementationPage />
    </div>
  );
}
