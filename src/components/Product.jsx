import React from 'react'
import whatsapp from "../assets/whatsapp_icon.png"
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import DetailPage from '../pages/DetailPage'

const Product = ({cat}) => {
  console.log(cat, "cat")
  // const navigate = useNavigate()
  return (
   <>  
  
         <div className="rounded-lg  border bg-white p-6  dark:border-gray-700 dark:bg-gray-800 shadow-2xl
         ">
         <Link to={`/detail-page/${cat.id}`}>   
             <div className="h-56 w-full"
        
        >
          <a href="#">
            <img className="mx-auto h-full dark:hidden" src={cat.image} alt="" />
            {/* <img className="mx-auto hidden h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" /> */}
          </a>
        </div>
        <div className="pt-6">
      

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{cat.name}</a>

          <div className="mt-2 flex items-center gap-2">
          <p className="text-sm font-medium text-gray-900 dark:text-white  ">Inches:</p>

          {cat.sizes.map((size)=>(<>
         
            <p className="text-sm font-medium text-gray-900 dark:text-white p-1 border-2 ">{size}</p>
          </>))  }
     
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
  <p className="text-xl font-extrabold leading-tight text-gray-900 dark:text-white">
    Order Now
  </p>

  <a
    href="https://wa.me/7720990081?text=Hello, How can I help you?"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 px-2  text-sm font-medium text-white bg-black rounded-lg shadow-md hover:text-black hover:bg-white focus:outline-none "
  >
    <img
      className="w-10 h-10"
      src={whatsapp}
      alt="WhatsApp"
    />
    <span className=''>Contact</span>
  </a>
</div>

        </div>
        </Link>
      </div>
    

      
   </>
  )
}

export default Product