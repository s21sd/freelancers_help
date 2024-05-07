import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const notfound = () => {
    return (
        <div className='h-screen flex flex-col gap-3 justify-center items-center'>
            <p>Page not Found</p>

            <Link href="/">
                <Button>Go to home</Button>
            </Link>

        </div>
    )
}

export default notfound
