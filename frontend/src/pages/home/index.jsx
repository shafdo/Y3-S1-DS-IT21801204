import { BlogCard } from '../../components';

const HomePage = () => {
  return (
    <>
      <p className="text-center my-12 text-4xl">Course Public Listing</p>
      <div className="container block mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-16">
          <BlogCard
            title="API Testing with Postman"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta nobis voluptas porro fugit ut."
            createdDate="January 10 2024"
            author="Shalinda Fernando"
            price={20}
          />
          <BlogCard
            title="API Testing with Postman"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta nobis voluptas porro fugit ut."
            createdDate="January 10 2024"
            author="Shalinda Fernando"
            price={20}
          />
          <BlogCard
            title="API Testing with Postman"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta nobis voluptas porro fugit ut."
            createdDate="January 10 2024"
            author="Shalinda Fernando"
            price={20}
          />
          <BlogCard
            title="API Testing with Postman"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta nobis voluptas porro fugit ut."
            createdDate="January 10 2024"
            author="Shalinda Fernando"
            price={20}
          />
          <BlogCard
            title="API Testing with Postman"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta nobis voluptas porro fugit ut."
            createdDate="January 10 2024"
            author="Shalinda Fernando"
            price={20}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
