import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <div className="w-full bg-terminal font-mono font-normal py-2 text-black text-center">
            &copy; {new Date().getFullYear()} Sivaprakash P <span className='hidden md:inline'>-</span> <br className='md:hidden' /> Have a good day :)
        </div>
    </React.Fragment>
  )
}

export default Footer
