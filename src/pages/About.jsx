import React from 'react'
import Donut from '../components/Donut/Donut'

const About = () => {
    return (
        <React.Fragment>
            <div id="about" className='mb-10'>
                <h2 className="section-heading mb-20 md:mb-0">About.</h2>
                <div className="row-1 w-11/12 mx-auto flex justify-between items-center flex-col-reverse md:flex-row gap-20">
                    <div className="about-text w-full md:w-3/4">
                        <p className="font-mono font-medium text-lg">
                            Hello There! This is Sivaprakash <br />
                            -> A Computer Science Student at Thiagarajar College of Engineering <br />
                            -> A passionate Frontend Developer <br />
                            -> A learning backend developer <br />
                            -> A curious learner exploring the low level stuff of computers <br />
                            -> An eager Rust learner, doing projects and learning more... <br />
                        </p>
                    </div>
                    <div className="donut-cont w-full md:w-1/2 h-100 text-[12px]">
                        <Donut />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
