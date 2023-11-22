import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='py-14  lg:py-20 px-12 lg:px-36'>
      <nav className='text-2xl z-20 relative text-stone-300'>
        <ul className='flex gap-12'>
          <Link to={`/`}>
            <li>Home</li>
          </Link>
          <Link to={`/about`}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
