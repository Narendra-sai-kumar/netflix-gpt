import './App.css';
import Netflix from './components/Netflix';
import { Provider } from 'react-redux';
import appstore from "./utils/appstore"
function App() {
  return (
    <div>
      <Provider store = {appstore}>
       <Netflix/>
      </Provider>
    </div>
  );
}

export default App;
