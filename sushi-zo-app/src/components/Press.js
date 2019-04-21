import React from 'react'
import PressMedia from './PressMedia'
import './press.css';

const Press = props => {
  return (
    <div className="press" id="pressJump">
      <div className="pressHeader"><h1>Press | Media | Awards</h1></div>
        <div 
          className="mediaContainer">
          <PressMedia title={"2018 | MICHELIN"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"http://www.japanculture-nyc.com/nyc-japanese-restaurants-shine-with-2018-michelin-stars/"}
          />
          <PressMedia title={"2017 | MICHELIN"}
                      text={"One year after opening its door in New York, Sushi Zo NYC was awarded its second Michelin star"}
                      link={"Read More"}
                      url={"http://www.grubstreet.com/2016/11/2017-michelin-stars-nyc.html"}
          />
          <PressMedia title={"2015 | NYC OPENING"}
                      text={"Acclaimed LA Omakase Restaurant 'Sushi Zo' opens in New York"}
                      link={"Read More"}
                      url={"https://ny.eater.com/2015/12/22/10647092/nyc-sushi-zo-opens"}
          />
          <PressMedia title={"2014 | SEPTEMBER"}
                      text={"A Conversation with Sushi Chef Keizo Seki and Architect Kulapat Yantrasast"}
                      link={"Read More"}
                      url={"https://www.ctbites.com/blog/2014/8/21/food-architecture-a-conversation-with-sushi-chef-keizo-seki.html"}
          />
          <PressMedia title={"2013 | LOS ANGELES TIMES"}
                      text={"Saturday Section Page because we are that awesome."}
                      link={"Read More"}
                      url={"https://www.latimes.com/food/la-fo-gold-20131109-story.html"}
          />
          <PressMedia title={"2011 | ZAGAT SURVEY"}
                      text={"Sushi Zo takes the crown with a 29/30 rating."}
                      link={"Read More"}
                      url={"https://la.eater.com/2010/9/22/6718169/zagat-11-released-sushi-zo-takes-the-crown"}
          />
          <PressMedia title={"SUSHI ZO | ZAGAT GUIDE"}
                      text={"Sushi Zo have had positive Zagat ratings since its inception."}
                      link={"Read More"}
                      url={"https://www.zagat.com/r/sushi-zo-new-york"}
          />
          <PressMedia title={"2009 | LA WEEKLY"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"https://latimesblogs.latimes.com/dailydish/2008/10/the-michelin-gu.html"}
          />
        </div>
    </div>
  )
}

export default Press
