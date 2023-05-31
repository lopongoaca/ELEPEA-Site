import Image from 'next/image'

export default function notFound() {
    return (
        <>
            <div className='content'>
                <div>
                    <h1 className='animate-text-enter text-[20vw] sm:text-9xl'>
                        <span className='block leading-thin'>NOT</span>
                        <span className='block leading-thin relative'>FOUND
                            <span className="animate-blink-dash absolute bottom-0 text-[5rem] sm:text-[7rem] text-neutral-700">_</span>

                        </span>
                        
                    </h1>
                </div>
            </div>
            <div className='fixed bottom-0 text-center w-full pb-2 text-sm'>
                <a href="mailto:contacto@elepea.com">contacto@elepea.com</a>
            </div>
        </>
    )
}
