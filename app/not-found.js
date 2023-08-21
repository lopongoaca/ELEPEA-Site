import { WhatsAppIcon } from "./Icons"

export default function NotFound() {
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
            <div className='flex flex-col items-center gap-1 fixed bottom-0 text-center w-full pb-6 text-sm'>
                <a href="https://wa.me/+573218524486" target="_blank" className="flex gap-2">(+57) 321-852-44-86 <WhatsAppIcon /></a>
                <a href="mailto:contacto@elepea.com">contacto@elepea.com</a>
            </div>
        </>
    )
}
