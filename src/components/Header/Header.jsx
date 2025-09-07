import { NavLink } from "react-router-dom";

const Header = () => {
      return (
            <nav style={{'display': 'flex', 'justifyContent': 'space-between',}}>
                  <div>
                        <h3>Login</h3>
                  </div>
      
                 <ul>
                  <NavLink style={{'marginRight': '20px'}} to='/'>Home</NavLink>
                 <NavLink style={{'marginRight': '20px'}}  to='/about'>About Us</NavLink>
                 <NavLink to='/login'>Login</NavLink>
                 </ul>
            </nav>
      );
};

export default Header;