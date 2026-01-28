import React, { useEffect } from 'react'
import FastfetchOutput from './FastfetchOutput';

const TerminalAnimation = () => {
    useEffect(() => {
        var i = 0;
        var txt = document.getElementById("typewriter").innerText; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */

        document.getElementById("typewriter").innerText = "";

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("typewriter").innerText += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter()
    }, [])

    return (
        <React.Fragment>
            <FastfetchOutput />
            <div className="w-screen h-screen font-mono text-sm">
                <p className="">user@hellcat ~/projects/portfolio> <span id="typewriter">npm&nbsp;run&nbsp;dev&nbsp;</span> <span className="cursor w-2 border-b-2 botder-terminal animate-pulse"></span> </p>
            </div>
        </React.Fragment>
    )
}

export default TerminalAnimation
