import { WhatsAppIcon } from "./Icons"

export default function Home() {
  return (
    <>
      <div className='content'>
        <div>
          <h1 className='animate-text-enter'>
            <span data-content="ELE" className="animate-text-line-height  before:opacity-0 bg before:animate-gradient-background-1">
              <span className="text from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">ELE</span>
            </span>
            <span data-content="PE" className="animate-text-line-height  before:opacity-0 bg before:animate-gradient-background-2">
              <span className="text from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">PE</span>
            </span>
            <span data-content="A" data-dash="_" className="animate-text-line-height  before:opacity-0 bg before:animate-gradient-background-3">
              <span className="text from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">A</span>
              <span className="animate-blink-dash absolute bottom-4 text-[7rem]  text-neutral-700">_</span>
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
