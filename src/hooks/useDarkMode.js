import { useLocalStorage } from './useLocalStorage'
import { useEffect} from 'react'

export const useDarkMode = (value) => {
  const [ darkModeState, setDarkModeState] = useLocalStorage("darkmode",value);

  useEffect(() => {
      if(darkModeState === true) {
          document.body.classList.add('dark-mode')
      } else {
          document.body.classList.remove('dark-mode');
      }
     
  }, [darkModeState])

  return [darkModeState, setDarkModeState]
}

