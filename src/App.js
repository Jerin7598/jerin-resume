
import React from 'react';
import './App.css';
import {useState} from 'react'


function App() {


  
  const[home,sethome] = useState(true);
    const [about,setabout] = useState(false);
  const [education,seteducation] = useState(false);
  const [skills,setskills] = useState(false);
  const [contact,setcontact] = useState(false);
  const [project,setproject] = useState(false);


  


  const touchhome=()=>{
  sethome(true);
  setabout(false);
  seteducation(false);
  setskills(false);
  setcontact(false);
  setproject(false);
  
  }

  const touchabout=()=>{
     setabout(true);
     sethome(false);
     seteducation(false);
     setskills(false);
     setcontact(false);
     setproject(false);
   
  }

  const touchskills=()=>{
  setskills(true);
  setabout(false);
  sethome(false);
  seteducation(false);
  setcontact(false);
     setproject(false);
    
  
  }

  const toucheducation=()=>{
    setskills(false);
    setabout(false);
    sethome(false);
    seteducation(true);
    setcontact(false);
       setproject(false);
     
  }

  const touchcontact=()=>{
    setskills(false);
    setabout(false);
    sethome(false);
    seteducation(false);
    setcontact(true);
       setproject(false);
      
  }

  const touchproject=()=>{
    setskills(false);
    setabout(false);
    sethome(false);
    seteducation(false);
    setcontact(false);
       setproject(true);
       
  }

  return (
    <div>
      
       <header className="container">
        <div className="page-header">
          <div className="logo">
           <h2>JERIN</h2>
          </div>
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="mainicon">


            <div className="menu">
              <i className='bx bx-menu'></i>
            </div>


          </label>
           <ul>
            <li><button onClick={touchhome} className="active" style={{ '--navAni': 1 }}>Home</button></li>
            <li><button onClick={touchabout} style={{ '--navAni': 2 }}>About</button></li>
            <li><button onClick={touchskills} style={{ '--navAni': 3 }}>Skills</button></li>
            <li><button onClick={toucheducation} style={{ '--navAni': 4 }}>Education</button></li>
            <li><button onClick={touchcontact} style={{ '--navAni': 5 }}>Contact</button></li>
            <li><button onClick={touchproject} style={{ '--navAni': 6 }}>Projects</button></li>
          </ul>
        </div>
      </header>

      {home&& <section className="container">
        <div className="main">
          <div className="rounding-sec">
            <div className="big-circle">
              <div className="icon-block">

               <a href="https://github.com/Jerin7598"><img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png"
                 
                /></a>
              </div>
              <div className="icon-block">

                <a href="https://www.instagram.com/___vam_pire____?utm_source=qr&igsh=YTdiMTMOYTMxNw==">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png"></img></a>
              </div>
              <div className="icon-block">

               
                <a href="https://www.linkedin.com/in/jerin-s-1919b2227/">
                <img
                  src="indeed.png"
                 
                /></a>
              </div>
              <div className="icon-block">
                <img
                  src="fb.png"
                  alt=""
                />
              </div>
            </div>
            <div className="images">
              <img
                src="jerin.jpg"
                alt=""
                className="img-w"
              />
            </div>
          </div>
          <div className="detail">
            <h3>Hi, I'm</h3>
            <h1>
              <span style={{ color: '#f9532d' }}>Jerin</span> S
            </h1>
            <p>
            I am a motivated and enthusiastic software developer with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack
            </p>
            <button className="bu">Contact Us</button>
          </div>
        </div>
        
      </section>}

{about&& <section>
<div>
  <p className='about'>
  &nbsp;&nbsp;I am a motivated and enthusiastic software developer 
  with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js)
   stack. As a recent graduate, I possess a solid understanding of web development 
   principles and the ability to quickly adapt and learn new technologies. During my
    academic journey, I actively participated in various projects where I gained hands-on
     experience in building dynamic and responsive web applications. My proficiency in 
     front-end development using React.js allows me to create intuitive user interfaces and 
     implement efficient state management. Additionally, my expertise in back-end development 
     with Node.js and Express.js enables me to design and develop robust server-side 
     applications, APIs, and database integrations. I am an effective problem solver and 
     have a keen eye for detail. I enjoy working collaboratively with teams to brainstorm 
     ideas, share knowledge, and deliver high-quality solutions. My strong communication 
     skills allow me to effectively convey complex technical concepts to both technical and 
     non-technical stakeholders. With a passion for continuous learning, I stay up-to-date
      with the latest trends and advancements in the web development field. I am eager to 
      contribute my skills and knowledge to a dynamic organization where I can make a 
      meaningful impact while further enhancing my abilities as a developer. Overall, as a 
      fresh graduate with MERN stack expertise, I bring a strong foundation in web development, a commitment to quality, and a passion for staying at the forefront of technological advancements. I am excited to embark on a challenging and rewarding career in the software development industry.
  </p>
</div>

</section>}

{education&& <section className='container'>


<div className="education">
    <marquee class="a2"><h2 class="r1">Education</h2></marquee>
    
    <p class="a1">Completed HSC from<br></br>

St.Francis Xavier's High School<br></br>
in the year of 2016,<br></br></p>

<p class="a1">Completed SSLC from<br></br>

VKP Higher Secondary School<br></br>
in the year of 2018,<br></br></p>

<p class="a1">Completed BE from<br></br>

Bethlahem Institute of Engineering<br></br>
in the year of 2022.</p>
   

</div>

</section>}


{skills&& <section className='container'>

<div class="skills">
    <marquee class="a2"><h2 class="r1">Skills</h2></marquee>

    <div class="b1">
      <li class="c1">
    <p>Figma</p>
    </li>
    <li class="c1">
    <progress  min="0" max="100" value="75"></progress>
    </li>
    </div>

    <div class="b1">
      <li class="c1">
        <p>HTML</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="90"></progress>
      </li>
      </div>

      <div class="b1">
      <li class="c1">
        <p>CSS</p>
        
      </li>
      <li class="c1">
        <progress min="0" max="100" value="91"></progress>
      </li>
    </div>

    <div class="b1">
      <li class="c1">
        <p>JavaScript</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="90"></progress>
      </li>
    </div>

    <div class="b1">
      <li class="c1">
        <p>ReactJS</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="92"></progress>
      </li>
    </div>

    <div class="b1">
      <li class="c1">
        <p>MongoDB</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="92"></progress>
      </li>

    </div>
     

    </div>

</section>}

{contact&& <section className='container'>
<div class="contact">
    <marquee class="a2"><h2 class="r1">Contact</h2></marquee>
    
    <p className='head'><i class="fa fa-phone" aria-hidden="true"></i>
Phone</p>
<p class="d1">8524839241</p>

<p className='head'><i class="fa fa-envelope" aria-hidden="true"></i>
Email</p>
<p class="d1">jerins750@gmail.com</p>
<p className='head'><i class="fa fa-globe" aria-hidden="true"></i>
Web</p>
<p class="d1"><a class='link' href="https://resume-4dcea.web.app">https://resume-4dcea.web.app</a></p>
<p className='head'><i class="fa fa-map-marker" aria-hidden="true"></i>
Location</p>
<p class="d">4-54c,</p>
<p class="d">Puthukkadu vetti vilai,</p>
<p class="d">Midalakkadu,</p>
<p class="d">Palappallam Post,</p>
<p class="d">Kanniya Kumari District.</p>
</div>
</section>}


{project&& <section className='container'>

<div class="contact">
 
 <marquee class="a2"><h2 class="r1">Projects</h2></marquee>
   <div class="p1">
    <p>Resume</p>
    <a class="link" href="https://resume-4dcea.web.app/">https://resume-4dcea.web.app/</a>
    <p>Flipkart UI design </p>
    <a class="link" href="https://jerin7598.github.io/flipkart-ui-design/" >https://jerin7598.github.io/flipkart-ui-design/</a>
  <p>Showing form element onclick</p>

<a class="link" href="https://jerinrin.github.io/mobi/">https://jerinrin.github.io/mobi/</a>

<p>Calculator</p>

<a class="link" href="https://jerin7598.github.io/calculator/">https://jerin7598.github.io/calculator/</a>

<p>Color Game</p>
<a class="link" href="https://jerin7598.github.io/game/">https://jerin7598.github.io/game/</a>

<p>Emi Calculator</p>
<a class="link" href="https://jerin7598.github.io/emi/">https://jerin7598.github.io/emi/</a>

<p>Blog posting</p>
<a class="link" href="https://jerin7598.github.io/upload-img-and-content/">https://jerin7598.github.io/upload-img-and-content/</a>

<p>Display Table for given number</p>
<a class="link" href="https://jerin7598.github.io/tables/">https://jerin7598.github.io/tables/</a>

<p>Edit profile</p>
<a class="link" href="https://edit-profile-de54e.web.app/">https://edit-profile-de54e.web.app/</a>

<p> Saving Data in Local storage</p>
<a class="link" href="https://local-storage-3b629.web.app/">https://local-storage-3b629.web.app/</a>

<p>Data passing using props</p>
<a class="link" href="https://props-e0223.web.app/">https://props-e0223.web.app/</a>

<p>User details management using MERN</p>
<a class="link" href="https://datainmongo.web.app/">https://datainmongo.web.app/</a>
<p> Managing state with Context api in React </p>
<a class="link" href="https://contextapi-fdb3b.web.app/">https://contextapi-fdb3b.web.app/</a>
<p>User authentication system</p>
<a class="link" href="https://loginpage-fcad6.web.app/">https://loginpage-fcad6.web.app/</a>
 <p>Responsive web design using Bootstrap </p>
 <a class="link" href="https://bootstrap-b1261.firebaseapp.com/">https://bootstrap-b1261.firebaseapp.com/</a>
 </div>
 </div>

</section>}



    </div>
  );
}

export default App;

