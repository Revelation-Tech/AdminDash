import { Airplane, ArchiveTick, Element3, I24Support, Notepad, Profile2User, Receipt,  Setting2, VideoVertical } from "iconsax-react";


export const sideNavData  = [
    {
        name:'Overview',
        icon:<Element3 size={20}  />
    },
    {
        name:'Bills',
        icon:<ArchiveTick size={20}/>
    },
    {
        name:'Transaction',
        icon:<Receipt size={20}/>
    },
    {
        name:'User Management',
        icon:<Profile2User size={20}/>
    },
    {
        name:'Flight Management',
        icon:<Airplane size={20}/>
    },
    {
        name:'Movie Management',
        icon:<VideoVertical size={20}/>
    },
    {
        name:'Support',
        icon:<I24Support size={20}/>
    },
    {
        name:'FAQ',
        icon:<Notepad size={20}/>
    },
    {
        name:'Control & Settings',
        icon:<Setting2 size={20}/>
    },
]