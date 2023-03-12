'use client';
import { useEffect } from 'react';
import { FiMoon } from 'react-icons/fi'
import { BsCloudSun } from 'react-icons/bs';

function toggleTheme(evt) {
  var themesList = evt.target.getAttribute('data-toggle-theme');
  if (themesList) {
    var themesArray = themesList.split(',');
    if (document.documentElement.getAttribute('data-theme') == themesArray[0]) {
      if (themesArray.length == 1) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        document.documentElement.setAttribute('data-theme', themesArray[1]);
        localStorage.setItem('theme', themesArray[1]);
      }
    } else {
      document.documentElement.setAttribute('data-theme', themesArray[0]);
      localStorage.setItem('theme', themesArray[0]);
    }
  }
}

function ThemeSwitcher() {
  useEffect(() => {
    [...document.querySelectorAll('[data-toggle-theme]')].forEach((el) => {
      el.addEventListener('click', toggleTheme);
    });

    return () =>
      [...document.querySelectorAll('[data-toggle-theme]')].forEach((el) =>
        el.removeEventListener('click', toggleTheme)
      );
  }, []);

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" data-toggle-theme="winter,black" />
      {/* Sun Icon */}
      <BsCloudSun className="swap-on -current w-5 h-5 text-white dark:text-zinc-900" />
      {/* moon icon */}
      <FiMoon className="swap-off -current w-5 h-5 text-white dark:text-zinc-900" />
    </label>
  );
}

export default ThemeSwitcher;
