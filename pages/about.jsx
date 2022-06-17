import React from 'react';

export default function about() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 my-12">
          <img
            src="https://res.cloudinary.com/dd2duttda/image/upload/v1655470122/FB_IMG_1615477391340_e2wmdw.jpg"
            alt="Image of the author"
            className="mt-4 mx-auto border border-slate-200 rounded-xl sm:mt-0"
          />
          <div className="ml-4">
            <h3 className="text-3xl font-header col-span-4 sm:text-4xl sm:text-left">
              About me
            </h3>
            <p className="pt-6 text-xl font-light font-paragraph col-span-8 mx-2 sm:mt-0 sm:text-2xl">
              I graduated from college in 2014 with a degree in electronic
              engineering. Although I started my career in engineering, I also
              had an interest in web and software development. With this
              interest, I continued to study web dev in my spare time and
              continued to grow my skills over the years. I made the transition
              from working as a senior technical support engineer to a software
              developer in May 2021.
            </p>
            <p className="pt-6 text-xl font-light font-paragraph col-span-8 mx-2 sm:mt-0 sm:text-2xl">
              Outside of software development, my biggest passion in life in
              Basketball. I have played semi – professionally basketball for the
              past 5 years and been awarded the role of team captain for 3 of
              those years. I helped lead my team to the highest league in
              Ireland, where we competed in the past season.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
