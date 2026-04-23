interface DynamicStructuredDataProps {
  pageType?: 'home' | 'blog' | 'blogpost' | 'service';
  title?: string;
  description?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  serviceData?: {
    name: string;
    description: string;
    price?: string;
    category: string;
  };
}

const DynamicStructuredData = (props: DynamicStructuredDataProps) => null;
export default DynamicStructuredData;