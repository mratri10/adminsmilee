import React from 'react';
import {stores, storeContext} from "./store";

export const useStores =()=> React.useContext(storeContext);

export const useStore = <T extends keyof typeof stores>(
    store:T): typeof stores[T] => React.useContext(storeContext)[store];