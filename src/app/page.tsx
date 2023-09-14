import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';

export default async function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
        <h1 className="mr-3 text-5xl font-semibold white-clr">Chat with any PDF</h1>
        <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex mt-2">
          <Button className="green-clr">
            Go to Chats
          </Button>
        
        </div>
        </div>
      </div>
    </div>
  )
}
