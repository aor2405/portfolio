import React from 'react';

export default function Pill({ skills }) {
  const colors = [
    'border rounded-xl bg-yellow-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-red-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-blue-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-green-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-purple-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-pink-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-rose-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-violet-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-sky-200 text-gray-500 w-28 mr-2',
    'border rounded-xl bg-cyan-200 text-gray-500 w-28 mr-2',
  ];

  return (
    <>
      {skills.map((skill, idx) => (
        <div key={idx} className={colors[idx]}>
          <p className="px-2 py-2 text-center">{skill}</p>
        </div>
      ))}
    </>
  );
}
