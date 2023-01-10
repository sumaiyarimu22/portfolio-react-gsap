import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <h2>
          Suma<span>i</span>ya
        </h2>
        <h2>
          Ri<span>m</span>u
        </h2>
      </div>

      <hr />

      <div className="row">
        <span>React.js developer</span>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          view Resume
        </a>
        <a
          href="mailTo:sumaiyarimu22@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send Email
        </a>
        <Link to="/contact">Contact Me</Link>
      </div>

      <hr />

      <div className="row">
        <Link to="/about" className="box about">
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2>Aspiring</h2>
        <Link to="/about" className="box projects">
          <span>projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      <div className="row">
        <h2>
          Rea<span>c</span>t.js dev<span>el</span>oper
        </h2>
      </div>

      <hr />

      <div className="row">
        <h2>Based</h2>
        <Link to="/about" className="box skills">
          <span>skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>in Bangladesh</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
