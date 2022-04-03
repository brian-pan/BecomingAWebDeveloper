import Navbar from "./Navbar";
import Button from "./Button";

const Header = ({ text }) => {
  return (
    <div className="header">
      <Navbar />
      <h1 className="header--title">{text}</h1>
      <Button text="Add" />
    </div>
  );
};

export default Header;
