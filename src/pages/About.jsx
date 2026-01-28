import React from 'react'
import Donut from '../components/Donut/Donut'

const About = () => {
    return (
        <React.Fragment>
            <div id="about" className='mb-10'>
                <h2 className="section-heading mb-20 md:mb-0">About.</h2>
                <div className="row-1 w-11/12 mx-auto flex justify-between items-center flex-col-reverse md:flex-row gap-20">
                    <div className="about-text w-full md:w-3/4">
                        <div className="font-mono font-medium text-lg">
                            <div className="about-header text-2xl md:text-3xl text-center w-full mt-4 mb-8">Hello There! This is Sivaprakash</div>
                            <div className="about-block-wrapper grid md:flex grid-cols-2 gap-5 text-center min-h-72">
                                <div className="about-block col-span-2"><AboutBlock msg="A Computer Science Student at Thiagarajar College of Engineering" /></div>
                                <div className="about-block"><AboutBlock msg="A passionate Frontend Developer" /></div>
                                <div className="about-block"><AboutBlock msg="A learning backend developer" /></div>
                                <div className="about-block col-span-2"><AboutBlock msg="A curious learner exploring the low level stuff of computers" /></div>
                                <div className="about-block col-span-2"><AboutBlock msg="An eager Rust learner, doing projects and learning more..." /></div>
                            </div>
                        </div>
                    </div>
                    <div className="donut-cont w-full md:w-1/2 h-100 text-[12px] hidden md:block">
                        <Donut />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const AboutBlock = ({msg}) => {
    return (
        <React.Fragment> 
            <div className="absolute top-0 right-0 cover w-full h-full bg-terminal rounded-xl flex justify-center items-center text-black font-black text-5xl text-center z-2">SP</div>
            <div className="flex justify-center items-center -z-1">{msg}</div>
        </React.Fragment>
    )
}

export default About
