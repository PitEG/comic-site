import Container from 'react-bootstrap/Container';
import {Outlet} from 'react-router-dom';

import Navigation from './Navigation.jsx';

export default function Root() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
      </div>
  )
}
