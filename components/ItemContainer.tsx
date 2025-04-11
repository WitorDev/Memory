import React from 'react'

interface ItemContainerProps {
    children: React.ReactNode;
    isHorizontal?: boolean;
}

function ItemContainer({ children, isHorizontal = false }: ItemContainerProps) {
  // This is a container object, define x to true to make it horizontal
  return (
    <div className={`flex gap-4 ${isHorizontal ? 'flex-row' : 'flex-col'} items-center justify-center`}>
      {children}
    </div>
  )
}

export default ItemContainer
