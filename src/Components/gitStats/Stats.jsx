import React from 'react';
import GitHubCalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip";
import "./Stats.css";

function Stats() {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;
    
        return contributions.filter((day) => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
    
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

  return (
    <div>
    <section id='stats'>
        <h2 >DAYS I CODE</h2>   
        <div className = 'container__calendar'>

        <GitHubCalendar 
        
        // style={{ margin: "auto" }}
        transformData={selectLastHalfYear}
        username='AmitKuMaurya'
        // blockSize={20}
        // fontSize = {15}
        >
            <ReactToolTip delayShow={10} html/>
        </GitHubCalendar>

            </div>
        <div className='container__stats'>
            <div>
                <img src="https://github-readme-stats.vercel.app/api?username=AmitKuMaurya&theme=default&hide_border=false&include_all_commits=false&count_private=true" alt="" />
            </div>
            <div>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=AmitKuMaurya&theme=default&hide_border=false" alt="" />
            </div>
        </div>

    </section>
    </div>
  )
}

export default Stats