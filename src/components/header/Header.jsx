import { NavDesktop } from './navbar component/nav-desktop';
import { NavMobile } from './navbar component/nav-mobile';
import { logo } from '../../assets';

function Header() {
  return (
    <div className='py-2 px-4 top-0 flex justify-between items-center fixed w-full z-10 bg-white border-b-2 border-dotted border-black'>
      <a href="/">
        <img src={logo} alt="sm-logo" className='w-24 h-11 sm:w-48 sm:h-16' />
      </a>
      <div className="flex">
        <NavMobile />
        <NavDesktop />
      </div>
    </div>
  );
}

export default Header;


