import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
   <>
     <div>Products</div>
     <p> <Link to ="/" className='underline'>go to dashboard</Link></p>
   </>
  )
}

export default Products