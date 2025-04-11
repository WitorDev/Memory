import React from 'react';
import Link from 'next/link';

interface LinkBlockProps {
    content: string;
    href: string;
}

function LinkBlock({ content, href }:LinkBlockProps) {
  return (
    <div className='text-white p-4 hover:bg-indigo-700 cursor-pointer'>
        <Link href={href}>
            <p>{content}</p>
        </Link>
    </div>
  )
}

export default LinkBlock
