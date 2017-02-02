import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';

class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [3750, 2469, 8762, 9883, 11786, 3982, 1984],
      badges: [
        { id: 1, url: "/options/badges/steps1.png" },
        { id: 2, url: "/options/badges/steps2.png" },
        { id: 3, url: "/options/badges/streak1.png" },
        { id: 4, url: "/options/badges/streak2.png" }
      ]
    };
    this.getDate = this.getDate.bind(this);
    this.getChartData = this.getChartData.bind(this);
  }

  getDate() {
    const today = new Date().toString();
    return today.substr(0, today.length-24);
  }

  getChartData() {
    return (
      {
        labels: ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'],
        datasets: [
          {
            label: `Steps for the Week of ${this.getDate()}`,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.data
          }
        ]
      }
    );
  }

  render () {
    return (
      <Grid>
        <Row className="show-grid badges">
            <h2>My Badges</h2>
            {
              this.state.badges && this.state.badges.map((badge) => {
                return (
                  <Col md={3} lg={3} className="badge-col" key={badge.id}>
                    <img src={badge.url}></img>
                  </Col>
                );
              })
            }
        </Row>
        <Row className="show-grid graph-failures">
          <Col md={6} lg={6}>
            <Line
              data={this.getChartData()}
            />
          </Col>
          <Col md={6} lg={6}>
            <h2>My Log</h2>
            <div>
              A LIST OF ALL THE TIMES YOU GAVE UP.
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Achievements;
