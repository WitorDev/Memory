import React from 'react'

interface CallToActionButtonProps {
    content: string;
}

function CallToActionButton({ content }: CallToActionButtonProps) {
  return (
    <button className='font-bold bg-indigo-600 text-white p-4 cursor-pointer hover:bg-indigo-700'>
      {content}
    </button>
  )
}

export default CallToActionButton
