import React from 'react';
import Link from 'next/link';

import Pill from '../../components/Pill';
import MyquLogo from '../../components/MyquLogo';

export default function Myqu() {
  const skills = [
    'TypeScript',
    'React',
    'NextJs',
    'PostgreSQL',
    'Stripe',
    'Jest',
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <MyquLogo />
        <h3 className="mt-2 text-xl font-paragraph sm:text-2xl">
          Effective hiring with data
        </h3>

        <div className="mt-6 sm:flex sm:justify-center">
          <Link href="https://www.myqu.io/">
            <a className="underline text-teal-500 font-paragraph text-lg sm:text-xl">
              <p>Link to website</p>
            </a>
          </Link>
        </div>

        <div className="mx-auto mt-6">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116311/Screenshot_2022-06-13_at_14.31.34_aykl6f.png"
            alt=""
            className="mt-4 mx-auto border border-slate-200 rounded-xl sm:mt-0"
          />
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h3 className="text-3xl font-header text-center col-span-4 sm:text-4xl sm:text-left">
            Project Overview
          </h3>
          <p className="text-xl font-light font-paragraph col-span-8 mx-2 mt-4 sm:mt-0 sm:text-2xl">
            I started my software developer career with MyQu in May 2021. With
            MyQu, organisations evolve their hiring approach to one that is
            about people and business drivers. MyQu helps de-risk recruitment
            processes, hire more diverse candidates by removing bias, and map
            candidate motivations with organisational values and culture.
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

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h3 className="text-3xl font-header text-center col-span-4  sm:text-left sm:text-4xl">
            Challenges Faced
          </h3>
          <div className="col-span-8">
            <p className="mx-2 text-xl font-light font-paragraph mt-4 sm:mt-0 sm:text-2xl">
              The biggest challenge I faced when starting with MyQu was getting
              accustomed with the tech stack that was used to build the project.
              I had little experience with React at that point but had never
              used NextJs, TypeScript, TailwindCSS and Jest. During the
              onboarding process, I took the time to complete Udemy and youTube
              tutorial courses to get to a standard level where I could begin
              working on the application.
            </p>
            <p className="mx-2 mt-6 text-xl font-light font-paragraph sm:text-2xl">
              After my onboarding process, I worked closely with the lead
              developer and the design team to implement front-end designs that
              where created. This is where I got to put my newly acquired skills
              into practise.
            </p>
            <p className="mx-2 mt-6 text-xl font-light font-paragraph sm:text-2xl">
              The biggest benefit I got from working with MyQu was being part of
              a small two man development team. This allowed me to work
              alongside the lead developer who constantly encouraged me to take
              on problems and tasks that where slightly beyond my skill level in
              order to push my knowledge and boundaries. This in turn gave me
              the confidence and belief that I was growing as a developer.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116310/Screenshot_2022-06-13_at_14.30.59_u1wmam.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0 "
          />
          <div className="sm:mx-12">
            <h3 className="text-3xl font-header text-center mt-4 sm:mt-0 sm:text-4xl sm:text-left">
              Onboarding flow
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116310/Screenshot_2022-06-13_at_14.30.59_u1wmam.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0 "
            />
            <p className="mx-2 text-xl font-light font-paragraph mt-4 sm:mt-6 sm:text-2xl">
              When a user creates an account on MyQu, they are sent to the
              onboarding flow. Through this, they can give some details about
              the company they work for, invite members of their staff to the
              platform and then create there first position.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 mt-6 sm:grid sm:mt-20">
          <div className="sm:mx-12">
            <h3 className="text-3xl ">Page Layout</h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116310/Screenshot_2022-06-13_at_14.30.42_d3zofr.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x block sm:hidden sm:mt-0"
            />
            <p className="mx-2 text-xl font-light mt-6 font-paragraph sm:text-2xl">
              A user of the application has the ability to create a position for
              an area they are hiring in. When a candidate applies for a job,
              there information is held within this position.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116310/Screenshot_2022-06-13_at_14.30.42_d3zofr.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x hidden sm:block sm:mt-0"
          />
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655118898/Screenshot_2022-06-13_at_15.14.43_b6v50q.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl sm:mt-0"
          />
          <p className="mx-2 text-xl font-light mt-6 font-paragraph sm:text-2xl sm:ml-12">
            The user then has the ability to click into a candidates profile
            page that will display the candidates data. If the hiring team are
            interested in the candidate, they have request an interview where
            the candidate will receive and email of interest along with a quick
            2 - 3 minute assessment to gather further information on that
            candidate. After this has been completed, the hiring team will
            receive a report detailing the candidates personality traits.
          </p>
        </div>

        <div className="grid-cols-2 my-12 sm:grid sm:my-20">
          <div className="sm:mx-12">
            <h3 className="text-3xl font-header text-center sm:text-4xl sm:text-left">
              Candidates overview
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116310/Screenshot_2022-06-13_at_14.27.40_ihzlm6.png"
              alt="Example of page layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="mx-2 text-xl font-light mt-6 font-paragraph sm:text-2xl">
              This page shows the hiring team all the candidates that have
              applied for a position and at what stage of the interview process
              they are in.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655116310/Screenshot_2022-06-13_at_14.27.40_ihzlm6.png"
            alt="Example of page layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
        </div>

        {/* <div className="grid grid-cols-2 my-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.43.37_ne5s7v.png"
            alt="Example of page layout"
            className=" mt-4 mx-auto sm:mt-0 border border-slate-200 rounded-xl shadow-2xl"
          />
          <div className="mx-12">
            <h3 className="text-3xl">Stripe payments</h3>
            <p className="text-2xl font-light mt-6 text-red-500">
              Payments are carried out externally and securely through the use
              of the Stripe API.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
