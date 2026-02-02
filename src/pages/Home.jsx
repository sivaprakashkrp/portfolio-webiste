import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Projects from './Projects'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from '../components/Footer'
import HelpShortcutTag from '../components/HelpShortcutTag'

const Home = () => {

	useEffect(() => {
		const cursor = document.getElementById('inverted-cursor');

		document.addEventListener('mousemove', (e) => {
			// Move the div to the mouse location
			cursor.style.left = e.clientX + 'px';
			cursor.style.top = e.clientY + 'px';
		});
	})

	return (
		<React.Fragment>
			<Navbar />
			<HeroSection />
			<div className="cont md:ps-10">
				<About />
				<Projects />
				<Certifications />
				<Contact />
			</div>
			<HelpShortcutTag />
			<Footer />
			<div id="inverted-cursor" className='hidden md:block'></div>
		</React.Fragment>
	)
}

export default Home