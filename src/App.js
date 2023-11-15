
import './App.css';
import {useState} from 'react'
function App() {
  const [u,setu]=useState(false);
  const [v,setv]=useState(false);
  const [w,setw]=useState(false);
  const [x,setx]=useState(false);
  const [y,sety]=useState(false)
  
  const touch1=()=>{
    setu (true);
    setv (false);
    setw (false);
    setx (false);
    sety (false);
    
  }
  
  const touch2=()=>{
    setu (false);
    setv (true);
    setw (false);
    setx (false);
    sety (false);
    
  }
  const touch3=()=>{
    setu (false);
    setv (false);
    setw (true);
    setx (false);
    sety (false);
  }
  const touch4=()=>{
    setu (false);
    setv (false);
    setw (false);
    setx (true);
    sety (false);
  }
  const touch5=()=>{
    setu (false);
    setv (false);
    setw (false);
    setx (false);
    sety (true);
  }
  

  
  return (
    <div className="me">
       <div class="center">
        <div class="i">
     <div className="cen">
  <h2 className="a">Resume</h2>
    <h2 className="b">Jerin S</h2>
    <h2 className="c">(Software Developer)</h2>
    </div>
    <div className="img">
    <img src="jerin.jpg" width="100px"></img>
    </div>
    </div>
  </div>
        
    <div>
  
    </div>
   <ul class="total">
    <li class="first">
    <div class="left">
      
      
      <div class="but">
      <button class="button" onClick={touch1}>
      <i class="fa fa-info-circle" aria-hidden="true"></i>
About</button><br></br>

    <button class="button" onClick={touch2}>
    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
Education</button>

<button class="button" onClick={touch3}><i class="fa fa-life-ring" aria-hidden="true"></i>
Skills</button>

<button class="button" onClick={touch4}><i class="fa fa-phone" aria-hidden="true"></i>
Contact</button>

<button class="button" onClick={touch5}><i class="fa fa-file-code-o" aria-hidden="true"></i>
Projects</button>
</div>
   
    </div>
    </li>
   
 <li class="sec">
  {u&& <div className="about" id="about">
    <p className="para">
   &nbsp;&nbsp; I am a motivated and enthusiastic software developer with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack. As a recent graduate, I possess a solid understanding of web development principles and the ability to quickly adapt and learn new technologies.
During my academic journey, I actively participated in various projects where I gained hands-on experience in building dynamic and responsive web applications. My proficiency in front-end development using React.js allows me to create intuitive user interfaces and implement efficient state management. Additionally, my expertise in back-end development with Node.js and Express.js enables me to design and develop robust server-side applications, APIs, and database integrations.
I am an effective problem solver and have a keen eye for detail. I enjoy working collaboratively with teams to brainstorm ideas, share knowledge, and deliver high-quality solutions. My strong communication skills allow me to effectively convey complex technical concepts to both technical and non-technical stakeholders.
With a passion for continuous learning, I stay up-to-date with the latest trends and advancements in the web development field. I am eager to contribute my skills and knowledge to a dynamic organization where I can make a meaningful impact while further enhancing my abilities as a developer.
Overall, as a fresh graduate with MERN stack expertise, I bring a strong foundation in web development, a commitment to quality, and a passion for staying at the forefront of technological advancements. I am excited to embark on a challenging and rewarding career in the software development industry.
    </p>
    </div>
}


{v&&< div className="edu" id="education">
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
    </div>
}
   {w&&<div className="skil" id="skills">
    <div class="skills">
    <marquee class="a2"><h2 class="r1">Skills</h2></marquee>

    <ul class="b1">
      <li class="c1">
    <p>Figma</p>
    </li>
    <li class="c1">
    <progress  min="0" max="100" value="75"></progress>
    </li>
    </ul>

    <ul class="b1">
      <li class="c1">
        <p>HTML</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="90"></progress>
      </li>
      </ul>

      <ul class="b1">
      <li class="c1">
        <p>CSS</p>
        
      </li>
      <li class="c1">
        <progress min="0" max="100" value="91"></progress>
      </li>
    </ul>

    <ul class="b1">
      <li class="c1">
        <p>JavaScript</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="90"></progress>
      </li>
    </ul>

    <ul class="b1">
      <li class="c1">
        <p>ReactJS</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="92"></progress>
      </li>
    </ul>

    <ul class="b1">
      <li class="c1">
        <p>MongoDB</p>
      </li>
      <li class="c1">
        <progress min="0" max="100" value="92"></progress>
      </li>

    </ul>
     

    </div>
   
           
    </div>
        
}

{x&&<div className="con" id="contact">
    <div class="contact">
    <marquee class="a2"><h2 class="r1">Contact</h2></marquee>
    
    <p><i class="fa fa-phone" aria-hidden="true"></i>
Phone</p>
<p class="d1">8524839241</p>

<p><i class="fa fa-envelope" aria-hidden="true"></i>
Email</p>
<p class="d1">jerins750@gmail.com</p>
<p><i class="fa fa-globe" aria-hidden="true"></i>
Web</p>
<p class="d1">project.com</p>
<p><i class="fa fa-map-marker" aria-hidden="true"></i>
Location</p>
<p class="d">4-54c,</p>
<p class="d">Puthukkadu vetti vilai,</p>
<p class="d">Midalakkadu,</p>
<p class="d">Palappallam Post,</p>
<p class="d">Kanniya Kumari District.</p>
</div>


    </div>

}
 {y&& <div className="pro" id="project">

 <div class="contact">
 
 <marquee class="a2"><h2 class="r1">Projects</h2></marquee>
   <div class="p1">
    <p>Flipkart UI design </p>
    <a class="link" href="https://jerin7598.github.io/flipkart-ui-design/" >https://jerin7598.github.io/flipkart-ui-design/</a>
  <p>update user details</p>
<a class="link" href="https://jerinrin.github.io/mobi/">https://jerinrin.github.io/mobi/</a>

<p>Calculator</p>

<a class="link" href="https://jerin7598.github.io/calculator/">https://jerin7598.github.io/calculator/</a>

<p>Color Game</p>
<a class="link" href="https://jerin7598.github.io/game/">https://jerin7598.github.io/game/</a>

<p>Emi Calculator</p>
<a class="link" href="https://jerin7598.github.io/emi/">https://jerin7598.github.io/emi/</a>

<p>upload content and image</p>
<a class="link" href="https://jerin7598.github.io/upload-img-and-content/">https://jerin7598.github.io/upload-img-and-content/</a>

<p>Tables</p>
<a class="link" href="https://jerin7598.github.io/tables/">https://jerin7598.github.io/tables/</a>

<p>Local storage</p>
<a class="link" href="https://local-storage-3b629.web.app/">https://local-storage-3b629.web.app/</a>

<p>add to cart </p>
<a class="link" href="https://props-e0223.web.app/">https://props-e0223.web.app/</a>

<p>User management using MERN</p>
<a class="link" href="https://datainmongo.web.app/">https://datainmongo.web.app/</a>
<p>Context api </p>
<a class="link" href="https://contextapi-fdb3b.web.app/">https://contextapi-fdb3b.web.app/</a>
<p>Login page</p>
<a class="link" href="https://loginpage-fcad6.web.app/">https://loginpage-fcad6.web.app/</a>
 </div>

 </div>
 </div>

}
</li>

 </ul>

    
    </div>

   

    
   
   

    

    
  );
  
}

export default App;
