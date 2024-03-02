import './App.css';
import RouteApp from './src/routes';
import { StoreProvider, stores } from './src/store/store';


function App() {

  return (
    <StoreProvider value={stores}>
      <RouteApp/>
    </StoreProvider>
  );
}

export default App;
