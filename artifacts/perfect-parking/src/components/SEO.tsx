import { Helmet } from "react-helmet-async";

const SHARED_TITLE = "Perfect Parking | Hassle-Free Parking Management";
const SHARED_DESCRIPTION =
  "We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners generate consistent monthly revenue from underutilized parking. Zero upfront cost. Zero staff required.";
const DEFAULT_CANONICAL = "https://perfectparking.com/";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
}

export function SEO({
  title = SHARED_TITLE,
  description = SHARED_DESCRIPTION,
  keywords,
  canonical = DEFAULT_CANONICAL,
  robots = "index, follow",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
