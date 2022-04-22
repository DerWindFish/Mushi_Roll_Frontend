import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className='nav-bar'>
<<<<<<< HEAD
        <h3>🍙 Welcome {user.username}!</h3>
        <Link to="/dashboard">🥟 Dashboard</Link>
        <Link onClick={handleLogOut} to="/">
          🍤 Sign Out
        </Link>
			  <Link to="/browse_anime">🍚 Browse Anime</Link>
			  <Link to="/browse_lists">🍘 Browse Lists</Link>
=======
        <h3>Welcome {user.username}!</h3>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
        <Link to="/dashboard">Dashboard</Link>
			  <Link to="/browse_anime">Browse Anime</Link>
			  <Link to="/browse_lists">Browse Lists</Link>
>>>>>>> 8bd5ce0e0576fdde35fe397629a4e7a657e4d78a
        </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )


  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            alt='logo'
            src="https://i.imgur.com/UuiW73M.png"
          />
        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
