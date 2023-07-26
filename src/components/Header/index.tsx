import { ReactComponent as Logo } from '~assets/icons/icon-hamburger.svg';
import ThemeSwitcher from '~components/ThemeSwitcher';

import style from './Header.module.scss';

function Header() {
  return (
    <header className={style['header']}>
      <div className={style['logo']}>
        <Logo className={style['logo__icon']} />
        <span className={style['logo__text']}>Burger Project</span>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
