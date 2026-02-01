import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import TerminalAnimation from './components/TerminalAnimation'
import KilledOverlay from './components/KilledOverlay'
import HelpDialog from './components/HelpDialog'
import Game from './components/Game'

const App = () => {
	const [visible, setVisible] = useState(true);
	const [isKilled, setIsKilled] = useState(false);
	const [showHelp, setShowHelp] = useState(false);
	const [showGame, setShowGame] = useState(false);

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
	}, []); // Added dependency array to run only once

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (isKilled) return; // No interaction if killed

			// Ctrl + C to kill
			if (e.ctrlKey && e.key === 'c') {
				e.preventDefault();
				setIsKilled(true);
				return;
			}

			// Don't trigger if typing in an input (if any exist later)
			if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

			if (showGame) {
				if (e.key === 'Escape') {
					setShowGame(false);
				}
				return; // Let Game component handle its own keys
			}

			if (showHelp) {
				if (e.key === 'Escape' || e.key === '?') {
					setShowHelp(false);
				}
				return;
			}

			switch (e.key) {
				case 'j':
					window.scrollBy({ top: 100, behavior: 'smooth' });
					break;
				case 'k':
					window.scrollBy({ top: -100, behavior: 'smooth' });
					break;
				case 'h':
					window.scrollBy({ left: -100, behavior: 'smooth' });
					break;
				case 'l':
					window.scrollBy({ left: 100, behavior: 'smooth' });
					break;
				case '?':
					setShowHelp(true);
					break;
				case 'G': // Shift + g
					setShowGame(true);
					break;
				default:
					break;
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isKilled, showGame, showHelp]);


	if (isKilled) {
		return <KilledOverlay />;
	}

	return (
		<React.Fragment>
			{showGame && <Game onClose={() => setShowGame(false)} />}
			{showHelp && <HelpDialog onClose={() => setShowHelp(false)} />}

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
