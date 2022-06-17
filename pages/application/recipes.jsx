import React from 'react';
import Link from 'next/link';
import Pill from '../../components/Pill';

export default function OreillyRecipes() {
  const skills = [
    'React',
    'Redux',
    'NextJs',
    'TailwindCSS',
    'NodeJs',
    'Express',
    'MongoDB',
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-2 text-2xl text-burntOrange font-bold sm:text-4xl">
          O'Reilly Recipes
        </h1>
        <h3 className="mt-2 text-xl font-paragraph sm:text-2xl">
          Full Stack application with CRUD functionality
        </h3>

        <div className="mt-6 sm:flex sm:justify-center">
          <Link href="https://oreilly-recipes.vercel.app/">
            <a className="underline text-burntOrange font-paragraph text-lg sm:text-xl">
              <p>Link to website</p>
            </a>
          </Link>
          <Link href="https://github.com/aor2405/Recipe-Nextjs-V2">
            <a className="underline text-burntOrange font-paragraph text-lg sm:text-xl sm:ml-4">
              <p>Link to GitHub repository</p>
            </a>
          </Link>
        </div>

        <div className="mx-auto mt-6">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107144/Screenshot_2022-06-13_at_11.24.51_wlychu.png"
            alt="Homepgae for O'Reilly Recipes"
            className="mt-4 mx-auto border border-slate-200 rounded-xl sm:mt-0"
          />
        </div>

        <div className="grid-cols-12 mt-12 sm:grid sm:mt-20">
          <h3 className="text-3xl font-header text-center col-span-4 sm:text-4xl sm:text-left">
            Project Overview
          </h3>
          <p className="text-xl font-light  font-paragraph col-span-8 mx-2 mt-4 sm:mt-0 sm:text-2xl">
            The objective of this project was to build a full stack application
            that had full CRUD functionality. I also used this opportunity to
            further push my skills in React and NextJs. Upon starting this
            project, I decided to use React-Redux for my state managment as this
            was a JavaScript tool I had not yet used at this point in my career.
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
            <p className="text-xl font-light font-paragraph mt-4 sm:mt-0 sm:text-2xl">
              This was the second version of the O'Reilly Recipes app that I had
              built. The first version was a basic application built upon
              vanilla JavaScript using the MVC framework and EJS templates.
            </p>
            <p className="mt-6 text-xl font-light font-paragraph sm:text-2xl">
              I decided to use React-Redux as my state management due to never
              having used this tool before. I found it extremily powerful when
              needing to store a users session. This was important as I needed
              to hold the users login when the page was refreshed to make sure
              the user was still logged in.
            </p>
            <p className="mt-6 text-xl font-light font-paragraph sm:text-2xl">
              Another challange I faced was trying to handle image uploading for
              a new or edited recipe. This was carried out by using an NPM
              package called 'Multer' and storing the image files on
              Cloudinary.com. Multer is a NodeJs middleware for handling
              'multipart/form-data'.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655105200/Screenshot_2022-06-13_at_11.25.12_jhcc8o.png"
            alt="Homepage layout"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
          <div className="sm:mx-12">
            <h3 className="text-3xl font-header text-center mt-4 sm:mt-0 sm:text-4xl sm:text-left">
              Main Screen Layout
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655105200/Screenshot_2022-06-13_at_11.25.12_jhcc8o.png"
              alt="Homepage layout"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="text-xl font-light font-paragraph mt-4 sm:mt-6 sm:text-2xl">
              Recipes are displayed from the main screen for any user of the
              application to view. The recipes are retrived using Axios to call
              my custom API that retrives the data from the MongoDB database.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 mt-6 sm:grid sm:mt-20">
          <div className="sm:mr-12">
            <h3 className="text-3xl font-header text-center mt-4 sm:mt-0 sm:text-4xl sm:text-left">
              User registration
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655108394/Screenshot_2022-06-13_at_12.19.39_ihayqf.png"
              alt="User registration page"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x block sm:hidden sm:mt-0"
            />
            <p className="text-xl font-light mt-6 font-paragraph sm:text-2xl">
              A user has the ability to create an account using an email and
              password of their choice. The email has to be unquie and this
              information in stored in our database. After the user creates a
              password, this password is then hashed using the 'bcrypt' package
              that securely stores them as hashed passwords instead of
              plaintext.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655108394/Screenshot_2022-06-13_at_12.19.39_ihayqf.png"
            alt="User registration page"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2x hidden sm:block sm:mt-0"
          />
        </div>

        <div className="grid-cols-2 mt-12 sm:grid sm:mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107504/Screenshot_2022-06-13_at_12.04.15_dvesac.png"
            alt="Recipe creation page"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:block sm:mt-0"
          />
          <div className="sm:mx-12">
            <h3 className="text-3xl font-header text-center sm:text-4xl sm:text-left">
              Recipe Creation
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107504/Screenshot_2022-06-13_at_12.04.15_dvesac.png"
              alt="Recipe creation page"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:hidden sm:mt-0"
            />
            <p className="text-xl font-light mt-6 font-paragraph sm:text-2xl">
              Once a user has created an account, they have the ability to then
              create a Recipe. This recipe is then stored on the MongoDB
              database.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 my-12 sm:grid sm:my-20">
          <div className="sm:mr-12">
            <h3 className="text-3xl font-header text-center sm:text-4xl sm:text-left">
              Recipe Example
            </h3>
            <img
              src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107504/Screenshot_2022-06-13_at_12.03.59_sllhmr.png"
              alt="Example of recipe"
              className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl block sm:mt-0 sm:hidden"
            />
            <p className="text-xl font-light mt-6 font-paragraph sm:text-2xl">
              Any person viewing the application has the ability to click into a
              recipe to view its details. If a user has logged into the
              application, they then have the ability to edit or even delete any
              recipe that they themselves have created.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107504/Screenshot_2022-06-13_at_12.03.59_sllhmr.png"
            alt="Example of recipe"
            className="mt-4 mx-auto border border-slate-200 rounded-xl shadow-2xl hidden sm:mt-0 sm:block"
          />
        </div>
      </div>
    </>
  );
}
