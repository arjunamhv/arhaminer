import Pentest from './components/pentest';

function App() {
  return (
    <div id="fullpage">
      {/* start home */}
      <div id="home" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
              <h3>Solusi Keamanan Siber</h3>
              <img src="images/logo.png" alt="Logo" />
              <h2 className="rotate">
                Penetration Testing, Vulnerability Assessment, Phishing
                Simulation
              </h2>
              <p>
                ARHAMINER menawarkan solusi keamanan siber berkualitas tinggi
                untuk membantu meminimalkan risiko keamanan untuk aplikasi anda.
                Tim kami menyediakan layanan dan solusi keamanan TI yang
                komprehensif untuk melindungi klien dari ancaman siber.
              </p>
              <a
                href="#pentest"
                className="btn btn-default smoothScroll wow fadeInUp"
                data-wow-delay="1s"
              >
                Get started
              </a>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
      {/* end home */}
      {/* start work */}
      <div id="work" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow bounce">
              <h2>WHAT WE DO</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-solid fa-shield-halved" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Vulnerability Assessment</h3>
                  <p>
                    Kami menilai kerentanan dan risiko pada situs web, aplikasi,
                    sistem TI, dan jaringan, memberikan laporan yang jelas tanpa
                    perlunya mengambil tindakan yang tepat.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-solid fa-user-secret" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Penetration Testing</h3>
                  <p>
                    Uji Penetrasi Keamanan oleh peretas etis bersertifikat dan
                    berpengalaman untuk mengungkap kerentanan keamanan. Laporan
                    terperinci disediakan, menguraikan secara spesifik
                    kerentanan yang ditemukan dan metode
                    penyelesaian/perbaikannya.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-solid fa-unlock-keyhole" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Phishing Simulation</h3>
                  <p>
                    Dengan melakukan Simulasi Phishing, literasi keamanan yang
                    rendah atau kerentanan keamanan pada SDM yang berisiko
                    diserang dapat diidentifikasi, dan mereka bisa segera
                    memperoleh pelatihan yang tepat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end work */}
      {/* start about */}
      <div id="about" className="section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-xs-11 wow fadeInLeft"
              data-wow-delay="0.9s"
            >
              <h2>ABOUT ARHAMINER</h2>
              <h4>DESIGNER &amp; DEVELOPER</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet.
              </p>
            </div>
            <div
              className="col-md-6 col-xs-11 wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <span className="text-top">
                Web Design <small>95%</small>
              </span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                />
              </div>
              <span>
                Mobile Apps <small>80%</small>
              </span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                />
              </div>
              <span>
                SEO Stuffs <small>70%</small>
              </span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                />
              </div>
              <span>
                HTLM5 &amp; CSS3 <small>90%</small>
              </span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* start portfolio */}
      <div id="portfolio" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="wow bounce">PORTFOLIO</h2>
            </div>
            <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img
                  src="images/portfolio-img1.jpg"
                  className="img-responsive"
                  alt="portfolio img"
                />
                <div className="portfolio-overlay">
                  <h4>Web Design</h4>
                  <h5>Author: Cindy</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img
                  src="images/portfolio-img2.jpg"
                  className="img-responsive"
                  alt="portfolio img"
                />
                <div className="portfolio-overlay">
                  <h4>Web App</h4>
                  <h5>Author: Linda</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img
                  src="images/portfolio-img3.jpg"
                  className="img-responsive"
                  alt="portfolio img"
                />
                <div className="portfolio-overlay">
                  <h4>Mobile App</h4>
                  <h5>Author: Kate</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img
                  src="images/portfolio-img4.jpg"
                  className="img-responsive"
                  alt="portfolio img"
                />
                <div className="portfolio-overlay">
                  <h4>Old Artwork</h4>
                  <h5>Author: Catherine</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img
                  src="images/portfolio-img5.jpg"
                  className="img-responsive"
                  alt="portfolio img"
                />
                <div className="portfolio-overlay">
                  <h4>New Animation</h4>
                  <h5>Author: Kathy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end portfolio */}
      {/* start contact */}
      <div id="contact" className="section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <address>
                <p className="contact-title">CONTACT US</p>
                <p>
                  <i className="fa fa-phone" /> 090-080-0760
                </p>
                <p>
                  <i className="fa fa-envelope" /> info@company.com
                </p>
                <p>
                  <i className="fa fa-map-marker" /> 120 Old Walking Street, GL
                  16060
                </p>
              </address>
            </div>
            <div
              className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <form role="form" method="post" action="#">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  id="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <input
                  name="send"
                  type="submit"
                  className="form-control"
                  id="send"
                  defaultValue="SEND ME"
                />
              </form>
            </div>
            <div className="col-md-1 col-sm-1" />
          </div>
        </div>
      </div>
      {/* end contact */}
      {/* start Pentest */}
      <div id="pentest" className="section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <Pentest />
            </div>
          </div>
        </div>
      </div>
      {/* end Pentest */}
      {/* start footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeIn" data-wow-delay="0.9s">
              <p>
                Copyright © 2018 Lavish Personal Profile. Designed by{" "}
                <a rel="nofollow noopener" href="https://templatemo.com">
                  templatemo
                </a>
              </p>
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
}

export default App;
