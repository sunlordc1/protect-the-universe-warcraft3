'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()

    return(
        <Image alt="Logo" height={64} width="64" src="/images/logo.png" className='hidden md:block cursor-pointer'/>
    )
}
export default Logo