import './index.css';
import Main from './components/Layout/Main';
import ReactGA from 'react-ga';
ReactGA.initialize('G-7GPQ1E859J');
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return <Main />;
}

export default App;
