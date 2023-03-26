import home from "../assets/images/home.png"
import transfer from "../assets/images/transfer.png"
import wallet from "../assets/images/Wallet.png"
import support from "../assets/images/support.png"
import settings from "../assets/images/settings.png"
import logout from "../assets/images/logout.png"
import awaiting from "../assets/images/awaiting.png"
import completed from "../assets/images/completed.png"
import ongoing from "../assets/images/ongoing.png"
import cancelled from "../assets/images/cancelled.png"

export const sidebarData = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/",
    img: home,
  },

  {
    id: "transcation",
    title: "Transcation",
    path: "/transcation",
    img: transfer,
  },
  {
    id: "wallet",
    title: "wallet",
    path: "/transcation",
    img: wallet,
  },
  {
    id: "wallet",
    title: "wallet",
    path: "/transcation",
    img: wallet,
  },

  {
    id: "settings",
    title: "Support",
    path: "/suppport",
    img: support,
  },
]
export const sidebarData2 = [
  {
    id: "dashboard",
    title: "dashboard",
    path: "/",
    img: support,
  },
  {
    id: "dashboard",
    title: "sign out",
    path: "/",
    img: logout,
  },
]
export const transcationData = [
  {
    name: "Ridic Ventures",
    amount: "250,000.00",
    date: "25th May, 2022",
    status: "Awaiting Approval",
    img: awaiting,
    device:" Iphone 11...",
  },
  {
    name: "Ridic Ventures",
    amount: "250,000.00",
    date: "25th May, 2022",
    status: "Completed",
    img: completed,
    device:" Iphone 11...",
  },
  {
    name: "Ridic Ventures",
    amount: "250,000.00",
    date: "25th May, 2022",
    status: "On-going",
    img: ongoing,
    device:" Iphone 11...",
  },
  {
    name: "Ridic Ventures",
    amount: "250,000.00",
    date: "25th May, 2022",
    status: "Cancelled",
    img: cancelled,
    device:" Iphone 11...",
  },
]
