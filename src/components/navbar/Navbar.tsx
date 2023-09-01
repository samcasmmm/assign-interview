import { useState } from 'react';
import { FiBell, FiBookmark, FiMessageSquare } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav>
      <div className={!isOpen ? 'navbar' : 'navbar extended'}>
        <p className='logo'>
          Hacker<span>Job</span>
        </p>
        <ul>
          <li>Find Job</li>
          <li>About</li>
          <li>Applied Job</li>
        </ul>
        <div className='userMenu'>
          <div className='icons'>
            <FiBell />
          </div>
          <div className='icons'>
            <FiBookmark />
          </div>
          <div className='icons'>
            <FiMessageSquare />
          </div>
        </div>
        <div className='toggleMenu' onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
