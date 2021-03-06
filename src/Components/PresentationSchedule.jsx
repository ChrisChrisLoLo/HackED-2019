import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

const PRESENTATION_SCHEDULE_NUM_COLUMNS = 5;

const presentationSchedule = [
    [
        {
        },
        {
            header: "true",
            room: "ETLC E1 013"
        },
        {
            header: "true",
            room: "ETLC E1 015"
        },
        {
            header: "true",
            room: "ETLC E1 017"
        },
        {
            header: "true",
            room: "ETLC E1 021"
        },
        {
            header: "true",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:00-09:05"
        },
        {
            team: "Team1",
            time: "09:00-09:05",
            room: "ETLC E1 013"
        },
        {
            team: "Team95",
            time: "09:00-09:05",
            room: "ETLC E1 015"
        },
        {
            team: "Team458",
            time: "09:00-09:05",
            room: "ETLC E1 017"
        },
        {
            team: "Team58",
            time: "09:00-09:05",
            room: "ETLC E1 021"
        },
        {
            team: "Team98",
            time: "09:00-09:05",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:05-09:10"
        },
        {
            team: "Team15",
            time: "09:05-09:10",
            room: "ETLC E1 013"
        },
        {
            team: "Team3",
            time: "09:05-09:10",
            room: "ETLC E1 015"
        },
        {
            team: "Team758",
            time: "09:05-09:10",
            room: "ETLC E1 017"
        },
        {
            team: "Team78",
            time: "09:05-09:10",
            room: "ETLC E1 021"
        },
        {
            team: "Team958",
            time: "09:05-09:10",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:10-09:15"
        },
        {
            team: "Team1058",
            time: "09:10-09:15",
            room: "ETLC E1 013"
        },
        {
            team: "Team38",
            time: "09:10-09:15",
            room: "ETLC E1 015"
        },
        {
            team: "Team25",
            time: "09:10-09:15",
            room: "ETLC E1 017"
        },
        {
            team: "Team115",
            time: "09:10-09:15",
            room: "ETLC E1 021"
        },
        {
            team: "Team105",
            time: "09:10-09:15",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:15-09:20"
        },
        {
            team: "Team558",
            time: "09:15-09:20",
            room: "ETLC E1 013"
        },
        {
            team: "Team7",
            time: "09:15-09:20",
            room: "ETLC E1 015"
        },
        {
            team: "Team45",
            time: "09:15-09:20",
            room: "ETLC E1 017"
        },
        {
            team: "Team28",
            time: "09:15-09:20",
            room: "ETLC E1 021"
        },
        {
            team: "Team5",
            time: "09:15-09:20",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:20-09:25"
        },
        {
            team: "Team48",
            time: "09:20-09:25",
            room: "ETLC E1 013"
        },
        {
            team: "Team2",
            time: "09:20-09:25",
            room: "ETLC E1 015"
        },
        {
            team: "Team55",
            time: "09:20-09:25",
            room: "ETLC E1 017"
        },
        {
            team: "Team18",
            time: "09:20-09:25",
            room: "ETLC E1 021"
        },
        {
            team: "Team358",
            time: "09:20-09:25",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:25-09:30"
        },
        {
            team: "Team11",
            time: "09:25-09:30",
            room: "ETLC E1 013"
        },
        {
            team: "Team6",
            time: "09:25-09:30",
            room: "ETLC E1 015"
        },
        {
            team: "Team9",
            time: "09:25-09:30",
            room: "ETLC E1 017"
        },
        {
            team: "Team75",
            time: "09:25-09:30",
            room: "ETLC E1 021"
        },
        {
            team: "Team8",
            time: "09:25-09:30",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:30-09:35"
        },
        {
            team: "Team10",
            time: "09:30-09:35",
            room: "ETLC E1 013"
        },
        {
            team: "Team4",
            time: "09:30-09:35",
            room: "ETLC E1 015"
        },
        {
            team: "Team85",
            time: "09:30-09:35",
            room: "ETLC E1 017"
        },
        {
            team: "Team258",
            time: "09:30-09:35",
            room: "ETLC E1 021"
        },
        {
            team: "Team158",
            time: "09:30-09:35",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:35-09:40"
        },
        {
            team: "Team118",
            time: "09:35-09:40",
            room: "ETLC E1 013"
        },
        {
            team: "Team35",
            time: "09:35-09:40",
            room: "ETLC E1 015"
        },
        {
            team: "Team65",
            time: "09:35-09:40",
            room: "ETLC E1 017"
        },
        {
            team: "Team68",
            time: "09:35-09:40",
            room: "ETLC E1 021"
        },
        {
            team: "Team108",
            time: "09:35-09:40",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:40-09:45"
        },
        {
            team: "Team1158",
            time: "09:40-09:45",
            room: "ETLC E1 013"
        },
        {
            team: "Team88",
            time: "09:40-09:45",
            room: "ETLC E1 015"
        },
        {
            team: "Team858",
            time: "09:40-09:45",
            room: "ETLC E1 017"
        },
        {
            team: "Team658",
            time: "09:40-09:45",
            room: "ETLC E1 021"
        },
    ],
    
];

class PresentationSchedule extends Component {


    presSchedueHeader = {
        color: '#D02120'
    };

    // renderPresentationScheduleItem(item){
    //     if (item.header){
    //         return (
    //         <li style={this.dateHeaderStyle} className="list-group-item" key={item.team}>
    //             <Grid columns={3} divided>
    //                 <Grid.Column>
    //                     <h3><b>{item.team}</b></h3>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h3><b>{item.time}</b></h3>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h3><b>{item.room}</b></h3>
    //                 </Grid.Column>
    //             </Grid>
    //         </li>
    //         );
    //         }
    //     else{
    //         return (
    //         <li className="list-group-item" key={item.team}>
    //         <Grid columns={3} divided>
    //             <Grid.Column>
    //                 <p>{item.team}</p>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <p>{item.time}</p>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <p>{item.room}</p>
    //             </Grid.Column>
    //         </Grid>
    //     </li>
    //         );
    //     }
    // }

    renderPresentationScheduleItem(rows){
        return (
                    <li className="list-group-item">
                    <Grid columns={6} divided>
                        {rows.map(item => this.renderPresentationScheduleItemCol(item))}
                    </Grid>
                </li>
        );
    }

    renderPresentationScheduleItemCol(column){
        if (column.header && column.room){
            return (
                <Grid.Column style={this.presSchedueHeader} >
                    <p><b>{column.room}</b></p>
                </Grid.Column> 
            )
        }
        else if (column.header && column.time){
            return (
                <Grid.Column style={this.presSchedueHeader} >
                    <p><b>{column.time}</b></p>
                </Grid.Column> 
            )
        }
        return (
                <Grid.Column>
                    <p>{column.team}</p>
               </Grid.Column>
        );
    }

    render() {
        return (
            <Grid id="presentationSchedule" style={{
                margin: 0,
                paddingBottom: 40,
            }}
            stackable
            relaxed='very'
            >                
            <div>
                    <Container>
                        <br/>
                        <h1 style={{textAlign: 'center'}}>PRESENTATION SCHEDULE</h1>
                        <br/>
                        <ul className="list-group"> 
                            {presentationSchedule.map(item => this.renderPresentationScheduleItem(item))}
                        </ul>

                    </Container>
                </div>
            </Grid>
        );
    }
}

export default PresentationSchedule;