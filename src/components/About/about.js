import React  from 'react'
import { Helmet } from 'react-helmet'
import aboutPhoto from '../../img/AboutMePhoto.jpg'

export default function About(){

  return (
    <>
      <Helmet>
        <title>About Me!</title>
      </Helmet>
      <div className ="aboutMePage">
        <img src={aboutPhoto} alt="My wife and I"></img>
        <h1 class="container-content"> Hello all !!</h1>
        <p style={{ paddingTop:'1%',fontSize:'18px' }}class="container-content">My name is Isaac, and the lovely woman who is making me cheese is my wife Sam!</p>
        <p style={{ paddingTop:'1%' }}class="container-content"> We got married in the midst of the 2020 pandemic and let me just say how incredible she is and that life is a living dream because of her. She is the the primary inspiration and creative genius for this blog.</p>
        <p style={{ paddingTop:'1%' }}class="container-content">Currently I am a Software Engineer with YASH Technologies, Inc. where I have been enhancing the Software Delivery Life Cycle with DevOps practices. I also get to work with some pretty cool and exciting technologies.</p>
        <p style={{ paddingTop:'1%' }}class="container-content">Over the last year and a half I have learned some tremendous knowledge that I think could benefit the people in the industry, students in college, or even people just looking to learn something new!</p>
        <p style={{ paddingTop:'1%' }}class="container-content">I wanted to design CoffeeWithCloud after spending an incredible amount of hours in my local coffee shops studying, programming and of course drinking endless cups with Sam. Being able to work from home has given me a ton of creative freedom and ability to create this website, with the help of a few friends.</p>
        <p style={{ paddingTop:'1%' }}class="container-content">I'm hoping this blog will have a lot of wonderful entries, and we can grow a little community.</p>
        <p style={{ paddingTop:'1%' }}class="container-content">Thanks for stopping by, I hope I can help you get farther along in your journey! Grab a seat, let me get you a fresh cup :)</p>

      </div>
    </>
  )
}
