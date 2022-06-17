const posts = [
  {
    title: 'MyQu',
    href: '#',
    description:
      'MyQu enables data driven decision making that de-risks hiring and aligns candidate and employee motivations and drivers with organisational values and culture.',
    techStack: [
      'TypeScript, ',
      'React, ',
      'NextJs, ',
      'PostgreSQL, ',
      'Stripe and ',
      'Jest',
    ],
    imageUrl:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1655233628/Screenshot_2022-06-14_at_23.06.58_kmq5jw.png',
  },
  {
    title: 'Rye River Electronics',
    href: '#',
    description:
      'A modern full stack E-commerce application that also included a payments functionality. The application had to have a clean, simple and modern design. It also comes with the ability to easily add, edit or delete products through the Sanity Studio CMS.',
    techStack: ['JavaScript, ', 'React, ', 'NextJs, ', 'Sanity and ', 'Stripe'],
    imageUrl:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1654677904/Screenshot_2022-06-08_at_12.40.38_xljaqd.png',
  },
  {
    title: "O'Reilly Recipes",
    href: '#',
    description:
      'A full stack application that had full CRUD functionality. A user can add, edit, delete and view recipes.',
    techStack: [
      'TypeScript, ',
      'React, ',
      'NextJs, ',
      'Redux, ',
      'TailwindCSS, ',
      'NodeJS ',
      'Express and ',
      'MongoDB',
    ],
    imageUrl:
      'https://res.cloudinary.com/dd2duttda/image/upload/v1655107144/Screenshot_2022-06-13_at_11.24.51_wlychu.png',
  },
];

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-sky-700 ">
                      {post.title}
                    </p>
                    <p className="text-2xl mt-2">{post.techStack}</p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
