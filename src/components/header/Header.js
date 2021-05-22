import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const d = new Date();
  return (
    <div className='headerStype'>
      <div className='itemStype'>
        <Link className='item-home' to='/'>
          Expense Tracker
        </Link>
        <p className='item-home'>{d.getFullYear()}</p>
      </div>
      <div className='itemStype'>
        <Link className='item' to='/'>
          Home
        </Link>
        <Link className='item' to='/add'>
          Add
        </Link>
        <Link className='item' to='history'>
          History
        </Link>
      </div>
    </div>
  );
};

export default Header;
