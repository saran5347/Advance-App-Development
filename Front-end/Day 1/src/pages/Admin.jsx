import  { useState } from 'react';
import '../assets/css/Admin.css' // Import your CSS file

function Admin() {
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  const toggleSearchForm = () => {
    if (window.innerWidth < 576) {
      setSearchFormVisible(!isSearchFormVisible);
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 576) {
      setSearchFormVisible(false);
    }
    if (window.innerWidth < 768) {
      setSidebarHidden(true);
    } else {
      setSidebarHidden(false);
    }
  };

  window.addEventListener('resize', handleWindowResize);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
        {/* Your sidebar content */}
      </section>

      <section id="content">
        <nav>
          {/* Your navbar content */}
        </nav>

        <main>
          {/* Your main content */}
        </main>
      </section>

      <input type="checkbox" id="switch-mode" hidden onChange={toggleDarkMode} checked={isDarkMode} />
    </div>
  );
}

export default Admin;
