import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton, auth } from '@clerk/nextjs';
import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";
import  FileUpload from '@/components/FileUpload';

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
        <h1 className="mr-3 text-5xl font-semibold white-clr">Chat with any PDF</h1>
        <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex mt-2">
          {isAuth && <Button variant="green">Go to Chats</Button>}
        
        </div>
        <p className="max-w-xl mt-1 text-lg text-lime-500">
          Use Worlds most powerful Large Language Models to instantly understand, interact and 
          ask questions about any PDF document.
        </p>

        <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
