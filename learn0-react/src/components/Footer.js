import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <p>Copyright &copy; 2022</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
