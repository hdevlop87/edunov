'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/Components/Navbar'
import SideBar from '@/Components/SideBar/SideBar'
import { useSession } from "next-auth/react"
import Loader from '@/Components/Loader'
import { useRouter } from 'next/navigation';

const layout = ({ children }) => {

    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading || status === "loading") {
        return <Loader />
    }

    if (status === "unauthenticated") {
        router.push('/auth/signin');
        return null;
    }


    return (
        <div className='flex w-full h-full bg-red-50  '>
            <SideBar />
            <div className='flex flex-col gap-4 h-full px-4 flex-grow'>
                <Navbar />
                <main className='flex  h-full bg-white p-4 rounded-xl shadow-lg gap-4 flex-grow flex-col'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default layout