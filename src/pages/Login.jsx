import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import bunnyAnimation from "../assets/babyRabbit.json";
import sadAnimation from "../assets/sadEmotion.json";
import loveAnimation from "../assets/love.json";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [love, setLove] = useState("");

  const SECRET = import.meta.env.VITE_SECRET_NAME || "bunny";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().toLowerCase() === 'bou') {
      setLove("Apni amar bou! Apni amar shob kichu! ❤️, kintu ami ador kore ki bole daki?");
    }
    else if (name.trim().toLowerCase() === SECRET.toLowerCase()) {
      navigate("/home");
    } else {
      setError("Hmm… Apni janen na apni amr ke hon? Abr chesta korun!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        {!error && !love && <div className="animation-box">
          <Lottie animationData={bunnyAnimation} loop />
        </div>}

        {love && <div className="animation-box">
          <Lottie animationData={loveAnimation} loop />
        </div>}

        {error && <div className="animation-box">
          <Lottie animationData={sadAnimation} loop />
        </div>}

        <div className="login-heading">
          <h2 className="login-title">
            Hey <span className="eyes">👀</span>
          </h2>

          <p className="login-subtitle">Who is this?</p>
        </div>


        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Apki ke hon amr aktu suni"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            className="login-input"
          />

          <button type="submit" className="login-button">
            Enter ❤️
          </button>
        </form>

        {error && <p className="login-error">{error}</p>}
        {love && <p className="login-error">{love}</p>}
      </div>
    </div>
  );
}
