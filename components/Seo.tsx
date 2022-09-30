import Head from "next/head";

interface SeoProps {
  title: React.ReactNode;
}

function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

export default Seo;
