// use app folder only if its a route
import Header from '@/components/header' // using @ bc in tsconfig we have @/* = ./* ; can use Header instead of { Header } bc in header we have "default" export
import Intro from '@/components/intro'
import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScrolling from "@/components/smoothScrolling";
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = { // what we see in the tab
  title: 'Yushan | Personal Portfolio',
  description: 'Yushan rocks and you do too',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
            rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]">
        </div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
            rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]">
        </div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>        
            {children}
            <Toaster position='top-right'/>
            <Footer/>
            <ThemeSwitch/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  )
}

// important: pt-28 sm:pt-36; because the header is fixed, the image will not see it when positioning, so add padding at the top
// children prop is the page.tsx
// absolute: This positions the div absolutely relative to the nearest positioned ancestor. If there isn't one,
// it's placed relative to the initial containing block (usually the viewport or the html element)
