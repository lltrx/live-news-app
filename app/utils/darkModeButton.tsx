'use client'
import {useTheme} from 'next-themes'
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import {useEffect, useState} from 'react'

function darkModeButton() {
     const [mounted, setMounted] = useState(false)
     const {theme, setTheme,  systemTheme} = useTheme()

     useEffect(() => setMounted(true), [])

     if (!mounted) return null

     const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
     {
           currentTheme === 'dark' ? (
                    <SunIcon
                    className="h-8 w-8 cursor-pointer text-yellow-500"
                    onClick={() => setTheme('light')}
                    />
               ) : (
                    <MoonIcon
                    className="h-8 w-8 cursor-pointer text-gray-900"
                    onClick={() => setTheme('dark')}
                    />
               )
     }
    </div>
  )
}

export default darkModeButton