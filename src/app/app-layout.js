'use client'

import Header from '../components/components/header/header';
import Footer from '../components/components/footer/footer';
import { AppSidebar } from '../components/components/sidebar/page';
import {  SidebarTrigger } from '@/components/ui/sidebar'
import { Toaster } from "@/components/ui/toaster"

// Note: SidebarProvider is hoisted to layout.js

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
        <AppSidebar />
        <SidebarTrigger />
        {children}
        <Toaster />
      <Footer />
    </>
  );
};

export default AppLayout;