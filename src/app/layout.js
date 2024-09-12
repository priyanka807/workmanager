import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/navbar1";
import UserProvider from "./context/userProvider";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title:"Add Task : Work Manager"
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <ToastContainer/>
      <Navbar/>
        {children}
        <Footer/>
        </UserProvider>
        </body>
    </html>
  );
}
