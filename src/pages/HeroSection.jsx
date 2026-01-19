import React from 'react'
import AsciiArt from '../components/AsciiArt'

const HeroSection = () => {
  return (
    <React.Fragment>
        <div className="text-center mt-5 min-h-[90vh]">
			<h3 className="text-5xl font-bold font-crt">Hello there! This is</h3>
			<AsciiArt classes={"my-10"} />
      <p className="font-crt font-medium text-3xl w-3/4 md:w-1/2 mx-auto">A Curious Computer Science Student passionate in exploring computers the magic in them</p>
		</div>
    </React.Fragment>
  )
}

export default HeroSection
