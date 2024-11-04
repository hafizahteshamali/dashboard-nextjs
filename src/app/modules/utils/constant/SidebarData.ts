// Menu items.

import { ChartArea, LayoutDashboard, ShoppingCart, CreditCard, ListOrdered, Search, Presentation, Settings } from "lucide-react"


export const items = [
    {
      title: "Dasboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: ChartArea,
    },
    {
      title: "Products",
      url: "/products",
      icon: ShoppingCart,
    },
    {
      title: "Payments",
      url: "/payment",
      icon: CreditCard,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ListOrdered,
    },
    {
      title: "Enquiry",
      url: "/enquiry",
      icon: Search,
    },
    {
      title: "Marketings",
      url: "/marketing",
      icon: Presentation,
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings,
    },
  ]