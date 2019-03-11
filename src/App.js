import React, {Component} from 'react';
import Template from './components/Viewer/Template';
import SpaceNavigator from './components/SpaceNavigator/SpaceNavigator';
import Viewer from './components/Viewer/Viewer';

class App extends Component {
    render() {
        return (
            <div>
              <Template
                  spaceNavigator={<SpaceNavigator />}
                  // viewer={(
                  //     <Viewer
                  //         url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"
                  //         mediaType="image"/>
                  //         )}
                  viewer={(<Viewer
                      url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
                      mediaType="video" />)}
              />
            </div>
        );
    }
}

export default App;