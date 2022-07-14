import { useState } from "react";

export default function SoundBoxComponent({ text, id }) {
    const [isPlaying, setPlaying] = useState(false);
    
    const onClick = () => {
        /** @type {HTMLAudioElement} */
        const track = document.getElementById(id);

        if (isPlaying && track !== null) {
            track.currentTime = 0
        };

        track.addEventListener("ended", () => {
            return setPlaying(false);
        }, { once: true });

        track.play();
        setPlaying(true);
    };

    return (
        <div className="mt-3">
            <button className={"bg-pink-600 hover:bg-pink-700 transition py-16 mr-3 px-14 w-64 rounded border-b-4 " + `${isPlaying ? "border-green-600" : ""}`} onClick={onClick}>{text}</button>
        </div>
    );
};