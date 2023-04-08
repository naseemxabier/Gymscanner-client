import "./HomePage.css";
import video from "./video.mp4"
function HomePage() {
  return (
    <>
      <div id="intro" style={{ position: 'relative' }}>
        <video src={video} type="video/mp4" controlList="nodownload" muted loop autoPlay style={{ width: "100%", height: "auto" }}>
          Tu navegador no soporta el video.
        </video>
      </div>
      <div style={{ position: 'absolute', top: '49%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                    <h2 style={{ color: 'black', fontSize: '1.4rem', marginBottom: '1rem', fontFamily: "Montserrat" }}>Bienvenidos a Gymscanner</h2>
                    <p style={{ color: 'black', fontSize: '1rem', marginBottom: '0rem', fontFamily: "Montserrat" }}>Os damos la bienvida a todos aquellos que les gusta superarse día a día</p>
                </div>
      <div style={{ position: 'absolute', top: '28%', left: '20%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '1.5rem' }}>
        <button style={{ color: '#fff', borderRadius: '40px', backgroundColor: 'black', }}>
          <a href="./XabierNaseemEnglish.pdf" download style={{ color: '#fff', textDecoration: 'none' }}>Start now!</a>
        </button>
      </div>
    </>

  );
}

export default HomePage;
