'use client'

import { usePathname } from 'next/navigation';
import { AppLayout } from './app-layout';

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('auth');

  return (isAuthPage ? 
    <div>{children}</div> : 
    <AppLayout>{children}</AppLayout>);
  
};

export default ClientLayout;