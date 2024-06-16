import styles from "./index.module.scss";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <div className={styles.NavbarWrap}>
              <span>Home</span>
              <span>About</span>
              <span>Admission</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
