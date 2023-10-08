import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";






const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  console.log(user)

  const handleLogOut = () =>{
    logout().then()
  }
  const navLinks = <>
    <li><p><NavLink className="font-semibold underline text-lg hover:text-white" to="/">Home</NavLink></p></li>

    <li><NavLink className="font-semibold underline text-lg hover:text-white" to="/about">About Us</NavLink></li>
    <li><NavLink className="font-semibold underline text-lg hover:text-white" to="/contact">Contact</NavLink></li>

  </>

  return (
    <div>


      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className=" normal-case text-xl font-bold">Educational and Training Events</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.email ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-ghost">{user.displayName}</button>
              </li>

              <li><button onClick={handleLogOut} className="btn btn-ghost">Logout</button></li>
            </ul>
            </div>
            :
            <Link to="/login"><button className="btn bg-black text-white hover:text-black">Login</button></Link>
        
          }

</div>
      </div>
    </div>
  );
};

export default Navbar;