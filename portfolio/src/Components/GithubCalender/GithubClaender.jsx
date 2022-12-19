import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./Github.css"


export const GithubCalender = () => {

  return (
    <div className='GithubMain'>
        <h1>Github Calender</h1>
        <GitHubCalendar style={{width:"100%", margin:"auto"}} username="devender0014" />
    </div>
  )
}
