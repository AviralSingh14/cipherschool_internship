import './CipherMap.css'
import React from 'react';

import CalendarHeatmap from 'react-calendar-heatmap';

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            values: [
                { date: '2022-05-01', count: 4 },
                { date: '2022-05-02', count: 4 },
                { date: '2022-05-03', count: 4 },
                { date: '2022-05-04', count: 4 },
                { date: '2022-05-05', count: 4 },
                { date: '2022-05-06', count: 4 },
                { date: '2022-05-07', count: 4 },
                { date: '2022-05-08', count: 4 },
                { date: '2022-05-11', count: 4 },
                { date: '2022-05-15', count: 4 },
                { date: '2022-05-18', count: 4 },
                { date: '2022-05-22', count: 1 },
                { date: '2022-05-23', count: 4 },
                { date: '2022-05-24', count: 4 },
                { date: '2022-05-25', count: 4 },
                { date: '2022-05-26', count: 4 },
                { date: '2022-05-27', count: 4 },
                { date: '2022-05-28', count: 4 },
                { date: '2022-06-05', count: 4 },
                { date: '2022-06-13', count: 4 },
                { date: '2022-06-14', count: 4 },
                { date: '2022-06-22', count: 3 }, 
                { date: '2022-06-23', count: 4 },
                { date: '2022-06-31', count: 4 },
                { date: '2022-07-02', count: 4 },
                { date: '2022-07-07', count: 4 },
                { date: '2022-07-06', count: 4 },
                { date: '2022-07-12', count: 4 },
                { date: '2022-07-11', count: 4 },
                { date: '2022-07-17', count: 4 },
                { date: '2022-07-31', count: 4 },
                { date: '2022-08-01', count: 4 },
                { date: '2022-08-02', count: 4 },
                { date: '2022-08-03', count: 4 },
                { date: '2022-08-04', count: 4 },
                { date: '2022-08-05', count: 4 },
                { date: '2022-08-06', count: 4 },
                { date: '2023-03-13', count: 4 },
                { date: '2023-03-17', count: 4 },
                { date: '2023-03-20', count: 4 },
                { date: '2023-03-24', count: 4 },
                { date: '2023-03-27', count: 4 },
                { date: '2023-03-28', count: 4 },
                { date: '2023-03-29', count: 4 },
                { date: '2023-03-30', count: 4 },
                { date: '2023-03-31', count: 4 },
                { date: '2023-02-27', count: 4 },
                { date: new Date(2023, 2, 3)}
            ],
            numDays: 365
          }
        this.onClick = this.onClick.bind(this);
    }
    onClick(value) {
        console.log(value);
    }

    render() {
        return (

          <div className='About-Me'>
            <div className='About-Me-Section1'>
                <p className='page-heading'>CIPHER MAP</p>
            </div>
            <div style={{width: "100%", marginBottom: 20}}>
                <CalendarHeatmap
                    endDate={new Date('2023-04-13')}
                    numDays={this.state.numDays}
                    values={this.state.values}
                    onClick={this.onClick}
                />
            </div>
          </div>
        );
    }
}


