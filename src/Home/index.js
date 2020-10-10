import React from "react";
import "./style.css";

export default function Home(){
    return(
<section className="sectionofhome">
  <div className="card bg-dark text-white">
    <img src="/images/front.jpg" className="card-img" alt="..." />
     <div className="card-img-overlay">
      <h5 className="card-title">Front-end Developer</h5>
      <p className="card-text">How To Become Professional Front-end developer?!</p>
      <a href="https://github.com/alaaboody65/number_one" className="bnt btn btn-info">Go github</a>
     </div>
  </div>
<div>

<div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Front-end Developer Road Map 2020
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        What You Need to Know Basics to be a Front-end Developer :
        <br />
        1- HTML .
        <br />
        2- CSS .
        <br />
        3- JavaScript .
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-outline-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          1- HTML + HTML5
        </button>
      </h2>
    </div>

    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      - HTML is the standard markup language for Web pages.
      <br />
      - With HTML you can create your own Website.
      <br />
      - HTML is easy to learn - You will enjoy it!
      </div>
    </div>
  </div>


  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-outline-primary collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          2- CSS + CSS3 
        </button>
      </h2>
    </div>

    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      - CSS is a language that describes the style of an HTML document.
      <br />
      - CSS describes how HTML elements should be displayed.
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header" id="headingFive">
      <h2 className="mb-0">
        <button className="btn btn-outline-info collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
          3- Bootstrap4 
        </button>
      </h2>
    </div>

    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div className="card-body">
      - Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.
    </div>
  </div>
 </div>

  <div className="card">
    <div className="card-header" id="headingFour">
      <h2 className="mb-0">
        <button className="btn btn-outline-warning collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
          4- JavaScript
        </button>
      </h2>
    </div>

    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div className="card-body">
      - JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.      </div>
    </div>
  </div>




 <div className="card">
    <div className="card-header" id="headingSix">
      <h2 className="mb-0">
        <button className="btn btn-outline-info collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
          5- ECMAScript 6 
        </button>
      </h2>
    </div>

    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
      - ECMAScript 6 is also known as ES6 and ECMAScript 2015.
      <br />
      - Some people call it JavaScript 6.
      <br />
      - This chapter will introduce some of the new features in ES6.
    </div>
  </div>
 </div>

 <div className="card">
    <div className="card-header" id="headingSeven">
      <h2 className="mb-0">
        <button className="btn btn-outline-primary collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
          6- Git & Github 
        </button>
      </h2>
    </div>

    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
      <div className="card-body">
      - You should learn git & github because it will help you to upload and save your code and make things easy for you
    </div>
  </div>

 </div>

 <div className="card">
    <div className="card-header" id="headingEight">
      <h2 className="mb-0">
        <button className="btn btn-outline-success collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
          7- Json & Ajax 
        </button>
      </h2>
    </div>

    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
      <div className="card-body">
      AJAX is a developer's dream, because you can:
      <br />
      - Update a web page without reloading the page
      <br />
      - Request data from a server - after the page has loaded
      <br />
      - Receive data from a server - after the page has loaded
      <br />
      - Send data to a server - in the background
      <br />
      JSON:
      <br />
      -  JavaScript Object Notation.
      <br />
      - JSON is a syntax for storing and exchanging data.
      <br />
      - JSON is text, written with JavaScript object notation.
    </div>
  </div>
 </div>

 <div className="card">
    <div className="card-header" id="headingNine">
      <h2 className="mb-0">
        <button className="btn btn-outline-info collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseThree">
        8- React.js 
        </button>
      </h2>
    </div>

    <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
      <div className="card-body">
      - React is a JavaScript library for building user interfaces.
      <br />
      - React is used to build single page applications.
      <br />
      - React allows us to create reusable UI components.
    </div>
  </div>
 </div>
 <div className="portfolio">
            <h2 className="portfolio-title"><span></span> The Best Websites to learn code</h2>
            <ul className="portfolio-list">
            <a href="https://www.edx.org/" target="_blank"><li className="portfolio-item active">edX</li></a>
            <a href="https://developer.mozilla.org/ar/docs/Mozilla"  target="_blank"><li className="portfolio-item">MDN</li></a>
            <a href="https://github.com/"  target="_blank"><li className="portfolio-item">Github</li></a>
            <a href="https://www.w3schools.com/"  target="_blank"><li className="portfolio-item">w3schools</li></a>
            <a href="https://www.udemy.com/"  target="_blank"><li className="portfolio-item">Udemy</li></a>
            <a href="https://www.coursera.org/"  target="_blank"><li className="portfolio-item">Coursera</li></a>
            <a href="https://www.codecademy.com/"  target="_blank"><li className="portfolio-item">Code_cadmey</li></a>
            </ul>
            <div className="box">
                
                <div>
                    <img src="images/edX_Logo_Col_RGB_FINAL.jpg" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://www.edx.org/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>

                <div>
                    <img src="images/mozalia.jpg" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://developer.mozilla.org/ar/docs/Mozilla" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>

                <div>
                    <img src="images/github.png" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://github.com/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>

                <div>
                    <img src="images/qVr_MxvA_400x400.png" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://www.w3schools.com/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>

                <div>
                    <img src="images/coursera-intro-e1509280431491.png" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://www.coursera.org/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/udemy.png" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://www.udemy.com/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>

                <div>
                <img src="images/code-academy.png" alt="" />
                    <p className="overlay">
                        <span>
                         <a href="https://www.codecademy.com/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/fcc-og-1200-social-green.png" alt="" />
                    <p className="overlay">
                        <span>
                        <a href="https://www.freecodecamp.org/" target="_blank">Go Website</a>  
                        </span>
                    </p>
                </div>
                
            </div>
            
        </div>
    
            <div className="drop">
            <div className="container">
                <h2 className="drop-title"><span>Drop </span>Me A line</h2>
                <form action="">
                    <div className="form-input">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <input type="text" className="sub" placeholder="Your Subject" />
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
        </div>

<div className="social-media">
            
            <div className="social face">
                <i className="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
  <div className="footer">
    <p> copyright &copy; 2020 by Abdulrahman <span className="alaa">Alaa</span></p>
  </div>

</div>
</div>
</section>

    );
}
