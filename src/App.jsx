import './App.css';
import { Provider } from 'react-redux';
import appStore from './redux/appStore.js';
import Body from './components/Body.jsx';

function App() {
  

  return (
    <div>
      <Provider store={appStore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
