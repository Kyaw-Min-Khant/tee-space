import React from 'react'
import BlogTopSection from './BlogTopSection'
import BlogSideSection from './BlogSideSection'
import BlogMainSection from './BlogMainSection'

const Blog = () => {
  return (
    <div className=''>
        <BlogTopSection />
        <div className=" flex flex-col-reverse md:flex-row  gap-10 p-5 ">
            <BlogSideSection/>
            <BlogMainSection/>
        </div>
    </div>
  )
}

export default Blog