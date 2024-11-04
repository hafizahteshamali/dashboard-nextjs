'use client';

import { items } from "../utils/constant/SidebarData";
import { LogOut } from 'lucide-react';
import { auth, signOut } from "@/app/(pages)/auth/firebaseConfig/page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation";

export function AppSidebar() {

  const router = useRouter();

  const logout = ()=>{
    signOut(auth).then(() => {
        toast.success("Logout Successfylly...!");
      router.push("/auth/login");
    }).catch((error) => {
      toast.error(error);
    });
  }

  return (
    <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <button onClick={logout} className="mt-[100px] border-[2px] flex gap-3 items-center text-[18px] border-black p-2"><LogOut />Logout</button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </SidebarProvider>
  )
}
