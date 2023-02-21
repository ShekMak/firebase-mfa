import Link from "next/link";
import {GithubLogo, YoutubeLogo} from "phosphor-react";

export default function Home() {
  return (
    <div className='flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80 py-24 bg-white'>
        <header className='flex justify-between mb-40'>
            <p className='text-xl font-bold'>Firebase MFA</p>
            <nav className='flex gap-x-8'>
                <Link className='hover:underline hover:text-sm' href='/login'>Login</Link>
                <Link className='hover:underline hover:text-sm' href='/sign-up'>Sign Up</Link>
            </nav>
        </header>
        <h1 className='text-3xl'>Build Firebase MultiFactor Authentication</h1>
        <p>This project is part of a video that explains how to build a multi-factor authentication with Firebase.</p>
        <div className='flex flex-col gap-y-2 mb-5'>
            <h2 className='pb-4'>You can find the video via links below 👇</h2>
            <Link className='flex items-center gap-x-4 hover:underline text-base' href='https://youtu.be/Py5K_rv1_3A'>
                <YoutubeLogo weight='fill' width={26} height={26} />
                <span>The Complete video</span>
            </Link>
            <Link className='flex items-center gap-x-4 hover:underline text-base' href='https://www.youtube.com/@buildtechnow/'>
                <YoutubeLogo weight='fill' width={26} height={26} />
                <span>The YouTube Channel</span>
            </Link>
        </div>
        <p>You can find the project on Github</p>
        <Link className='flex items-center gap-x-4 hover:underline text-base' href='https://github.com/ShekMak/firebase-mfa'>
            <GithubLogo weight='fill' width={26} height={26} />
            <span>The YouTube Channel</span>
        </Link>
    </div>
  )
}
