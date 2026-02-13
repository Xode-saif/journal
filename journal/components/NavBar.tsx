import { MenuIcon, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
type NavigationItem = {
  title: string
  href: string
}[]
const navigationData:NavigationItem = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]




const NavBar = () => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-2 sm:px-6'>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          <a href='#' className='hover:text-primary max-md:hidden'>
            Home
          </a>
          <a href='#' className='hover:text-primary max-md:hidden'>
            Tools
          </a>
          <a href='#' className='flex shrink-0 shadow-xl rounded-full bg-zinc-300 p-4'>
            {/* <Logo className='text-foreground gap-3' /> */}
            <div className=''>
                <span className='rounded-full font-bold text-black'>FT</span>
            </div>
          </a>
          <a href='#' className='hover:text-primary max-md:hidden'>
            Rules
          </a>
          <a href='#' className='hover:text-primary max-md:hidden'>
            Dashboard
          </a>
        </div>

        <div className='flex items-center gap-6'>
          {/* <Button variant='ghost' size='icon'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default NavBar
