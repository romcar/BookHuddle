import React from 'react';
import { DateTime } from 'luxon';

class DateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      month: '',
      time: '',
      year: '',
    };
  }

  componentDidMount() {
    const timeStamp = this.props.time;
    const date = DateTime.fromISO(timeStamp).toFormat('yyyy LLL dd t').split(' ');
    const time = `${date[3]} ${date[4]}`;
    this.setState({
      date: date[2],
      month: date[1],
      time,
      year: date[0],
    });
  }

  render() {
    return (
      <div className="date-panel">
        <p>{this.state.year}</p>
        <h2>{this.state.date}</h2>
        <p>{this.state.month}</p>
        <h6>{this.state.time}</h6>
      </div>
    );
  }
}

export default DateCard;
