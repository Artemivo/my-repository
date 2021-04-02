import React from 'react'
import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import AboutBlock from './containers/AboutBlock'
import FooterContainer from './containers/FooterContainer'
import HeaderApp from './containers/HeaderApp'
import TasteBlock from './containers/TasteBlock'
import Routes from './Routes';

const store = createStore()

function CrackerApp() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>

    )
}

export default CrackerApp
