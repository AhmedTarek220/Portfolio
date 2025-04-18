import "./Hero.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developer from "../Animation/Animation - 1738717913576.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: [" WebDeveloper", " WebDesigner", " FrontEnd"],
    loop:0,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 2500,
  });
  return (
    <section className="container">
      <div className="left-section">
        <div className="avatar">
          <motion.img
            initial={{ opacity: 0, transform: "scale(0)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 2 }}
            src="./me-modified.png"
            alt=""
          />
          <i className="fas fa-check-circle"></i>
        </div>
        <motion.div className="text"
                      initial={{ x: "-100vw" }} 
                      animate={{ x: 0 }} 
                      transition={{ type: "spring", stiffness: 60 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            I'am A<span style={{ color: "var(--blue)" }}>{text}</span>
            <span style={{fontSize:'50px'}}><Cursor /></span>
          </motion.h1>
          <p>
            i'm a passionate web developer with a knack for creating stunning and functional websites. I love to explore new technologies and push the boundaries of web development.
          </p>
        </motion.div>
        <div className="icons">
          <h4>To Contact Me:</h4>
          <a href="https://www.facebook.com/profile.php?id=100026771405295" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/AhmedTarek220" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/ahmmedtarekk2/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-tarek-3ab182256/"target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={developer} />
      </div>
    </section>
  );
}

export default Hero;
