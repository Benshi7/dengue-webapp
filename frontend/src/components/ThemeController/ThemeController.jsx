const ThemeController = () => {
  return (
    <>
      <label className='flex items-end justify-end cursor-pointer gap-2'>
        <span className='label-text'>Current</span>
        <input
          type='checkbox'
          value='dark'
          className='toggle theme-controller'
        />
        <span className='label-text'>Dark</span>
      </label>
    </>
  )
}

export default ThemeController
