import { Moon, Sun } from 'lucide-react'

const ThemeController = () => {
  return (
    <>
      <label className='flex items-center justify-end cursor-pointer gap-2'>
        <span className='label-text'>
          <Sun className='w-5 h-5' />
        </span>
        <input
          type='checkbox'
          value='dark'
          className='toggle theme-controller'
        />
        <span className='label-text'>
          <Moon className='w-5 h-5' />
        </span>
      </label>
    </>
  )
}

export default ThemeController
