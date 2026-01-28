import React from 'react'

const FastfetchOutput = () => {
  return (
    <div className='gap-10 hidden md:flex items-center font-mono m-5'>
        <ArchIcon />
        <FastfetchInfo />
    </div>
  )
}

const ArchIcon = () => {
    return (
        <pre className="font-mono font-sm text-center" style={{whiteSpace: "pre-wrap"}}>
             -`<br />
            .o+`<br />
           `ooo/<br />
          `oooo/<br />
         `oooooo/<br />
         -/oooooo+/<br />
       `/:-:++oooo+/<br />
      `/++++/++++oo+:`<br />
     `/++++++++++++++o:`<br />
    `/+++ooooooooooooo/`<br />
   ./ooosssso++osssssso+`<br />
  .oossssso-````/ossssss+`<br />
 -osssssso.      :ssssssso.<br />
:osssssss/        ossssoooo.<br />
        </pre>
    )
}

const FastfetchInfo = () => {
    return (
        <div className="">
            user@arch <br />
            OS: Arch Linux x86_64 <br />
            Kernel: linux 6.18.7 <br />
            Uptime: 1 hour, 5 mins <br />
            Packages: 513 (pacman) <br />
            Shell: bash 5.3 <br />
            Resolution: 1920x1080 <br />
            WM: Hyprland <br />
            Theme: Adwaita <br />
            Terminal: Alacritty <br />
            Storage: 10GB / 25.7GB (43% used) <br />
            Swap: 1024 Bytes free <br />
            Memory: 2GB / 16GB <br />
        </div>
    )
}

export default FastfetchOutput
//                  -`                  user@arch
//                 .o+`                 OS: Arch Linux x86_64
//                `ooo/                 Kernel: linux 6.x.x
//               `oooo/                 Uptime: 1 hour, 5 mins
//              `oooooo/                Packages: 1000 (pacman)
//              -/oooooo+/              Shell: bash 5.x
//            `/:-:++oooo+/             Resolution: 1920x1080
//           `/++++/++++oo+:`           WM: i3
//          `/++++++++++++++o:`         Theme: Adwaita
//         `/+++ooooooooooooo/`         Icons: Arch
//        ./ooosssso++osssssso+`        Terminal: kitty
//       .oossssso-````/ossssss+`       CPU: AMD Ryzen...
//      -osssssso.      :ssssssso.      GPU: NVIDIA...
//     :osssssss/        ossssoooo.     Memory: 2GB / 16GB
//    /osssssss/        +ssssoooo/
//   /osssssss/        +sssoooo/
//  /osssssss/        +sssoooo/