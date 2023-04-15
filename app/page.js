import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='basis-1/4'>
          <h1 className='logo'>LPA</h1>
        </div>
        <div className='basis-3/4 justify-between flex flex-col h-3/4'>
          {/* <h2><a href="#">Development
            <span>Development</span>
            <span>Development</span>
            <span>in yourself</span></a></h2> */}

          <h2><a href="#">Development</a></h2>
          <h2><a href="#">Design</a></h2>
          <h2><a href="#">Advertisement</a></h2>
        </div>
      </div>
    </>
  )
}
