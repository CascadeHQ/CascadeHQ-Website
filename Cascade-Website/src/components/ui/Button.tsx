import React from 'react'

type Props ={
    content:string,
}

const Button = ({content}:Props) => {
  return (
    <>
    <button type="button" className={`bg-brandBlue1x text-brandWhite1x text-xs rounded-full shadow-xl py-3 px-5 md:text-md lg:text-base`}>{content}</button>
    </>
  )
}

export default Button