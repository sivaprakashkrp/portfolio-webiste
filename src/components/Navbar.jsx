import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const checker = () => {
		if (window.innerWidth >= 768) {
			setIsMobile(false)
		} else {
			setIsMobile(true)
		}
	}
	useEffect(() => {
		window.addEventListener("resize", checker)
		return () => window.removeEventListener("resize", checker)
	})
	return (
		<React.Fragment>
			<nav className='h-[10vh] w-full p-3'>
				<div className="border-2 border-lime-500 rounded-xl p-2 flex justify-center items-center">
					<div className="left font-crt font-bold text-3xl px-6">Sivaprakash</div>
					<div className="right">
						{isMobile ? () => {
							<div className="text-terminal text-xl">☰</div>
						} : () => {
							<div className={`right font-mono gap-4 justify-around items-center hidden md:flex`}>
								{navItems.map((item) => (
									<a key={item.title} href={item.link}>{item.title}</a>
								))}
							</div>
						}}
					</div>
				</div>
			</nav>
		</React.Fragment>
	)
}

export default Navbar
