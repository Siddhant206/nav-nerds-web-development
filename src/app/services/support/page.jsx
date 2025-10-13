import React from 'react'
import SupportPage from './Support';
import { generateMetadata } from '@/component/SEO/generateMetadata';
import { pagesMetadata } from '@/component/SEO/pages-metadata';

export const metadata = generateMetadata(pagesMetadata.supportServicesMetadata);
export default function page() {
  return (
    <div><SupportPage/></div>
  )
}

