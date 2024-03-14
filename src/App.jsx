import { AppRouter } from './router/AppRouter';
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-C56K2TNNEY'; // ID ga
ReactGA.initialize(TRACKING_ID);

export const App = () => {

  return(
    <>
      <AppRouter />
    </>
  )
 
    
}

 
