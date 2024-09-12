



'use client';
import LoginModal from '@/app/login';
import SignupModal from '@/app/signup';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext, useState, useEffect } from 'react';
import { usePathname ,useRouter} from 'next/navigation';
import UserContext from '@/app/context/userContext';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { logout } from '@/app/services/loginService';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const { currentUser, setCurrentUser, signupModal, setSignupModal, loginModal, setloginModal } = useContext(UserContext);
  const authToken = Cookies.get('authToken');
  const pathname = usePathname();
  const router = useRouter();
  // console.warn(pathname,'..................router.pathname')
  // Automatically set the active item based on the current pathname
  useEffect(() => {

    if (pathname === "/") {
      setActiveItem("Home");
    }
    if (pathname === "/add-task") {
      setActiveItem("Add Task");
    }
    if (pathname === "/show-task") {

      setActiveItem("Show Task");
    }

  }, [pathname]);

  // Handle navigation with login check
  const handleNavItems = ( event,navItems) => {
    event.preventDefault();
    setActiveItem(navItems);
    if(navItems==="Home"){
      router.push("/")
    }else if(navItems==="Signup"){
   
        setSignupModal(true)
    
    }else if(navItems==="Login"){
   
        setloginModal(true)
    
    }
      else{
      // router.push(`/${navItems.toLowerCase().replace(" ","-")}`)
      if (!authToken) {
        toast.error(`Please login to access ${navItems} page`);
        // setloginModal(true);
        // router.push(`/${navItems.toLowerCase().replace(" ","-")}`) 
        // Open login modal
      } else {
        // User is logged in, proceed with navigation
        // setActiveItem(itemName);
        router.push(`/${navItems.toLowerCase().replace(" ","-")}`)
      } 
     

   
    }

 
    // if (!authToken) {
    //   toast.error(`Please login to access ${itemName}`);
    //   setloginModal(true); // Open login modal
    // } else {
    //   // User is logged in, proceed with navigation
    //   setActiveItem(itemName);
    //   router.push(path);
    // }
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      setCurrentUser(undefined);
      router.push('/');
    } catch (error) {
      toast.error("Logout Error!!");
    }
  };
function handleShowTask(){
  
}
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
              <h2 className="brand  "     >Work Manager</h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              <a
              onClick={(e) =>handleNavItems(e,'Home')}
                  className={`text-gray-300 p-3 ${activeItem === 'Home' ? 'bg-gray-700 text-white' : ''}`}
                >
                  Home
                </a>
                <a
                 onClick={(e) =>handleNavItems(e,'Add Task')}
                  className={`text-gray-300 p-3 ${activeItem === 'Add Task' ? 'bg-gray-700 text-white' : ''}`}
                >
                  Add Task
                </a>
                <a
                  onClick={(e) =>{handleNavItems(e,'Show Task'),handleShowTask()}}
                  className={`text-gray-300 p-3  ${activeItem === 'Show Task' ? 'bg-gray-700 text-white' : ''}`}
                >
                  Show Task
                </a>
                {/* {currentUser?(<>
            
                </>):null} */}
               

                {currentUser ? (
                  <>
                    <a className="text-gray-300 p-3">
                      {currentUser?.message?.email}
                    </a>
                    <a onClick={handleLogout} className="text-gray-300 p-3">
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    
                    <a  onClick={(e) =>{handleNavItems(e,'Signup')}}   className={`text-gray-300 p-3 ${activeItem === 'Signup' ? 'bg-gray-700 text-white' : ''}`}>
                      Signup
                    </a>
                    <a onClick={(e) =>{handleNavItems(e,'Login')}}   className={`text-gray-300 p-3 ${activeItem === 'Login' ? 'bg-gray-700 text-white' : ''}`}>
                      Login
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <DisclosureButton
              as="a"
              href="/"
              onClick={(e) => { handleProtectedNav('Home', '/', e); }}
              className={`bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeItem === 'Home' ? 'bg-gray-700 text-white' : ''}`}
            >
              Home
            </DisclosureButton>

            <DisclosureButton
              as="a"
              onClick={(e) => { handleProtectedNav('Add Task', '/add-task', e); }}
              className={`bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeItem === 'Add Task' ? 'bg-gray-700 text-white' : ''}`}
            >
              Add Task
            </DisclosureButton>

            <DisclosureButton
              as="a"
              onClick={(e) => { handleProtectedNav('Show Task', '/show-task', e); }}
              className={`bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeItem === 'Show Task' ? 'bg-gray-700 text-white' : ''}`}
            >
              Show Task
            </DisclosureButton>

            {currentUser ? (
              <>
                <DisclosureButton
                  as="a"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  {currentUser?.message?.email}
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  onClick={handleLogout}
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Logout
                </DisclosureButton>
              </>
            ) : (
              <>
                <DisclosureButton
                  as="a"
                  onClick={() => setSignupModal(true)}
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Signup
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  onClick={() => setloginModal(true)}
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Login
                </DisclosureButton>
              </>
            )}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <SignupModal signupModal={signupModal} setSignupModal={setSignupModal} setloginModal={setloginModal} />
      <LoginModal loginModal={loginModal} setloginModal={setloginModal} setSignupModal={setSignupModal} />
    </>
  );
}

