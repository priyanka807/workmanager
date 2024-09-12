// 'use client'
// import Modal from '@/app/modal'
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useEffect, useState } from 'react'


// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Add Work', href: '/add-work'},
//   { name: 'Login' ,mode:"login"},
//   { name: 'Signup' ,mode:"signup"},
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//     const [openAuthModel,setAuthModal] = useState(false)
//     const [activeItem, setActiveItem] = useState("Home");
//     const [modalMode, setModalMode] = useState('login');

//     function handleClick(name,mode) {
//         // console.log(name,mode,'name,mode')  
//       setActiveItem(name)  
   
//       if(mode){
     
// setAuthModal(true)
// setModalMode(mode)
// console.log(openAuthModel,'openAuthModel') 
//       }
//     }
  
//     useEffect(()=>{},[activeItem,openAuthModel])
//   return (
   
// <>
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between  w-full">
//           <div className="absolute inset-y-0 right-0 flex items-center justify-center sm:hidden">
    
//             <DisclosureButton className="group relative inline-flex items-center justify-around rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
          
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:block" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="text-yellow-50 bold ">
            
//               <h2 className="brand">Work Manager</h2>
//             </div>
//           <div className="">
           


//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     onClick={()=>handleClick(item.name,item.mode)}
//                     className={`${activeItem === item.name? "bg_gray" : "text_white"}`}

//                   >
                  
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
          
        

//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>

// <Modal  openAuthModel={openAuthModel}    modalMode={modalMode}    onAuthModalClose={()=>setAuthModal(false)}/>
// </>
//   )
// }

'use client'
import Modal from '@/app/modal'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Add Work', href: '/add-task'},
  { name: 'Login' ,mode:"login"},
  { name: 'Signup' ,mode:"signup"},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [openAuthModel, setAuthModal] = useState(false)
  const [activeItem, setActiveItem] = useState("Home");
  const [modalMode, setModalMode] = useState('login');

  function handleClick(name, mode) {
    setActiveItem(name);
    if (mode) {
      setAuthModal(true);
      setModalMode(mode);
      console.log('Modal Opened:', openAuthModel); 
    }
  }

  useEffect(() => {
    console.log('Active Item or Modal State Changed:', activeItem, openAuthModel);  
  }, [activeItem, openAuthModel]);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div className="text-yellow-50 bold">
              <h2 className="brand">Work Manager</h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => handleClick(item.name, item.mode)}
                    className={`${activeItem === item.name ? "bg-gray-700 text-white" : "text-gray-300"}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                onClick={() => handleClick(item.name, item.mode)}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Modal openAuthModel={openAuthModel} modalMode={modalMode} onAuthModalClose={() => setAuthModal(false)} />
    </>
  )
}
