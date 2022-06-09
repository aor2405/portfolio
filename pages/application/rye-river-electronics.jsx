import React from 'react';
import Link from 'next/link';

export default function ryeRiverElectronics() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-12 text-2xl font-bold text-sky-900 text-center">
          Rye River Electronics
        </h1>
        <h3 className="mt-6 text-4xl text-center">
          Full Stack application with Stripe integration
        </h3>
        <div className="max-w-4xl mx-auto mt-6">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.42.10_xsbstl.png"
            alt=""
            className=" mt-4 mx-auto sm:mt-0 border rounded-xl"
          />
        </div>

        <div className="flex justify-center mt-6">
          <Link href="">
            <a className="underline text-sky-900">
              <p>Link to website</p>
            </a>
          </Link>
          <Link href="">
            <a className="ml-4 underline text-sky-900">
              <p>Link to GitHub repository</p>
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-2 mt-12">
          <h3 className="text-2xl">Project Overview</h3>
          <div>
            The objective of this project was to build a modern full stack
            application that also included payments functionality. The
            application has a clean, simple and modern design. It also comes
            with the ability to easily add, edit or delete products through the
            Sanity CMS.
          </div>
        </div>
      </div>
    </>
  );
}
