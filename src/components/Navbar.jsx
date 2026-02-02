import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth > 768 ? true : false
  );

  const windowLengthChecker = () => {
    if (window.innerWidth > 768) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowLengthChecker);

    return () => {
      window.removeEventListener("resize", windowLengthChecker);
    };
  });
	return (
		<React.Fragment>
			<nav className='h-[10vh] w-full p-3 bg-black'>
				<div className="border-2 border-terminal rounded-xl p-2 flex justify-between md:justify-center items-center">
					<div className="left font-crt font-bold text-3xl px-6">Sivaprakash</div>
					<div className="right">
						{windowWidth ? <BigScreenNavList /> : <SmallScreenNavMenu />}
					</div>
				</div>
			</nav>
		</React.Fragment>
	)
}

const BigScreenNavList = () => {
	return (
		<div className={`right font-mono gap-4 justify-around items-center hidden md:flex bg-black`}>
			<NavLinkList />
		</div>
	)
}

const SmallScreenNavMenu = () => {
	const [menuVisibility, setMenuVisibility] = useState(false);
	return (
		<React.Fragment>
			<button className="text-2xl font-black me-5 font-mono text-terminal" onClick={() => setMenuVisibility(!menuVisibility)}>{menuVisibility ? "🗙" : "☰"}</button>
			{menuVisibility && (
				<div className="flex flex-col items-center justify-start md:hidden bg-black double-dashed-border absolute text-terminal right-5 my-3 p-3 z-2">
					<NavLinkList />
				</div>
			)}
		</React.Fragment>
	)
}

const NavLinkList = () => {
	return (
		<React.Fragment>
			{navItems.map((item) => (
				<a key={item.title} className='font-mono text-lg font-medium hover:underline' href={item.link}>{item.title}</a>
			))}
		</React.Fragment>
	)
}

export default Navbar