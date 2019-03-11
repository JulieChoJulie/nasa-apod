import React, {Component} from 'react';
import Template from './components/Viewer/Template';
import SpaceNavigator from './components/SpaceNavigator/SpaceNavigator';

class App extends Component {
    render() {
        return (
            <div>
              <Template spaceNavigator={<SpaceNavigator />}/>
            </div>
        );
    }
}

export default App;