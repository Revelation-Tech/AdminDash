import { Add, ArrowDown2 } from "iconsax-react";
import useModalStore from "../../store/useModalStore";

const Categories = ({title}) => {

    const {onOpen} = useModalStore();

    return (  
        <>
         <div className="flex justify-between items-center border-b pb-3 border-black/30">
                    <h1 className="text-bills-darkblue text-lg md:text-2xl  ">{title}</h1>
                    <div className="inline-flex items-center">
                        <button onClick={() => onOpen({title})} className="inline-flex text-sm items-center bg-bills-skyblue/15 p-2 text-bills-darkblue">Add New Question <Add size={16}/> </button>

                        <ArrowDown2 size={20} className="ml-2"/>
                    </div>
                </div>
        </>
    );
}
 
export default Categories;