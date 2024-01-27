import { NavDesktop } from './navbar component/nav-desktop';
import { NavMobile } from './navbar component/nav-mobile';
import { logo } from '../../assets';

function Header() {
  return (
    <div className='py-2 top-0 flex justify-between fixed w-full z-10 bg-white border-b-2 border-dotted border-black'>
      <a href="/">
        <img src={logo} alt="sm-logo" className='w-24 h-11 sm:w-48 sm:h-16' />
      </a>
      <NavDesktop />
      <NavMobile />
    </div>
  );
}

export default Header;

