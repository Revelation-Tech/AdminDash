import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
    return (<>
        <section className="mt-8">

            <div className="md:grid grid-cols-6 mt-8">
                <div className="col-span-2" >
                    <div className="bg-white  text-sm text-black">
                        <NavLink to={''}
                            style={({ isActive }) => {
                                return {

                                    backgroundColor: isActive ? '#F9F9F9' : 'white',
                                    borderRight: isActive ? ' #1F6CAB solid 2px' : 'none'

                                };
                            }}

                            className='w-full  block p-4 ' end>Profile Info</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {

                                backgroundColor: isActive ? '#F9F9F9' : 'white',
                                borderRight: isActive ? ' #1F6CAB solid 2px' : 'none'

                            };
                        }} to={'password'} className={'w-full block p-4 '}>Update Password</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {

                                backgroundColor: isActive ? '#F9F9F9' : 'white',
                                borderRight: isActive ? ' #1F6CAB solid 2px' : 'none'

                            };
                        }} className={'w-full block p-4 '} to={'security'}>Security</NavLink>

                    </div>

                </div>
                <div className="col-span-4 my-0  mx-4">
                    <Outlet />
                </div>
            </div>

        </section>
    </>);
}

export default Home; <>

</>