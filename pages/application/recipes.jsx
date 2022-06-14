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
        <h1 className="mt-12 text-4xl text-burntOrange font-bold ">
          O'Reilly Recipes
        </h1>
        <h3 className="mt-6 text-2xl">
          Full Stack application with CRUD functionality
        </h3>

        <div className="flex justify-center mt-6">
          <Link href="https://oreilly-recipes.vercel.app/">
            <a className="underline text-burntOrange text-xl">
              <p>Link to website</p>
            </a>
          </Link>
          <Link href="https://github.com/aor2405/Recipe-Nextjs-V2">
            <a className="ml-4 underline text-burntOrange  text-xl">
              <p>Link to GitHub repository</p>
            </a>
          </Link>
        </div>

        <div className="mx-auto mt-6">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107144/Screenshot_2022-06-13_at_11.24.51_wlychu.png"
            alt="Homepgae for O'Reilly Recipes"
            className=" mt-4 mx-auto sm:mt-0 border border-slate-200 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-2 mt-20">
          <h3 className="text-3xl">Project Overview</h3>
          <p className="text-2xl font-light">
            The objective of this project was to build a full stack application
            that had full CRUD functionality. I also used this opportunity to
            further push my skills in React and NextJs. Upon starting this
            project, I decided to use React-Redux for my state managment as this
            was a JavaScript tool I had not yet used at this point in my career.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-20">
          <h3 className="text-3xl">Technologies used</h3>
          <div className="flex flex-wrap gap-y-2 ">
            <Pill skills={skills} />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-20">
          <h3 className="text-3xl">Challenges Faced</h3>
          <div>
            <p className="text-2xl font-light">
              This was the second version of the O'Reilly Recipes app that I had
              built. The first version was a basic application built upon
              vanilla JavaScript using the MVC framework and EJS templates.
            </p>
            <p className="mt-6 text-2xl font-light">
              I decided to use React-Redux as my state management due to never
              having used this tool before. I found it extremily powerful when
              needing to store a users session. This was important as I needed
              to hold the users login when the page was refreshed to make sure
              the user was still logged in.
            </p>
            <p className="mt-6 text-2xl font-light text-red-500">
              Another challange I faced was trying to handle image uploading for
              a new or edited recipe. This was carried out by using an NPM
              package called 'Multer' and storing the image files on
              Cloudinary.com. Multer is a NodeJs middleware for handling
              'multipart/form-data'.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655105200/Screenshot_2022-06-13_at_11.25.12_jhcc8o.png"
            alt="Homepage layout"
            className=" mt-4 mx-auto sm:mt-0 border border-slate-200 rounded-xl shadow-2xl"
          />
          <div className="mx-12">
            <h3 className="text-3xl ">Main Screen Layout</h3>
            <p className="text-2xl font-light mt-6 text-red-500">
              Recipes are displayed from the main screen for any user of the
              application to view. The recipes are retrived using Axios to call
              my custom API that retrives the data from the MongoDB database.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-20">
          <div className="mx-12">
            <h3 className="text-3xl ">User registration</h3>
            <p className="text-2xl font-light mt-6 text-red-500">
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
            className=" mt-4 mx-auto sm:mt-0 border border-slate-200 rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-2 mt-20">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107504/Screenshot_2022-06-13_at_12.04.15_dvesac.png"
            alt="Recipe creation page"
            className=" mt-4 mx-auto sm:mt-0 border border-slate-200 rounded-xl shadow-2xl"
          />
          <div className=" mx-12">
            <h3 className="text-3xl ">Recipe Creation</h3>
            <p className="text-2xl font-light mt-6 text-red-500">
              Once a user has created an account, they have the ability to then
              create a Recipe. This recipe is then stored on the MongoDB
              database.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 my-20">
          <div className="mr-12">
            <h3 className="text-3xl">Recipe Example</h3>
            <p className="text-2xl font-light mt-6 text-red-500">
              Any person viewing the application has the ability to click into a
              recipe to view its details. If a user has logged into the
              application, they then have the ability to edit or even delete any
              recipe that they themselves have created.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655107504/Screenshot_2022-06-13_at_12.03.59_sllhmr.png"
            alt="Example of recipe"
            className=" mt-4 mx-auto sm:mt-0 border border-slate-200 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
