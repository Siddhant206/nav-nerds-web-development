import { generateMetadata } from "@/component/SEO/generateMetadata";
import { pagesMetadata } from "@/component/SEO/pages-metadata";
import ContactSection from "./ContactUsClient";

export const metadata = generateMetadata(pagesMetadata.contact);

export default function ContactUsPage() {
  return <ContactSection />;
}
