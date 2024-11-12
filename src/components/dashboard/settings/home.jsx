import { NavLink } from "react-router-dom";

const Home = () => {
    return ( <>
    <section className="mt-8">
           
    <div className="md:grid grid-cols-6 items-center mt-8">
                        <div className="col-span-2" >
                            <div className="bg-white  text-sm text-black">
                                <NavLink

                                    className='w-full bg-bills-lightgrey2 block p-4 border-r-2 border-bills-darkblue'>Profile Info</NavLink>
                                <NavLink className={'w-full block p-4 '}>Update Password</NavLink>
                                <NavLink className={'w-full block p-4 '}>Security</NavLink>

                            </div>

                        </div>
                        <div className="col-span-4">

                        </div>
                    </div> 
               
           </section>
    </> );
}
 
export default Home;<>

</>