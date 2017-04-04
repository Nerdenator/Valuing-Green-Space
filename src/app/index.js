/**
 * Created by aaronmcruer on 4/3/17.
 */

import React from 'react';
import {render} from 'react-dom';
import { TopNav } from './components/TopNav';
import { StartMenu } from './components/StartMenu';

class App extends React.Component {

    render() {
        return (
            <div>
                <TopNav/>
                <StartMenu/>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
