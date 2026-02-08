import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function BackgroundMusic() {
    const audioRef = useRef(null);

    useEffect(() => {
        const startMusic = () => {
            audioRef.current.currentTime = 15;
            audioRef.current.play();
            audioRef.current.play().catch(() => { });
            document.removeEventListener("click", startMusic);
            document.removeEventListener("touchstart", startMusic);
            document.removeEventListener("keydown", startMusic);
        };

        document.addEventListener("click", startMusic);
        document.addEventListener("touchstart", startMusic);
        document.addEventListener("keydown", startMusic);

        return () => {
            document.removeEventListener("click", startMusic);
            document.removeEventListener("touchstart", startMusic);
            document.removeEventListener("keydown", startMusic);
        };
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src={music} type="audio/mpeg" />
        </audio>
    );
}
