
import { faArrowLeft, faHouse, faGear, faArrowRightFromBracket, faUserGroup, faWallet, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const sideBarItems = [
    {
         name: 'DASHBOARD',
         link: 'DASHBOARD',
         cName: 'side-link',
         cNameX: 'side-linkX',
         icon: faHouse
     },
     {
         name: 'TRANSACTIONS',
         link: 'TRANSACTIONS',
         cName: 'side-link',
         cNameX: 'side-linkX',
            icon: faArrowRightArrowLeft
     },
    {
         name: 'WALLET',
         link: 'WALLET',
         cName: 'side-link',
         cNameX: 'side-linkX',
            icon: faWallet
     },
    {
         name: 'SETTINGS',
         link: 'SETTINGS',
         cName: 'side-link',
         cNameX: 'side-linkX',
            icon: faGear
     },
     {
         name2: 'SUPPORT',
         link2: 'SUPPORT',
         cName2: 'side-link2',
         cNameX2: 'side-linkX2',
            icon2: faUserGroup
     },
      {
         name2: 'LOGOUT',
         link2: 'LOGOUT',
         cName2: 'side-link2',
         cNameX2: 'side-linkX2',
            icon2: faArrowRightFromBracket
     }
    
 ]