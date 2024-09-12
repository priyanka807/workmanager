import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-4 px-3 md:px-10">

    <div className="flex flex-wrap items-center">
  
      <div className="w-full sm:w-1/2 mb-3 sm:mb-0  ">
        <p>All Rights Reserved 2024.</p>
        <p>Built by <span className='text-red-500'>Priyanka Coder</span></p>
      </div>


      <div className="w-full sm:w-1/2 ">
        <ul className="flex  sm:justify-end gap-3 sm:gap-4 mb-0">
          <li>

            <a href="mailto:pk796395@gmail.com" className="text-white hover:underline">Mail</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/priyanka-kumari-b9308524b/" className="text-white hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/priyanka807" className="text-white hover:underline">GitHub</a>
          </li>
        </ul>
      </div>
    </div>

</footer>


  )
}

export default Footer