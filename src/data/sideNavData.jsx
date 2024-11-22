import { Airplane, ArchiveTick, Element3, I24Support, Notepad, Profile2User, Receipt,  Setting2, VideoVertical } from "iconsax-react";


export const sideNavData  = [
    {
        name:'Overview',
        icon:<Element3 size={20}  />,
        link:'/'
    },
    {
        name:'Bills',
        icon:<ArchiveTick size={20}/>,
         link:'/transaction'
    },
    {
        name:'Transaction',
        icon:<Receipt size={20}/>,
        link:'/trans'
    },
    {
        name:'User Management',
        icon:<Profile2User size={20}/>,
        link:'/huskah'
    },
    {
        name:'Flight Management',
        icon:<Airplane size={20}/>,
        link:'/tqui'
    },
    {
        name:'Movie Management',
        icon:<VideoVertical size={20}/>,
        link:'/movies'
    },
    {
        name:'Support',
        icon:<I24Support size={20}/>,
        link:'/lslpo'
    },
    {
        name:'FAQ',
        icon:<Notepad size={20}/>,
        link:'/faqs'
    },
    {
        name:'Control & Settings',
        icon:<Setting2 size={20}/>,
        link:'/settings'
    },
]