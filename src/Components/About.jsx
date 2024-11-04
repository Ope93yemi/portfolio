import pas from '../assets/img/pas.jpg'
const About = () => {
    return (
        <>
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={pas} alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>About Me</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    HI, my name is Precious Adesola. Am a Full-stack developer with a foundation in biomedical science, bringing together a unique skill set in web development, data science, and machine learning. With proficiency in frontend and backend technologies, including React, Node.js, and TypeScript, I apply a rigorous, detail-oriented approach to developing responsive, user-friendly applications. My expertise in data science and machine learning allows me to create innovative solutions and cutting-edge diagnostic tools that address complex global health challenges. I am passionate about leveraging technology to drive impactful change and deliver solutions that meet the needs of both clients and end-users on a global scale.
                                </p>
                            </div>
                            <div className="skills">
                                <div className="skill-name">
                                    <p>REACTJS</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>HTML</p><p>100%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>TYPESCRIPT</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>CSS</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Javascript</p><p>100%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>My Skills</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="service-text">
                                <h3>Frontend Development</h3>
                                <p>
                                    With a keen eye for detail and a deep understanding of user experience, I excel in creating responsive, intuitive interfaces that bring ideas to life on screen. Leveraging the latest in ReactJS, TypeScript, JavaScript, CSS, and HTML, I craft interactive, high-performance applications that enhance user engagement and satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>Backend Development</h3>
                                <p>
                                    My backend development skills enable me to build robust, scalable architectures that support dynamic applications. Skilled in Nodes.js, I ensure that data flows seamlessly, with an emphasis on security, efficiency, and maintainability, creating a solid foundation for any application’s success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="service-text">
                                <h3>Machine Learning</h3>
                                <p>
                                    I have a solid foundation in Machine Learning, including hands-on experience with data preprocessing, model building, and evaluation. My expertise includes supervised and unsupervised learning techniques, as well as experience working with Python libraries such as TensorFlow, Keras, and scikit-learn. I enjoy tackling complex problems and turning data into actionable insights.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fab fa-google"></i>
                            </div>
                            <div className="service-text">
                                <h3>G-Suite Tools</h3>
                                <p>
                                    Proficient in leveraging G-Suite tools to enhance productivity and collaboration. Skilled in Google Drive for organizing and sharing resources, Google Docs and Sheets for real-time document and data management, and Google Meet for seamless video conferencing. Adept at optimizing workflows using Google Forms for data collection and Google Slides for creating visually engaging presentations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="banner wow zoomIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="section-header text-center">
                    <p></p>
                    <h2>Ready to turn ideas into impactful solutions?.</h2>
                </div>
                <div className="container banner-text">
                    <p>
                        Let’s make it happen together! Whether you're looking to build a
                        dynamic application, strengthen your brand with standout visuals,
                        or enhance the security of your platform, I'm here to help. I'm
                        always excited to collaborate on projects that push boundaries and
                        create lasting value. Let’s connect and explore how we can bring
                        your vision to life.
                    </p>
                    <a className="btn" href="#contact">Contact Me</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
