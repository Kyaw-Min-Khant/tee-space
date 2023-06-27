import React, { useEffect, useState } from 'react'
import {IoIosArrowUp} from "react-icons/io"

const BackToTopButton = () => {
    const [backToTop,setBackToTop] = useState(false)
    useEffect(() => {
       window.addEventListener("scroll", () => {
        if(window.scrollY > 500){
            setBackToTop(true)
        }else{
            setBackToTop(false)
        }
       }) 
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    } 
  return (
    <div className=' fixed bottom-[50px] right-[50px] duration-500'>
      {backToTop && (
        <button onClick={scrollUp} className='p-3 bg-[#a8a8a89d] text-white text-2xl'><IoIosArrowUp/></button>
      )}
    </div>
  )
}

export default BackToTopButton
