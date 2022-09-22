import {Outlet} from 'react-router-dom';

import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

export default function Root() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
      <Footer/>
      </div>
  )
}
