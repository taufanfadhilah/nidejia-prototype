'use client'
import { Button } from '@/components/atomics/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/atomics/dropdown-menu'
import Title from '@/components/atomics/title'

function Header() {
    const [isLogin, setIsLogin] = useState(true)

    return (
      <header className="container mx-auto fixed inset-x-0 top-[30px] z-20">
        <div className="p-[30px] rounded-[30px] bg-white flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="nidejia"
              height={36}
              width={133}
            />
          </Link>

          <nav>
            <ul className="flex items-center space-x-[30px]">
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Featured
              </li>
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Categories
              </li>
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Testimonials
              </li>
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                About
              </li>
            </ul>
          </nav>

          <div
            data-login={isLogin}
            className="data-[login=true]:hidden data-[login=false]:flex items-center space-x-3"
          >
            <Button variant="secondary" size="header">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="default" size="header" className="shadow-button">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              data-login={isLogin}
              className="data-[login=false]:block outline-none"
            >
              <div className="flex items-center space-x-2">
                <Title title="Ariana Xian" subtitle="Howdy" section="header" />
                <Image
                  src="/images/avatar.webp"
                  alt="avatar"
                  height={48}
                  width={48}
                  className="rounded-full"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] mr-8 space-y-4">
              <DropdownMenuItem>
                <Link href={"/dashboard"}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/dashboard/my-listings"}>My Listings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>My Rentals</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sign-in">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    );
}

export default Header