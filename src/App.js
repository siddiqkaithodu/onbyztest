import './App.css';
import logo from './images/onbyz logo.png';
import logo2 from './images/on logo.png';
import reactLogo from './images/react_.png';
import wooCommerceLogo from './images/woo commerce.png';
import wordpressLogo from './images/word press.png';
import magnetoLogo from './images/magento.png';
import logos1 from './images/logos 1.jpg'
import logos2 from './images/logos 2.jpg'
import logos3 from './images/logos 3.jpg'
import logos4 from './images/logos 4.jpg'
import logos5 from './images/logos 5.jpg'
import logos6 from './images/logos 6.jpg'
import logos7 from './images/logos 7.jpg'
import logos8 from './images/logos 8.jpg'
import logos9 from './images/logos 9.jpg'
import logos10 from './images/logos 1.jpg'
import jpg1 from './images/1.jpg'
import jpg2 from './images/2.jpg'
import jpg3 from './images/3.jpg'
import jpg4 from './images/4.jpg'
import img1 from './images/img 1.jpg'
import img2 from './images/img 2.jpg'
import img3 from './images/img 3.jpg'
import img4 from './images/img 4.jpg'
import img5 from './images/img 5.jpg'
import img6 from './images/img 6.jpg'
import img7 from './images/img 7.jpg'
import img8 from './images/img 8.jpg'
import img9 from './images/img 9.jpg'
import img10 from './images/img 10.jpg'
import img11 from './images/img 11.jpg'
import img12 from './images/img 12.jpg'
import img13 from './images/img 13.jpg'
import img15 from './images/img 15.jpg'
const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Wall />
    <About />
    <Footer />
  </div>
);
const About = () => (
  <div className="about">
    <ServiceImages logo={img15} />
    <div>
      <h5>Discover,Design, Do is what we live by</h5>
      <h4>With "Discover, Design, Do" as our mantra, we uncover hidden opportunities that others might overlook.
        Embracing the philosophy of "Discover, Design, Do," we thrive on innovative solutions to complex challenges.
        Our workflow revolves around "Discover, Design, Do," ensuring a comprehensive and effective approach.
        "Discover, Design, Do" encapsulates our commitment to continuous learning, creative thinking, and decisive action.
        In all our endeavors, we adhere to the three-fold approach of "Discover, Design, Do," making our projects truly exceptional.
        Through the lens of "Discover, Design, Do," we map out the blueprint for success in every venture.
        Our success story is built upon the strong foundation of "Discover, Design, Do," fostering excellence at every stage.
        Innovation flourishes when guided by "Discover, Design, Do," inspiring us to reshape industries.
        With "Discover, Design, Do" at our core, we transform ideas into reality, leaving a lasting impact.</h4>
    </div>
  </div>
);
const Footer = () => (
  <footer className="footer">
    <h1>Lets Get Web-sy</h1>
    <p>Onbyz is a leading provider of web design and development services. We offer a wide range of solutions. Contact us today for more information on how we can help you grow your business online!</p>
    <Roundedbutton which_color="black" text="Contact US" />
    {/* bottom right side logo */}
    <img src={logo2} className='logo-right' alt="Onbyz Logo" />
    <span style={{ paddingTop: '1em' }}>&copy; 2023 Onbyz</span>

  </footer>
);

const Wall = () => (
  <>
    <div className="image-wall">
      <div class="side">
        <h1> Explore our Diverse portfolio of successful projects</h1>
        <p className='para'> Whether you're looking to streamline your operations, expand your digital presence, or fortify your cybersecurity, we're here to help you navigate the ever-evolving digital landscape. Join us on the journey to harness the power of technology and transform your business.
        </p>
        <div className="wall flex-inline">
          <Roundedbutton which_color="black" text="Checkout Now" />
        </div>
        <div>
        </div>
      </div>
    </div>
    <div className='image-wall horizontal'>
      <GridImages />
      <Forms />
    </div>
    {/* <div className="side-img">
    <ServiceImages logo={img13} />
    </div> */}
  </>
);
const Forms = () => (
  <div className="form">
    <h1>Get a Website That Works</h1>
    <form>

      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Company" />
      {/* Tick box*/}
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I agree to the terms and conditions</label><br />
      <Roundedbutton which_color="black" text="Submit Now to Connect" />

    </form>
  </div>
);
const GridImages = () => {
  const imageList = [
    { url: img1, className: 'image-large' },
    { url: img12, className: 'image-medium' },
    { url: img4, className: 'image-small' },
    { url: img2, className: 'image-small' },
    { url: img6, className: 'image-small' },
    { url: img11, className: 'image-small' },
    { url: img3, className: 'image-small' },
    { url: img7, className: 'image-small' },
    { url: img8, className: 'image-small' },
    { url: img9, className: 'image-small' },
    { url: img10, className: 'image-small' },
    { url: img5, className: 'image-small' },
  ]
  return (
    <div className="image-grid">
      {imageList.map((image, index) => (
        <img
          key={index}
          className={`image-item ${image.className}`}
          src={image.url}
        />
      ))}
    </div>
  );
}

const Main = () => (
  <main className="main">
    <div className="main flex-inline">
      <ServiceImages logo={logos1} />
      <ServiceImages logo={logos2} />
      <ServiceImages logo={logos3} />
      <ServiceImages logo={logos4} />
      <ServiceImages logo={logos5} />
      <ServiceImages logo={logos6} />
      <ServiceImages logo={logos7} />
      <ServiceImages logo={logos8} />
      <ServiceImages logo={logos9} />
      <ServiceImages logo={logos10} />
    </div>
    <h1 className='main flex-inline'>Empower your online presence with our Web Solutions</h1>
    <h4 className='main flex-inline'> We provide top-notch services to our clients.Our team is dedicated to delivering exceptional results.
      Customer satisfaction is our top priority.
      We offer a wide range of services tailored to your needs.
      We are a team of experienced professionals who can help you with any project.
      Our goal is to provide the best possible service at an affordable price.
      Contact us today for more information on how we can help you grow your business online!

    </h4>
    <div className="cards">
      <Card logo={jpg1} heading="React Development" text="we believe in pushing boundaries and creating solutions that drive digital transformation. " />
      <Card logo={jpg2} heading="Wordpress Development" text="Our goal is to provide the best possible service at an affordable price." />
      <Card logo={jpg3} heading="Your Needs are Top" text="Our dedication to staying at the forefront of technology trends ensures that we deliver solutions that not only meet but exceed our clients' expectations" />
      <Card logo={jpg4} heading="Virtualization" text="As a socially responsible company, we are committed to giving back to the community. Through initiatives like tech education programs," />
    </div>
    <div className="main flex-inline-center">
      <Roundedbutton which_color="black" text="Get a Free Consultation" />
      <Roundedbutton which_color="#6b10cb" text="Connect with thousands of clients" />
    </div>
  </main>
);


const Header = () => (
  <header className="header">
    <img src={logo} className='logo' alt="Onbyz Logo" />
    <p>We create Websites and Website Applications</p>
    <span>We are a group of experienced enthusiasts who can work with clients for any need.</span>
    <br />
    <span>Our team is ready to work with you to create a website that will meet your needs and expectations.</span>
    <br />
    <div className="header flex-inline">
      <Roundedbutton which_color="black" text="Get a Free Consultation" />
      <Roundedbutton which_color="rgba(59, 41, 224, 0.5)" text="Connect with thousands of clients" />
    </div>
    <div className="header flex-inline">
      <ServiceImages logo={reactLogo} />
      <ServiceImages logo={wooCommerceLogo} />
      <ServiceImages logo={wordpressLogo} />
      <ServiceImages logo={magnetoLogo} />
    </div>
  </header>
);
const Card = ({ logo, heading, text }) => (
  <div className="card">
    <img src={logo} alt="Service Logo" />
    <h2>{heading}</h2>
    <p>{text}</p>
  </div>
);
const Roundedbutton = ({ which_color, text }) => (
  <button className="rounded_button" style={{ backgroundColor: which_color }}>{text}</button>
);

const ServiceImages = ({ logo }) => (
  <img src={logo} alt="Service Logo" />
);

export { App };
