import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import MultiBlogApp from './MultiBlogApp'

export default function DarkBlogApp() {
  const [dark, setDark] = useState(() => localStorage.getItem('north-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', dark)
    localStorage.setItem('north-theme', dark ? 'dark' : 'light')
  }, [dark])

  return <><MultiBlogApp/><button className="theme-toggle" onClick={() => setDark(value => !value)} aria-label={dark ? 'Use light mode' : 'Use dark mode'} title={dark ? 'Use light mode' : 'Use dark mode'}>{dark ? <Sun size={18}/> : <Moon size={18}/>}<span>{dark ? 'Light' : 'Dark'}</span></button></>
}
