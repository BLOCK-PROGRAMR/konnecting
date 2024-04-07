import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer=()=>{

    return(
   <div className="bg-black">
         <div className="flex justify-center flex-col md:flex-row sm:flex-row">
      <div className="  ">
            <h1 className=" text-white text-3xl font-serif text-center p-4">CONNECTING.COM</h1></div>
            <div className="ml-20">
            <ul className="flex flex-col md:flex-row sm:flex-row lg:flex-row">
                <li className="ml-3 p-4 text-white capitalize cursor-pointer hover:text-lg ">privacy&policy</li>
                <li className="ml-3 p-4 text-white capitalize cursor-pointer hover:text-lg">terms&service</li>
                <li className="ml-3 p-4 text-white capitalize cursor-pointer hover:text-lg">About team</li>
                <li className="ml-3 p-4 text-white capitalize cursor-pointer hover:text-lg">contact-us</li>
            </ul>
            </div>
            
        </div>
        <div className="flex p-4 m-4 justify-between  flex-col md:flex-row sm:flex-row ">
            <div className="text-white font-serif text-lg capitalize">
            <h3>if any queries we can contact my team:</h3>
            <ul>
            <li>contactus:8328016105,6305355185</li>
             <li className="lowercase"> gmail:connect@gmail.com </li>
        </ul></div>
        <div className="text-white ">
              <h3 className="text-center font-sans">Follow through :</h3>
               <ul className="flex mx-4 p-4">
                <li  className="ml-8"><FaInstagram className="w-8 h-8 text-blue-500  cursor-pointer hover:w-10 hover:h-10"/></li>
                <li className="ml-8"><FaFacebook className="w-8 h-8 text-blue-500 cursor-pointer hover:w-10 hover:h-10"/></li>
                <li className="ml-8"><FaLinkedin className="w-8 h-8 text-blue-500  cursor-pointer hover:w-10 hover:h-10"/></li>
                <li className="ml-8"><FaTwitter className="w-8 h-8 text-blue-500  cursor-pointer hover:w-10 hover:h-10"/></li>
               </ul>
        </div>
        </div>
        <div className="">
            <hr/>
      <h1 className="uppercase text-white text-center font-serif text-2xl shadow-lg">Employment for unemployable people!!</h1>
      
        </div>
       
      
     </div>

    )
}
export default Footer;