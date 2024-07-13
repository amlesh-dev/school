import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <div className={styles.NavbarWrap}>
              <span
                className={styles.labels}
                onClick={() => {
                  navigate("/school/home");
                }}
              >
                Home
              </span>

              <span
                className={styles.labels}
                onClick={() => {
                  navigate("/school/admission");
                }}
              >
                Admission
              </span>
              <span
                className={styles.labels}
                onClick={() => {
                  navigate("/school/about");
                }}
              >
                About
              </span>
              <span
                className={styles.labels}
                onClick={() => {
                  navigate("/school/contact");
                }}
              >
                Contact
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
