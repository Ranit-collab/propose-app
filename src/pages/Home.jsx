import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/couple.jpg";
import pencilAnimation from "../assets/pencil.json";
import pleaseAnimation from "../assets/please.json";
import loveAnimation from "../assets/love.json";

export default function Home() {
    const [hasTriedNo, setHasTriedNo] = useState(false);
    const [showYesWarning, setShowYesWarning] = useState(false);
    const [showNoBanner, setShowNoBanner] = useState(false);
    const [showLovePopup, setShowLovePopup] = useState(false);

    const noRef = useRef(null);
    const originRef = useRef({ x: 0, y: 0 });
    const [style, setStyle] = useState({});
    const navigate = useNavigate();

    // Capture initial button position once
    useEffect(() => {
        setTimeout(() => {
            const rect = noRef.current.getBoundingClientRect();
            originRef.current = {
                x: rect.left,
                y: rect.top
            };
        }, 100);
    }, []);

    const moveNo = () => {

        setHasTriedNo(true);
        setShowNoBanner(true);
        const radius = window.innerWidth < 768 ? 120 : 250;

        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * radius;

        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;

        setStyle({
            transform: `translate(${x}px, ${y}px)`
        });
    };

    return (
        <div className="home">

            {/* Floating background image */}
            <div
                className="image-reveal"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            <button
                className="logout-btn"
                onClick={() => navigate("/")}
            >
                Logout
            </button>


            {/* Pencil animation */}
            <div className="pencil-lottie">
                <Lottie animationData={pencilAnimation} loop={false} />
            </div>

            {showYesWarning && (
                <div className="popup">
                    Try clicking No first 😏
                    <button onClick={() => setShowYesWarning(false)}>OK</button>
                </div>
            )}

            {showNoBanner && (
                <div className="top-banner">
                    You think that's an option? 😄
                </div>
            )}

            {showLovePopup && (
                <div className="love-popup-overlay">
                    <div className="love-popup">
                        <Lottie animationData={loveAnimation} loop />

                        <h2 style={{ color: "#ff4d6d" }}>
                            <b>Yey, Love you so much bou ❤️</b>
                        </h2>

                        <button onClick={() => setShowLovePopup(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}



            {/* Proposal box */}
            <div className="proposal-box">

                <div className="">
                    <Lottie style={{ width: "300px", height: "300px" }} animationData={pleaseAnimation} loop />
                </div>
                <h2 style={{ color: "black" }}>Will you be my Valentine ❤️</h2>

                <div className="btn-group">
                    <button
                        className="yes"
                        onClick={() => {
                            if (!hasTriedNo) {
                                setShowYesWarning(true);
                                return;
                            }

                            setShowLovePopup(true);
                        }}
                    >
                        Yes 💖
                    </button>


                    <button
                        ref={noRef}
                        className="no"
                        onMouseEnter={moveNo}
                        onTouchStart={moveNo}
                        style={style}
                    >
                        No 💔
                    </button>
                </div>
            </div>
        </div>
    );
}
