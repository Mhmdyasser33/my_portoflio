import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Calender.css';

const Calender = () => {
  return (
    <div className='calender' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      {/* Render GitHub contribution calendar */}
      <GitHubCalendar
        username="Mhmdyasser33" // GitHub username to fetch the calendar data
        blockSize={12} // Size of each contribution block
        blockMargin={5} // Margin between contribution blocks
        fontSize={18} // Font size for day labels
      />
    </div>
  );
}

export default Calender;
