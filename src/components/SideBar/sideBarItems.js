
import { faStar, faHouse, faGear, faArrowRightFromBracket, faUserGroup, faWallet, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const sideBarItems = [
    {
         name: 'DASHBOARD',
         link: 'vendor-dashboard',
         cName: 'side-link',
         icon: faHouse
     },
     {
         name: 'TRANSACTIONS',
         link: 'TRANSACTIONS',
         cName: 'side-link',
            icon: faArrowRightArrowLeft
     },
    {
         name: 'WALLET',
         link: 'WALLET',
         cName: 'side-link',
            icon: faWallet
     },
     {
      name: 'RATINGS',
      link: 'vendor-rating',
      cName: 'side-link',
         icon: faStar
  },
    {
         name: 'SETTINGS',
         link: 'vendor-settings',
         cName: 'side-link ActiveView',
            icon: faGear
     },
     {
         name2: 'SUPPORT',
         link2: 'support',
         cName2: 'side-link2',
            icon2: faUserGroup
     },
      {
         name2: 'LOGOUT',
         link2: 'LOGOUT',
         cName2: 'side-link2',
            icon2: faArrowRightFromBracket
     }
    
 ]