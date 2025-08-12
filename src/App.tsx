import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import InternalHeader from './components/InternalHeader/InternalHeader'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Function to get page title based on route
  const getPageTitle = (pathname: string): string => {
    switch (pathname) {
      case '/about-us':
        return 'About Us';
      case '/services':
        return 'Our Services';
      case '/sectors':
        return 'Our Sectors';
      case '/projects':
        return 'Our Projects';
      case '/insights':
        return 'Insights';
      case '/contact-us':
        return 'Contact Us';
      // Add more cases for other pages as needed
      default:
        return '';
    }
  };

  return (
    <div className="App">
      {isHomePage ? <Header /> : <InternalHeader pageTitle={getPageTitle(location.pathname)} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
