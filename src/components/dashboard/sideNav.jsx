import { HambergerMenu, LoginCurve, Notification, ProfileCircle } from "iconsax-react";
import Logo from "../../assets/logo";
import { sideNavData } from "../../data/sideNavData";
import { Link, NavLink } from "react-router-dom";
import Logo2 from "../../assets/Logo2";
import {  useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideNav = () => {
    const [mobileNav, setMobileNav] = useState(true);
    const [isActive,setIsActive] = useState('Overview')
    const sidebarAnim = useRef(null)

    useGSAP(()=>{
        sidebarAnim.current=gsap.to('.mobile-nav',{
            x:240,
            boxShadow:'0px 1px 5px 2px black',
            paused:true,
            duration:0.5,
            ease:"power2.inOut"
        })
    }
        )

    const handleMobileNav = ()=>{
        setMobileNav(!mobileNav)
      if (mobileNav) {
        sidebarAnim.current.reverse()
      }
      else{
        sidebarAnim.current.play()
      }
        
    }
    
   
    return (
        <>
            {/* Mobile and Tablet view */}
            
            <div className="lg:hidden bg-bills-darkblue  p-4 h-screen overflow-auto z-10 w-[240px] fixed -ml-[240px]  mobile-nav" >
                <div className="mb-8">
                      <Logo/>
                </div>
              


                {/* Mobile Nav items */}
                {sideNavData.map((link) => {
                    return (
                        <NavLink style={({ isActive}) => {
                            return {
                              backgroundColor: isActive ? "white" : "transparent",
                              color:isActive?'#1F6CAB':'white'
                              
                            };
                          }} className=" hover:bg-white w-full rounded p-2 text-white hover:text-bills-darkblue mt-4 text-sm flex " to={link.link} key={link.name}>
                             {link.icon}  &nbsp; {link.name}</NavLink>
                            
                        
                    )
                })}

<div className=" w-full mt-4 border-t-2 border-white/50 ">
                    <div className="flex items-center justify-between text-white py-4">
                        <div className=" inline-flex " >
                            <Link className="mr-2"><ProfileCircle /></Link>

                            <div className="flex flex-col text-sm">
                                <p>John Doe</p>
                                <p>johndoe@gmail.com</p>
                            </div>
                        </div>
                        <div className=""><LoginCurve size={20} color="white" /></div>
                    </div>
                </div>

            </div>
            



            <div className="lg:hidden flex justify-between items-center p-4 bg-white">
                <div> <Logo2 height='33' width='100'/></div>


                <div className="flex items-center" >
                    <Notification size={20} color="#1F6CAB" className="mr-2" variant="Bold"/>
                    <ProfileCircle color="#1F6CAB" size={20} className="mr-2"/>
                    <HambergerMenu onClick={handleMobileNav} color="#1F6CAB" />
                </div>

            </div>








            {/* Laptop Side Nav */}
            <div className="hidden lg:block bg-bills-darkblue py-2 px-4 overflow-auto min-h-screen z-10 w-[220px] fixed" >

                {/* Logo Container */}
                <div className="  p-2 text-white xl:h-12 mb-6 2xl:h-16 flex items-center">
                    <Logo />

                </div>

                {/* Nav Items */}


                {sideNavData.map((link) => {
                    return (
                        <div className=" hover:bg-white/20 w-full rounded  text-white hover:text-bills-darkblue">
                        <NavLink to={link.link} style={({ isActive }) => {
                            return {
                              backgroundColor: isActive ? "white" : "transparent",
                              color:isActive?'#1F6CAB':'white'
                              
                            };
                          }}  className=" hover:bg-white w-full rounded p-3 text-white hover:text-bills-darkblue mt-2 text-sm flex " key={link.name}>
                          
                              {link.icon}  &nbsp; {link.name} </NavLink>
                        </div>
                    )
                })}

                {/* Footer */}
                <div className="absolute bottom-2 w-full left-0 border-t-2 border-white/50">
                    <div className="flex items-center justify-between text-white p-4">
                        <div className=" inline-flex " >
                            <Link className="mr-2"><ProfileCircle /></Link>

                            <div className="flex flex-col text-sm">
                                <p>John Doe</p>
                                <p>johndoe@gmail.com</p>
                            </div>
                        </div>
                        <div className=""><LoginCurve size={20} color="white" /></div>
                    </div>
                </div>
               
            </div> 
            <div className="hidden lg:block lg:w-[calc(100%-220px)] lg:ml-[220px]">
            <div className="bg-white p-4 flex items-center flex-row-reverse ">
            <ProfileCircle size={20}  />
            <Notification  size={20} color="#A09D9D" variant="Bold" className="mx-3" />
            
            </div>
        </div>
           
        </>

    );
}

export default SideNav;