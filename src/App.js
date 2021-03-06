import React, {Component} from 'react';
import Template from './components/Viewer/Template';
import SpaceNavigator from './components/SpaceNavigator/SpaceNavigator';
import Viewer from './components/Viewer/Viewer';
import moment from 'moment';
import * as api from './lib/api';

class App extends Component {
    state = {
        loading: false,
        maxDate: null,
        date: null,
        url: null,
        mediaType: null,
    };
    getAPOD = async (date) => {
        // if it's loading, then ignore
       if (this.state.loading) return;

       // start the loading status (set false => true)
        this.setState({
            loading: true
        });

        try {
            const response = await api.getAPOD(date);
            // asynchronously allocate and new name
            const { date: retrievedDdate, url, media_type: mediaType} = response.data;

            if(!this.state.maxDate) {
                // no maxDate => set it as the date we just received
                this.setState({
                    maxDate: retrievedDdate
                })
            }

            //setState with the data we received
            this.setState({
                date: retrievedDdate,
                mediaType,
                url
            });
        } catch(e) {
            console.log(e);
        }

        // end the loading status
        this.setState({
            loading: false
        });
    };

    handlePrev = () => {
        const { date } = this.state;
        const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
        console.log(prevDate);
        this.getAPOD(prevDate);
    };

    handleNext = () => {
        const { date, maxDate } = this.state;
        if(date === maxDate) return;

        const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
        this.getAPOD(nextDate);
    };

    componentDidMount() {
        this.getAPOD();
    }

    render() {
        return (
            <div>
              <Template
                  spaceNavigator={<SpaceNavigator onPrev={this.handlePrev} onNext={this.handleNext}/>}
                  viewer={(<Viewer
                      url={this.state.url}
                      mediaType={this.state.mediaType}
                      loading={this.state.loading} />)}
              />
            </div>
        );
    }
}

export default App;