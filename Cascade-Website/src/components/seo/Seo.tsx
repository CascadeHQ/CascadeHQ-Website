import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  type: string;
  name: string;
};

const seo = ({ title, description, type, name }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default seo;
