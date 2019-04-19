import React from 'react'
import PressMedia from './PressMedia'
import './press.css';

const Press = props => {
  return (
    <div className="press" id="press">
      <div className="pressHeader"><h1>Press | Media | Awards</h1></div>
        <div 
          className="mediaContainer">
          <PressMedia title={"2018 | Michelin"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"http://www.japanculture-nyc.com/nyc-japanese-restaurants-shine-with-2018-michelin-stars/"}
          />
          <PressMedia title={"2017 | Michelin"}
                      text={"One year after opening its door in New York, Sushi Zo NYC was awarded its second Michelin star"}
                      link={"Read More"}
                      url={"http://www.grubstreet.com/2016/11/2017-michelin-stars-nyc.html"}
          />
          <PressMedia title={"2015 | NYC Opening"}
                      text={"Acclaimed LA Omakase Restaurant 'Sushi Zo' opens in New York"}
                      link={"Read More"}
                      url={"https://ny.eater.com/2015/12/22/10647092/nyc-sushi-zo-opens"}
          />
          <PressMedia title={"2014 | September"}
                      text={"A Conversation with Sushi Chef Keizo Seki and Architect Kulapat Yantrasast"}
                      link={"Read More"}
                      url={"https://www.ctbites.com/blog/2014/8/21/food-architecture-a-conversation-with-sushi-chef-keizo-seki.html"}
          />
          <PressMedia title={"2013 | LOS ANGELES TIMES"}
                      text={"Saturday Section Page because we are that awesome."}
                      link={"Read More"}
                      url={"https://www.latimes.com/food/la-fo-gold-20131109-story.html"}
          />
          <PressMedia title={"LOS | ANGELES MAGAZINE"}
                      text={"TOP 15 SUSHI RESTAURANTS Michelin star."}
                      link={"Read More"}
                      url={"http://google.com"}
          />
          <PressMedia title={"2012 | LA WEEKLY"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"http://google.com"}
          />
          <PressMedia title={"2011 | ZAGAT SURVEY"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"http://google.com"}
          />
          <PressMedia title={"29 POINT FOOD RATING"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"http://google.com"}
          />
          <PressMedia title={"2010 | NEW ZAGAT GUIDE"}
                      text={"Sushi Zo NYC have been awarded a Michelin Star."}
                      link={"Read More"}
                      url={"http://google.com"}
          />
        </div>
    </div>
  )
}

export default Press
