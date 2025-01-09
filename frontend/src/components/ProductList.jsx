import React from 'react'
import Product from './Product'
import {categories} from "../data/categories"

const ProductList = () => {
  return (
    <>
    <section className=" py-8 antialiased  md:py-12 flex justify-center">
  <div className="w-[96%] px-8 2xl:px-0 py-10 border  ">

    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>

        <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Categories</h2>
      </div>
      <div className="flex items-center space-x-4">

      </div>
    </div>
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">

{categories.map((cat, index)=>(

<Product key={index} cat={cat} />
))}

      
    </div>

  </div>

</section>
    </>
  )
}

export default ProductList