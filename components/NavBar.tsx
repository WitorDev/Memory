import React from 'react';
import LinkBlock from '@/components/LinkBlock';
import Image from 'next/image';
import CallToActionButton from '@/components/CallToActionButton';
import ItemContainer from '@/components/ItemContainer';

function NavBar() {
  return (
    <nav className="flex gap-4 border-b-4 border-b-indigo-700 justify-between p-2 max-w-screen-lg mx-auto">
      {/* Navigation Items */}
      <Image
        src={"/logo-pixel.png"}
        alt='Next.js Logo'
        width={50}
        height={50}
      />
      <ItemContainer isHorizontal={true}>
        <LinkBlock content='Home' href="/" />
        <LinkBlock content='About' href="/banana" />
        <CallToActionButton content="Download" />
      </ItemContainer>
    </nav>
  )
}



export default NavBar
