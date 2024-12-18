import React from 'react'

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
                <div className="lg:hidden bg-bills-darkblue  p-4 h-screen overflow-auto z-10 w-[240px] fixed -ml-[240px]  mobile-nav" >
                <div className="mb-8">
                      <Logo/>
                </div>
              


                {/* Mobile Nav items */}
                {sideNavData.map((link) => {
                    return (
                        <NavLink  style={({ isActive}) => {
                            return {
                              backgroundColor: isActive ? "white" : "transparent",
                              color:isActive?'#1F6CAB':'white'
                              
                            };
                          }} className=" hover:bg-white w-full rounded p-2 text-white hover:text-bills-darkblue mt-4 text-sm flex "  to={link.link} key={link.name}>
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



    {/* Laptop Nav */}
     <div className="hidden lg:block bg-bills-darkblue  p-4 h-screen overflow-auto z-10 w-[220px] fixed " >
                <div className="mb-8">
                      <Logo/>
                </div>
              


                {/* Mobile Nav items */}
                {sideNavData.map((link) => {
                    return (
                        <NavLink  style={({ isActive}) => {
                            return {
                              backgroundColor: isActive ? "white" : "transparent",
                              color:isActive?'#1F6CAB':'white'
                              
                            };
                          }} className=" hover:bg-white w-full rounded p-2 text-white hover:text-bills-darkblue mt-4 text-sm flex "  to={link.link} key={link.name}>
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
            



            <div className="hidden lg:flex justify-between items-center p-4 bg-white">
                <div> <Logo2 height='33' width='100'/></div>


                <div className="flex items-center" >
                    <Notification size={20} color="#1F6CAB" className="mr-2" variant="Bold"/>
                    <ProfileCircle color="#1F6CAB" size={20} className="mr-2"/>
                   
                </div>

            </div>





    </>
  )
}

export default SideNav;