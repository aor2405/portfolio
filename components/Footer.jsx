import React from 'react';
import Link from 'next/link';

import GitHub from './logos/GitHub';
import LinkedIn from './logos/LinkedIn';

export default function Footer() {
  return (
    <div className="flex justify-center mb-6">
      <Link href="https://github.com/aor2405">
        <a>
          <GitHub />
        </a>
      </Link>
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
