import Iopr from '../assets/img/iopr.png'
const Hero = () => {
    return (
        <div className="hero" id="home">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p>I'm</p>
                            <h1>Precious Adesola</h1>
                            <h2></h2>
                            <div className="typed-text">I am a Software Developer, With deep knowledge of REACTJS, TYPESCRIPT, JAVASCRIPT, CSS, HTML</div>
                        </div>
                        <div className="hero-btn">
                            <a className="btn" href="">Hire Me</a>
                            <a className="btn" href="">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-none d-md-block">
                    <div className="hero-image">
                        <img src={Iopr} alt="Hero Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Hero;
