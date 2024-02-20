import React, { createContext, useContext } from 'react';
import './App.css';
import RouteApp from './src/routes';
import { RootStore, store } from './src/store/store';

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider
export const useStore = (): RootStore => useContext(StoreContext)


function App() {
  return (
    <StoreContext.Provider value={store}>
      <RouteApp/>
    </StoreContext.Provider>
  );
}

export default App;
