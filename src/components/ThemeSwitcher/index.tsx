import { useCallback, useState, useEffect, useMemo } from 'react';

import { ReactComponent as MoonIcon } from '~assets/icons/icon-moon.svg';
import { ReactComponent as SunIcon } from '~assets/icons/icon-sun.svg';

import style from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const ThemeIcon = useMemo(() => (isDark ? MoonIcon : SunIcon), [isDark]);

  useEffect(() => {
    document.body.dataset['theme'] = isDark ? 'dark' : 'light';
  }, [isDark]);

  const handleToggle = useCallback(() => {
    setIsDark((preIsDark) => !preIsDark);
  }, []);

  return (
    <button className={style['switcher']} type="button" onClick={handleToggle}>
      <span>{isDark ? 'Dark' : 'Light'}</span>
      <ThemeIcon className={style['icon']} />
    </button>
  );
}

export default ThemeSwitcher;
