import React from 'react'
import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import AboutBlock from './containers/AboutBlock'
import FooterContainer from './containers/FooterContainer'
import HeaderApp from './containers/HeaderApp'
import TasteBlock from './containers/TasteBlock'

const store = createStore()

function CrackerApp() {
    return (
        <Provider store={store}>
        <div className="wrapper">
            <HeaderApp/>
            <TasteBlock/>
            <AboutBlock/>
            <FooterContainer/>
        </div>
        </Provider>

    )
}

export default CrackerApp
