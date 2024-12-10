import { Add, ArrowDown2, More, SearchNormal, SearchNormal1 } from "iconsax-react";

import Categories from "../molecules/faqCategories";
import { movieData } from "../../data/moviesData";
import { PostModal } from "../molecules/postModal";
import { useState } from "react";
import SideNav from "./SideNav";

const Faqs = () => {
    const [currentPost, setCurrentpost] = useState(null)

    const [isModal, setIsModal] = useState(false);

    const handleEditClick = (content) => {
        setCurrentpost(content)

        setIsModal(true)
        console.log('working');
        
    }
    return (
        <>
            <div className=''>
            <SideNav/>
                

               
                {/* title and Search bar */}
                <div className={isModal ?' lg:w-[calc(100%-220px)] lg:ml-[220px] h-full bg-bills-lightblue overflow-y-hidden':'lg:w-[calc(100%-220px)] lg:ml-[220px] h-full bg-bills-lightblue'}>


                    <div className=" p-3 md:p-8">
                        <h1 className="font-semibold text-3xl">FAQs</h1>
                        <div className=" w-full  mt-4">
                            <div className=" flex items-center gap-3">
                                <div className="w-3/4 lg:w-5/6 relative ">
                                    <SearchNormal1 size={20} className="absolute  text-black/60 left-3 top-2 " />
                                    <input type="text" name="" id="" className=" w-full p-2 pl-10 rounded-md shadow outline-none focus:ring-2 ring-bills-darkblue placeholder-black/60" placeholder="Search" />
                                </div>



                                <input type="button" value={window.innerWidth < 640 ? 'Add' : 'Add New Question'} className="p-[0.6rem] bg-bills-darkblue w-1/4 lg:w-1/6 text-white text-center text-sm rounded-md inline-flex items-center px-4  cursor-pointer" />
                            </div>

                        </div>
                    </div>

                    {/* Categories */}
                    <div className="px-3 md:px-8 pb-12">
                        <Categories title={'Payment'} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {movieData.map((content) => {
                                return (
                                    <div className="col-span-1 bg-white p-3 rounded-md" key={content.id}>
                                        <p className="text-sm text-slate-500 font-semibold">Question</p>

                                        <div className="flex justify-between items-center py-2 border-b border-black/30">
                                            <p className="text-sm text-bills-darkblue font-semibold">{content.question}</p>
                                            <More  onClick={() => handleEditClick(content)} className="cursor-pointer" />
                                        </div>
                                        <p className="text-sm text-bills-darkblue">{content.answer}</p>
                                    </div>
                                )
                            })}
                            {isModal && currentPost && (
                                <PostModal 
                                content={currentPost} 
                                isModal={isModal}
                                onClose = {()=>setIsModal(false)}
                                />
                            )
                            }
                        </div>
                    </div>
                    <div className="px-3 md:px-8 pb-12">
                        <Categories title={'Integration'} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {movieData.map((content) => {
                                return (
                                    <div className="col-span-1 bg-white p-3 rounded-md" key={content.id}>
                                        <p className="text-sm text-slate-500 font-semibold">Question</p>

                                        <div className="flex justify-between items-center py-2 border-b border-black/30">
                                            <p className="text-sm text-bills-darkblue font-semibold">{content.question}</p>
                                            <More onClick={() => setIsModal(true)} />

                                        </div>
                                        <p className="text-sm text-bills-darkblue">{content.answer}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Faqs;