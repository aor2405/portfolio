import React from 'react';
import Link from 'next/link';

import Pill from '../../components/Pill';

export default function Myqu() {
  const skills = ['React', 'NextJs', 'MongoDB'];

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-2 text-2xl text-purple-500 font-bold sm:text-4xl">
          Tom's phrases
        </h1>
        <h3 className="mt-2 text-xl font-paragraph sm:text-2xl">
          Random quote generator
        </h3>

        <div className="mt-6 sm:flex sm:justify-center">
          <Link href="https://random-quote-generator-ruby.vercel.app/">
            <a className="underline text-purple-500 font-paragraph text-lg sm:text-xl">
              <p>Link to website</p>
            </a>
          </Link>
          <Link href="https://github.com/aor2405/Random-quote-generator">
            <a className="underline text-purple-500 font-paragraph text-lg sm:text-xl sm:ml-4">
              <p>Link to GitHub repository</p>
            </a>
          </Link>
        </div>

        <div className="mx-auto mt-6">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654765589/Screenshot_2022-06-09_at_13.03.19_nomhw7.png"
            alt="Homepage for the random quote generator"
            className="mt-4 mx-auto border border-slate-200 rounded-xl sm:mt-0"
          />
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h3 className="text-3xl font-header text-center col-span-4 sm:text-4xl sm:text-left">
            Project Overview
          </h3>
          <p className="text-xl font-light  font-paragraph col-span-8 mx-2 mt-4 sm:mt-0 sm:text-2xl">
            A small project I completed in the summer of 2021 as a birthday gift
            for my dad containing a collection of phrases he is accustomed to
            saying.
          </p>
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h3 className="text-3xl font-header text-center col-span-4  sm:text-left sm:text-4xl">
            Technologies used
          </h3>
          <div className="flex flex-wrap justify-center gap-y-1 col-span-8 mt-4 sm:mt-0 sm:justify-start">
            <Pill skills={skills} />
          </div>
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655393678/Screenshot_2022-06-16_at_16.34.20_kdyaw7.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
          <div className="sm:ml-12">
            <h3 className="text-3xl font-header text-center mt-4 sm:mt-0 sm:text-4xl sm:text-left">
              Page layout
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655393678/Screenshot_2022-06-16_at_16.34.20_kdyaw7.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="text-xl font-light font-paragraph mt-4 sm:mt-6 sm:text-2xl">
              When a user enters the site, they are met with a quote and a
              button. The user has the ability to click on the 'Click Me' button
              to retirve a quote.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 my-6 sm:grid sm:my-20">
          <div className="sm:mr-12">
            <h3 className="text-3xl font-header text-center mt-4 sm:mt-0 sm:text-4xl sm:text-left">
              Data retrieval
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655393877/Screenshot_2022-06-16_at_16.37.48_o0vec1.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x block sm:hidden sm:mt-0"
            />
            <p className="text-xl font-light mt-6 font-paragraph sm:text-2xl">
              Data is gathered from the MongoDB database using the Fetch API
              after a user hits the 'Click Me' button.The response from the
              fetch request is then stored in an array using the React hook
              useState which is then displayed on the screen.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655393877/Screenshot_2022-06-16_at_16.37.48_o0vec1.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x hidden sm:block sm:mt-0"
          />
        </div>
      </div>
    </>
  );
}
