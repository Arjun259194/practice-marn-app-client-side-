import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-1 py-2 bg-stone-200 dark:bg-stone-800'>
      <div className="flex items-center text-center">
        <img className='w-12 mx-2' src={logo} alt="logo" />
        <h1 className='text-stone-800 dark:text-stone-200 font-bold text-3xl'>
          <span className='text-purple-600'>F</span>
          ake
          <span className='text-purple-600'>S</span>
          tagram
        </h1>
      </div>
    </header>
  )
}

export default Header
