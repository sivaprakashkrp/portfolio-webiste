import React, { useRef, useEffect, useState } from 'react';

const Game = ({ onClose }) => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        // Player constrained to bottom
        let player = { x: width / 2, y: height - 50, size: 20, speed: 7 };
        let bullets = [];
        let enemies = [];
        let keys = {};
        let animationFrameId;
        let scoreCount = 0;
        let gameRunning = true;
        let lastShotTime = 0;
        const shotDelay = 100; // Time between shots in ms

        const handleKeyDown = (e) => (keys[e.key] = true);
        const handleKeyUp = (e) => (keys[e.key] = false);

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const spawnEnemy = () => {
            if (!gameRunning) return;
            const size = 30;
            const x = Math.random() * (width - size);
            enemies.push({ x, y: -size, size, speed: 3 + Math.random() * 3 });
            setTimeout(spawnEnemy, 800);
        };
        setTimeout(spawnEnemy, 1000);

        const update = (timestamp) => {
            if (!gameRunning) return;

            // Player movement - X axis only
            if ((keys['a'] || keys['ArrowLeft']) && player.x > 0) player.x -= player.speed;
            if ((keys['d'] || keys['ArrowRight']) && player.x < width - player.size) player.x += player.speed;

            // Continuous Shooting
            if (keys[' '] || keys['Shift']) { // Shoot with Space or Shift
                if (timestamp - lastShotTime > shotDelay) {
                    bullets.push({
                        x: player.x + player.size / 2 - 2,
                        y: player.y,
                        width: 4,
                        height: 15, // Longer bullets for "stream" effect
                        speed: 10
                    });
                    lastShotTime = timestamp;
                }
            }

            // Update bullets
            bullets.forEach((b, i) => {
                b.y -= b.speed;
                if (b.y < 0) bullets.splice(i, 1);
            });

            // Update enemies
            enemies.forEach((e, i) => {
                e.y += e.speed;

                // Remove if off screen
                if (e.y > height) {
                    enemies.splice(i, 1);
                }

                // Collision with player
                if (
                    player.x < e.x + e.size &&
                    player.x + player.size > e.x &&
                    player.y < e.y + e.size &&
                    player.y + player.size > e.y
                ) {
                    gameRunning = false;
                    setGameOver(true);
                }

                // Collision with bullets
                bullets.forEach((b, bi) => {
                    if (
                        b.x < e.x + e.size &&
                        b.x + b.width > e.x &&
                        b.y < e.y + e.size &&
                        b.y + b.height > e.y
                    ) {
                        enemies.splice(i, 1);
                        bullets.splice(bi, 1);
                        scoreCount += 10;
                        setScore(scoreCount);
                    }
                });
            });

            draw();
            animationFrameId = requestAnimationFrame(update);
        };

        const draw = () => {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, width, height);

            // Draw Stars background
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 5; i++) {
                ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
            }

            // Player (Triangle)
            ctx.fillStyle = '#0f0'; // Retro green
            ctx.beginPath();
            ctx.moveTo(player.x + player.size / 2, player.y);
            ctx.lineTo(player.x + player.size, player.y + player.size);
            ctx.lineTo(player.x, player.y + player.size);
            ctx.fill();

            // Bullets
            ctx.fillStyle = '#ffff00'; // Yellow bullets
            bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

            // Enemies
            ctx.fillStyle = 'red';
            enemies.forEach(e => ctx.fillRect(e.x, e.y, e.size, e.size));
        };

        requestAnimationFrame(update);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(animationFrameId);
            gameRunning = false;
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black cursor-none">
            <canvas ref={canvasRef} className="block" />
            <div className="absolute top-4 left-4 text-green-400 font-mono text-xl pointer-events-none">
                SCORE: {score}
            </div>
            <button onClose={onClose} onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white font-mono z-50 p-2 bg-gray-900 border border-gray-700 rounded cursor-pointer">
                QUIT (ESC)
            </button>
            {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-red-500 font-mono cursor-default">
                    <h1 className="text-6xl font-bold mb-4">GAME OVER</h1>
                    <p className="text-2xl mb-8">Final Score: {score}</p>
                    <button onClick={onClose} className="border border-red-500 px-6 py-2 text-red-500 hover:bg-red-500 hover:text-black transition-colors cursor-pointer">
                        EXIT SECTOR
                    </button>
                    <p className="mt-4 text-gray-500 text-sm">Refresh to play again</p>
                </div>
            )}
        </div>
    );
};

export default Game;
