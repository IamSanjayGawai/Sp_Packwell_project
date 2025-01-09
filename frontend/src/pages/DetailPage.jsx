import React from 'react'
import {useParams} from "react-router-dom"
import {categories} from "../data/categories"
import whatsapp from "../assets/whatsapp_icon.png"

const DetailPage = () => {
    const {id} = useParams();
const productDetails = categories.find((cat)=> cat.id === parseInt(id))
console.log("productDetails", productDetails)

  return (
   <>
  <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased ">
    
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto p-4 flex flex-col gap-6 bg-gray-50 rounded-lg shadow-lg dark:bg-gray-800 shadow-2xl">
  <img
    className="w-full rounded-md "
    src={productDetails.image}
    alt="Product Image"
  />
  
  <div className="flex justify-around w-full mt-4">
    {/* Place Order Button */}
    {/* <a
      href="#"
      title="Place Order"
      className="flex items-center justify-center py-3 px-6 text-base font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg hover:from-blue-500 hover:to-green-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-300"
      role="button"
    >
      Place Order
    </a> */}

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/7720990081?text=Hello How can I help you ?"
      className="flex items-center justify-center w-full px-6 text-base font-semibold  text-white bg-black rounded-lg shadow-md hover:text-black hover:bg-white focus:outline-none"
    >
      <img className="w-15 h-14 mr-2" src={whatsapp} alt="WhatsApp" />
      Contact Us
    </a>
  </div>
</div>


        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            {productDetails.name}
          </h1>


          <div class="mt-6 gap-4  sm:flex sm:mt-8 flex-col ">
          <p >Inches:</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-2'> 
              
      {productDetails.sizes.map((size)=>(<>
        <a
              href="#"
              title=""
              class="flex items-center justify-center py-2.5 px-5 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
           
           {size}
            </a>
      </>))}
      </div>
      <p >Lengths(miter):</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'> 
      {productDetails.lengths.map((length)=>(<>
        <a
              href="#"
              title=""
              class="flex items-center justify-center font-bold py-2.5 px-5 text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
           
           {length}
            </a>
      </>))}
      </div>
          </div>

          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

          <p class="mb-6 text-gray-500 dark:text-gray-400">
            Studio quality three mic array for crystal clear calls and voice
            recordings. Six-speaker sound system for a remarkably robust and
            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
          </p>

          <p class="text-gray-500 dark:text-gray-400">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
            Magic Keyboard or Magic Keyboard with Touch ID.
          </p>

          <div className="flex justify-around w-full mt-4">
    {/* Place Order Button */}
    {/* <a
      href="#"
      title="Place Order"
      className="flex items-center justify-center py-3 px-6 text-base font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg hover:from-blue-500 hover:to-green-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-300"
      role="button"
    >
      Place Order
    </a> */}

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/7720990081?text=Hello How can I help you ?"
      className="flex items-center justify-center w-full px-6 text-base font-semibold  text-white bg-black rounded-lg shadow-md hover:text-black hover:bg-white focus:outline-none"
    >
      <img className="w-15 h-14 mr-2" src={whatsapp} alt="WhatsApp" />
      Contact Us
    </a>
  </div>
        </div>
        
      </div>
    </div>
  </section>
    
   </>
  )
}

export default DetailPage