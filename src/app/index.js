/**
 * Created by aaronmcruer on 4/3/17.
 */

import React from 'react';
import {render} from 'react-dom';
import { TopNav } from './components/TopNav';

class App extends React.Component {

    render() {
        return (
            <TopNav/>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
