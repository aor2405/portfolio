import React from 'react';
import Link from 'next/link';

import GitHub from './logos/GitHub';
import LinkedIn from './logos/LinkedIn';
import Dev from './logos/Dev';

export default function Footer() {
  return (
    <div className="flex justify-center my-8">
      <Link href="https://github.com/aor2405">
        <a>
          <GitHub />
        </a>
      </Link>
      <div className="ml-4">
        <Link href="https://dev.to/aor2405">
          <a>
            <Dev />
          </a>
        </Link>
      </div>
      <div className="ml-4">
        <Link href="https://linkedin.com/in/adam-o-reilly-js">
          <a>
            <LinkedIn />
          </a>
        </Link>
      </div>
    </div>
  );
}
