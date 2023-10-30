import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const d = new Date();
  return (
    <div className='headerStype'>
      <div className='itemStype'>
        <Link className='item-home' to='/'>
          Context Api&nbsp;
        </Link>
        <p className='item-home'>{d.getFullYear()}</p>
      </div>
      <div className='itemStype'>
        <Link className='item' to='/'> Home </Link>
        <Link className='item' to='/add'> Add Expense </Link>
        <Link className='item' to='/feedback'> Feedback </Link>
        <Link className='item' to='/about/1/rabin'> About </Link>
        <Link className='item' to='/notfound'> Lost </Link>
      </div>
    </div>
  );
};

export default Header;
