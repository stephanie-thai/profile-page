import './App.css';

import React from 'react';

import {
  useLocation,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import ProjectsScreen from './pages/ProjectsScreen'
import AboutScreen from './pages/AboutScreen'

import allStyles from './styles/globalStyles.module.css';
import gitHubLogo from './assets/GitHub-Mark-Light-32px.png';

function App() {
  let location = useLocation();
  const [projectsActive, setProjectsActive] = React.useState(false);
  const [aboutActive, setAboutActive] = React.useState(false);

  React.useEffect(() => {
    const pathname = location.pathname;
    switch(pathname) {
      case '/projects':
        setProjectsActive(true);
        setAboutActive(false);
        break;
      case '/about':
        setAboutActive(true);
        setProjectsActive(false);
        break;
      default:
        return;
    }
  }, [location]);

  return (
    <div className={allStyles}>
      <nav id={allStyles["navBar"]}>
        <div className={allStyles.navBarContainer}>
          <h1>Stephanie Thai</h1>
          <div className={allStyles.navLinksContainer}>
            <Link className={projectsActive ? allStyles.selectedNavLink : allStyles.navLink} to='/projects'>Projects</Link>
            <Link className={aboutActive ? allStyles.selectedNavLink : allStyles.navLink} to='/about'>About</Link>
          </div>
        </div>
      </nav>
      <div className={allStyles.page}>
        <Routes>
          <Route path='' element={<AboutScreen />} />
          <Route path='/projects' element={<ProjectsScreen />} />
          <Route path='/about' element={<AboutScreen />} />
        </Routes>
      </div>
      <footer>
        <a href="https://github.com/stephanie-thai" className={allStyles.footerLink}>
          <img src={gitHubLogo} alt="GitHub-logo" height="24" width="24" />
          stephanie-thai
        </a>
      </footer>
    </div>
  );
}

export default App;
