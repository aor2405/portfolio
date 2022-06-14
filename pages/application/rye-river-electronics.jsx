import React from 'react';
import Link from 'next/link';
import Pill from '../../components/Pill';

export default function ryeRiverElectronics() {
  const skills = ['JavaScript', 'React', 'NextJs', 'Sanity', 'Stripe'];

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-6 text-3xl font-header font-bold text-sky-900 sm:text-5xl sm:mt-12">
          Rye River Electronics
        </h1>
        <h3 className="mt-6 text-xl font-paragraph sm:text-2xl">
          Full Stack application with Stripe integration
        </h3>

        <div className="mt-6 sm:flex sm:justify-center">
          <Link href="https://rye-river-electronics.vercel.app/">
            <a className="underline text-sky-600 font-paragraph text-lg sm:text-xl">
              <p>Link to website</p>
            </a>
          </Link>
          <Link href="https://github.com/aor2405/Ecommerce-Website">
            <a className="underline text-sky-600 font-paragraph text-lg sm:text-xl sm:ml-4 ">
              <p>Link to GitHub repository</p>
            </a>
          </Link>
        </div>

        <div className="mx-auto mt-6">
          <img
            src=" https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.40.38_xljaqd.png"
            alt=""
            className="mt-4 mx-auto border border-slate-200 rounded-xl sm:mt-0"
          />
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h2 className="text-3xl font-header text-center col-span-4 sm:text-4xl sm:text-left">
            Project Overview
          </h2>
          <p className="text-xl font-light font-paragraph col-span-8 mx-2 mt-4 sm:mt-0 sm:text-2xl">
            The objective of this project was to build a modern full stack
            E-commerce application that also included a payments functionality.
            The application had to have a clean, simple and modern design. It
            also comes with the ability to easily add, edit or delete products
            through the Sanity Studio CMS.
          </p>
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h2 className="text-3xl font-header text-center col-span-4 sm:text-left sm:text-4xl">
            Technologies used
          </h2>
          <div className="flex flex-wrap justify-center col-span-8 gap-y-1 mt-4 sm:mt-0 sm:justify-start">
            <Pill skills={skills} />
          </div>
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h2 className="text-3xl font-header text-center col-span-4 sm:text-left sm:text-4xl">
            Challenges Faced
          </h2>
          <div className="col-span-8">
            <p className="mx-2 text-xl font-light font-paragraph mt-4 sm:mt-0 sm:text-2xl">
              This was the first E-commerce site that I have created. The
              biggest challenge I faced was trying to decide how my backend was
              going to be structured. While researching E-commerce sites, I came
              across a platform called Sanity. Sanity is a headless CMS,
              basically a platform for structured content that allows you to
              store data for your website/applications.
            </p>
            <p className="mx-2 mt-6 text-xl font-light font-paragraph sm:text-2xl">
              After connecting Sanity to my application, I created a schema that
              was the structure of the data. For example, in my E-commerce
              application, I need to display a product that will be for sale. In
              my Schema, I defined this product, giving it information such as a
              title, an image, a price, a description and a list of features
              etc. After creating this schema, I can go over to the Sanity
              Studio. Once here, I can create a new product where I will be met
              with the input fields that I defined inside my Schema.
            </p>
            <p className="mx-2 mt-6 text-xl font-light font-paragraph sm:text-2xl ">
              By taking advantage of using Sanity, I massively cut down my
              workload
            </p>
          </div>
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.42.10_xsbstl.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
          <div className="sm:mx-12">
            <h2 className="text-3xl font-header text-center mt-4 sm:mt-0 sm:text-4xl sm:text-left">
              Page Layout
            </h2>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.42.10_xsbstl.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="mx-2 text-xl font-light font-paragraph mt-4 sm:mt-6 sm:text-2xl">
              The page is laid out in a simple and modern style in rows of four.
              Here we display a picture of the product along with the product
              title and price. Each product is generated through the NextJs
              'getServerSideProps' function for server side rendering. This
              means that the data is fetched first before it is sent to the
              client side. This method allows us to improve our SEO as the data
              is rendered before reaching the client.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 mt-6 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.42.40_emjfxl.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x block sm:hidden sm:mt-0"
          />
          <p className="mx-2 mr-12 text-xl font-light mt-6 font-paragraph sm:text-2xl ">
            This page displays all the essentials that a product should have
            including a features section that is unique to each product. The
            data for each product is stored on the Sanity cloud and is fetched
            using the NextJS 'getStaticProps' function for static site
            generation. NextJs will pre-render the page at build time.
            Recommended to be used when fetching data from a headless CMS which
            Sanity is.
          </p>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.42.40_emjfxl.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.43.11_bzshc9.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
          <div className="sm:mx-12">
            <h2 className="text-3xl font-header text-center sm:text-4xl sm:text-left">
              Cart functionality
            </h2>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.43.11_bzshc9.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="mx-2 text-xl font-light mt-6 font-paragraph sm:text-2xl ">
              The user has the ability to add products to a cart. Once inside
              the cart, a user can increase or decrease the quaintly of the
              product, remove the product from the cart or proceed to purchasing
              the product. The data for the cart is held through the use of the
              useContext hook provided by React.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 my-12 sm:grid sm:my-20">
          <div className="sm:mr-12">
            <h2 className="text-3xl font-header text-center sm:text-4xl sm:text-left">
              Stripe payments
            </h2>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.43.37_ne5s7v.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="mx-2 text-xl font-light mt-6 font-paragraph sm:text-2xl">
              Payments are carried out externally and securely through the use
              of the Stripe API.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.43.37_ne5s7v.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
        </div>
      </div>
    </>
  );
}
