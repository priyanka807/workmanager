"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ContactModal from './modal'

const Header = () => {
  const [openContactModal, setOpenContactModal] = useState(false);
  useEffect(()=>{
    console.log(openContactModal,'openContactModal')
  },[openContactModal])


  return (
    <>
      <div className="header_container d-none d-md-block bg-slate-950">
        <div className="container-fluid header_content">
          <div className="logo">

            <a href="index.html" className="navbar-brand" target="_top">
              <Image src="/images/logo.jpg" alt="Mohindra logo" height={100} width={150} />
            </a>
          </div>

          <div className="slitting_machine_header">
            <ul className="flex justify-center align-middle">
              <a href="">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <Image src="/images/slitting.png" alt="Cantilever Machine" height={70} width={70} objectFit="contain" />
                </div>
                <h6>Cantilever Slitting Machine</h6>
              </a>
              <a href="">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <Image src="/images/slitting4.png" alt="Cantilever Machine" height={70} width={70} objectFit="contain" />
                </div>
                <h6>Drum Slitting Machine</h6>
                </a>  
              <a href="">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <Image src="/images/slitting5.png" alt="Cantilever Machine" height={70} width={70} objectFit="contain" />
                </div>
                <h6>Bopptape Slitting Machine</h6>
              </a>
              <a href="">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <Image src="/images/slitting6.png" alt="Cantilever Machine" height={70} width={70} objectFit="contain" />
                </div>
                <h6>Doctoring Slitting Machine</h6>
              </a>
              {/* Other products here... */}

              <div className="d-flex flex-column justify-content-center align-content-between header_last">
                <div id="google_translate_element"></div>

                <div onClick={() => setOpenContactModal(true)}>
                  <button className="get_quote">
                    <i className="fa-solid fa-arrow-right" style={{ marginRight: "10px" }}></i>
                    Send Enquiry
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <ContactModal isOpen={openContactModal} onClose={() => setOpenContactModal(false)} />
    </>
  );
};

export default Header;
