import Splash from './Splash';
import Welcome, { WELCOME_KEY } from './Welcome';

/** First launch shows the three welcome screens, afterwards the main splash screen. */
const AppEntry = () => {
  let seen = false;
  try { seen = localStorage.getItem(WELCOME_KEY) === '1'; } catch {}
  return seen ? <Splash /> : <Welcome />;
};

export default AppEntry;
