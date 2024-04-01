import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[900px] mx-auto min-h-screen flex flex-col'>
        {children}
    </div>
  )
}

export default Container