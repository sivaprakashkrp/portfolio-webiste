import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import TerminalAnimation from './components/TerminalAnimation'

const App = () => {
	const [visible, setVisible] = useState(true);

	const handleUnanimatedState = () => {
		sessionStorage.setItem("animated", "True");
		setVisible(false);
	}

	useEffect(() => {
		if (sessionStorage.getItem("animated") != null) {
			setVisible(false);
		} else {
			setTimeout(handleUnanimatedState, 2000);
		}
	})

	return (
		<React.Fragment>
			{visible ? (
				<div className="starter-animation">
					<TerminalAnimation />
				</div>
			) : (
				<Home />
			)}
		</React.Fragment>
	)
}

export default App
