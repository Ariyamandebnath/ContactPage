import styles from "./Navbar.module.css";


function Navbar() {
  return (
    <nav className={` ${styles.navigation} container`} >
          <div className="logo">
              <img src="/images/file.jpg" alt="" />
          </div>

          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          
    </nav>
  )
}

export default Navbar;