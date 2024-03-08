import Template from "../../widgets/Template";
import Seo from "../../components/seo/Seo";

const Blog = () => {
  return (
    <Template>
      <>
        <Seo
          title="Blog | Home Page"
          description="description for about page"
          type="Website"
          name="Cascade"
        />
        <div className="h-screen font-DegularDiplayBold flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-wider">
              COMING SOON...
            </h1>
            <p className="mx-auto my-0 w-4/5 tracking-widest text-sm md:text-lg lg:text-xl lg:leading-6">
              This page is currently under construction and will be revealed
              very soon by our team.
            </p>
          </div>
        </div>
      </>
    </Template>
  );
};

export default Blog;
