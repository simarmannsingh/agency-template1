import { fonts } from '@/lib/utils';
import { ThemeProvider } from "@/components/themeProvider"
import { SidebarProvider } from "@/components/ui/sidebar"
import "./globals.css";


export const metadata = {
  title: "Mazala Restaurant",
  description: "Where Guests Become Family!",
};


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${fonts.josefine}`}>
      <SidebarProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
        >

          {children}

        </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
