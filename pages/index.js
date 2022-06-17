import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Link from 'next/link';

const mockData = [
  {
    title: 'MYQU',
    description: 'De-risk your hiring with data',
    href: '/application/myqu',
    image:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1655116311/Screenshot_2022-06-13_at_14.31.34_aykl6f.png',
    style:
      'max-w-7xl border rounded-2xl py-2 bg-gradient-to-r from-cyan-50 to-teal-100 mt-12 sm:grid sm:grid-cols-2 sm:my-12',
  },
  {
    title: 'Rye River Electronics',
    description: 'Full stack E-commerce application with Stripe integration',
    href: '/application/rye-river-electronics',
    image:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.40.38_xljaqd.png',
    style:
      'max-w-7xl border rounded-2xl py-2 bg-gradient-to-r from-amber-50 to-yellow-100 mt-12 sm:grid sm:grid-cols-2 sm:my-12',
  },
  {
    title: "O'Reilly Recipes",
    description: 'Full stack application with CRUD functionality',
    href: '/application/recipes',
    image:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1655120369/Screenshot_2022-06-13_at_15.39.13_obmksl.png',
    style:
      'max-w-7xl border rounded-2xl py-2 bg-gradient-to-r from-orange-50 to-red-100 mt-12 sm:grid sm:grid-cols-2 sm:my-12',
  },
  {
    title: 'Random quote generator',
    description: 'Random generator using MongoDB',
    href: '/application/quote-generator',
    image:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1654765589/Screenshot_2022-06-09_at_13.03.19_nomhw7.png',
    style:
      'max-w-7xl border rounded-2xl py-2 bg-gradient-to-r from-violet-50 to-purple-100 mt-12 sm:grid sm:grid-cols-2 sm:my-12',
  },
];

ReactGA.initialize('UA-232331283-1');

export default function homepage() {
  useEffect(() => {
    ReactGA.pageview('/');
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="font-extrabold font-header max-w-xs pt-12 text-5xl sm:max-w-2xl sm:text-7xl">
          My name is
          <span className="text-yellow-500"> Adam</span> and I am a software
          developer.
        </div>
        <h2 className="mt-12 font-paragraph text-2xl sm:text-4xl">
          Newest Projects
        </h2>
        {mockData.map((item, idx) => (
          <div key={idx} className={item.style}>
            <div className="mt-2 ml-2 sm:my-12 sm:ml-8">
              <h2 className="text-4xl text-center font-header sm:text-left">
                {item.title}
              </h2>
              <p className="text-xl text-center italic font-paragraph mx-2 mt-2 sm:text-left sm:mx-0 sm:mt-3">
                {item.description}
              </p>
              <Link href={item.href}>
                <a>
                  <button className="border rounded-xl mt-12 py-3 px-5 bg-yellow-500 hidden sm:block">
                    <p className="mx-auto text-gray-50">Read More</p>
                  </button>
                </a>
              </Link>
            </div>
            <div className="mx-auto sm:my-12 sm:max-w-sm">
              <img
                src={item.image}
                alt=""
                className="max-h-56 mt-4 mx-auto sm:mt-0"
              />
            </div>
            <Link href={item.href}>
              <a className="flex justify-center">
                <button className="border rounded-xl mt-6 py-3 px-5 bg-yellow-500 block sm:hidden">
                  <p className="mx-auto text-gray-50">Read More</p>
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
