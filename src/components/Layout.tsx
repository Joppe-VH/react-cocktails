import { ReactNode } from "react";
import { Link, NavLink } from "react-router";
type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src="/vite.svg" alt="" />
          </Link>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cocktails">Cocktails</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>&copy; 2025 - Syntra Full Stack</footer>
    </>
  );
};
export default Layout;
