import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/atomics/dropdown-menu'
import { Input } from '@/components/atomics/input'
import Title from '@/components/atomics/title'
import Image from 'next/image'

function TopMenu() {
  return (
    <header className='w-full p-[30px] rounded-[30px] bg-white flex justify-between items-center'>
      <div>
        <Input
          icon='/icons/search.svg'
          variant='auth'
          placeholder='Search listing or rental by name...'
          className='w-[400px]'
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className='outline-none'>
          <div className='flex items-center space-x-2'>
            <Title
              title='Ariana Xian'
              subtitle='Howdy'
              section='header'
              reverse
            />
            <Image
              src='https://cdn1-production-images-kly.akamaized.net/7ELedlV1INGpDeTpO9ss-gJ-QHk=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4143828/original/014904200_1662047502-rose-blackpink-jadi-global-ambassador-sulwhasoo-6.jpeg'
              alt='avatar'
              height={48}
              width={48}
              className='rounded-full'
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-[240px] mr-8 space-y-4'>
          <DropdownMenuItem>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            My Listings
          </DropdownMenuItem>
          <DropdownMenuItem>
            My Rentals
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default TopMenu
