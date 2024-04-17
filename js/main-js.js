window.onload = function (e) {
  $(document).ready(function () {
    $('.jumbotron').append(`
    <div class="canvas">
            <div><h2 style="font-size:1.4rem;font-weight:600;margin:15px 0px">17-18<sup>th</sup> January 2025</h2>
            <h1 style="font-size: 2rem;font-weight:700;margin:15px 0px">2<sup>nd</sup>  International Conference on Computational<br>Research and Data Analytics  (ICCRDA-2025)</h1>
            <h2 style="font-size:1.4rem;font-weight:600;margin:15px 0px">Duy Tan University, Da Nang,Vietnam</h2>
            <p id="demo" style="font-size:1.6rem;font-weight:700"></p>
            <h1 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase">ICCRDA 2025 will be jointly organsied by School of Open Learning, University of Delhi and
            Shaheed Rajguru College of Applied Sciences, University of Delhi</h2>
            <a href="Registrations.html" class="btn btn-primary ">Register Now</a>
            </div>
            <div>
            <img src="../duytan.png" alt="Duy Tan" width="200" height="200" hspace= "15" class="img-fluid top_image">
            <img src="../du.jpg" alt="DU" width="200" height="200" hspace= "15" class="img-fluid top_image">
            <!--<img src="gallery/springer.png" alt="Springer" width="200" height="200" hspace= "15" class="img-fluid top_image">--!>
            </div>
            
        </div>
    `);

    $('.footer').append(`
        <div class="container">
                  <div class="row">
                  <div class="col-4 offset-1 col-sm-2">
                          <h5> <span class="fa fa-link"></span> Links</h5>
                          <ul class="list-unstyled">
                              <li><a href="index.html" class="foot-link">Home</a></li>
                              <li><a href="Registrations.html" class="foot-link">Registrations</a></li>
                              <li><a href="spon_sorship.html" class="foot-link">Sponsorship</a></li>
                              <li><a href="downloads.html" class="foot-link">Downloads</a></li>
                              <li><a href="call_for_papers.html" class="foot-link">Call for Papers</a></li>
                              <li><a href="important_dates.html" class="foot-link">
                              Important Dates</a></li>
                              <li><a href="#" class="foot-link">
                              CMT portal</a></li>
                          </ul>
                      </div>
                      <div class="col-7 col-sm-5 text-center ">
                          <h5> <span class="fa fa-map-marker"></span> Address</h5>
                          <address class="address">
                        <br>
                        <!--<i class="fa fa-phone"> &nbsp;: +</i> <br>--!>
                        <!--<i class="fa fa-fax"> : +</i> <br>--!>
                        <i class="fa fa-envelope fa-lg">  : <a href="mailto:iccrda.congress@gmail.com" class="foot-link">iccrda.congress@gmail.com</a></i>
                     </address>
                      </div>
                      <div class="col-12 col-sm-4 align-self-center">
                          <div class="text-center">
                              <h5 class="text-center mb-4">Social Media</h5>
                              <a class="btn btn-social-icon btn-facebook mr-2 foot-icon" href="#"><i class="fa fa-facebook fa-lg"></i></a>

                              <a class="btn btn-social-icon btn-linkedin mr-2 foot-icon" href="#"><i class="fa fa-linkedin fa-lg"></i></a>

                              <a class="btn btn-social-icon btn-twitter mr-2 foot-icon" href="#"><i class="fa fa-twitter fa-lg"></i></a>
                              
                              <a class="btn btn-social-icon bg-light text-primary mr-2 foot-icon" href="mailto:icicc.editor@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
                          </div>
                      </div>
                      <!--<div class="row justify-content-center">
                        <div class="col-auto">
              
                      <p class="footer_p_i_h2_a footer_p_i_a">Copyright © Intelligent Communication and Computational Research Laboratory|<a href="##"> All Rights Reserved | </a></p>
                      
                          </div>
                          </div>--!>
                    </div>
                 </div>
              </div>
        `);


    $('.navbar').append(`
        <button type="button"class="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse" id="Navbar" style="justify-content: center;">
                      <ul class="nav navbar-nav" style="width: 80%;justify-content: space-evenly;">
                        <li class="nav-item">
                          <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              About
                            </a>
                            <div class="dropdown-menu sm-menu text-white">
                            <a class="dropdown-item" href="about_iccr_da.html">About University</a>
                            <!--<div class="dropdown-divider"></div>-->
                              <!--<a class="dropdown-item" href="about_institute.html">About Institute</a>-->
                            </div>
                          </li>
                          <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              Papers
                            </a>
                            <div class="dropdown-menu sm-menu">
                              <a class="dropdown-item" href="call_for_papers.html">Call For Papers</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="paper_submission.html">Paper Submission</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="special-session.html">Call For Special Sessions</a>
                            </div>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="Registrations.html">Registration</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link text-white" href="important_dates.html">Important Dates</a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="publications.html">Publications</a>
                          </li>
                        <li class="nav-item dropdown dmenu">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                          Committee
                        </a>
                        <div class="dropdown-menu sm-menu">
                          <a class="dropdown-item" href="steering_committee.html">Steering Committee</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="Advisory_committee.html">Advisory Committee</a>
                           <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="Technical_committee.html">Technical Committee</a>
                
                        </div>
                        
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white " href="conference_venue.html">Conference Venue</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href="downloads.html">Downloads</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link text-white" href="prevconf.html">Previous Conference (ICCRDA 2020)</a>
                    </li>
                      <!-- <li class="nav-item">
                      <a class="nav-link text-white" href="Gallary.html">Gallery</a>
                    </li> -->
                  <!--    <li class="nav-item">
                        <a class="nav-link text-white" href="spon_sorship.html">Sponsorship</a>
                      </li>-->
                      
                      <!-- <li class="nav-item">
                      <a class="nav-link text-white" href="#">Accommodation</a>
                    </li> -->
                    <!--  <li class="nav-item dropdown dmenu">
                      <a class="nav-link text-white" href="session-1.html">
                      Special Sessions
                    </a>
                  <!--  <div class="dropdown-menu sm-menu">
                      <a class="dropdown-item" href="/gallery/Session1.pdf">Session 1</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Session 2</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Session 3</a>
              
                    </div>-->
                   <!--   <div class="col col-12 col-lg-6 col-md-4">
          <a href="/gallery/Session 1.pdf"
              target="_blank"><button class="btn" style="width:100%;margin-bottom:1px;">Session 1
                 <i class="fa fa-download"></i></button></a>
  
        
  
        </div>-->
                  </li> -->
                      </ul>
                    </div>
        `);
  });
}
// Set the date we're counting down to
var countDownDate = new Date("Jan 17, 2025 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Days " + ":" + hours + "Hours " + ": "
    + minutes + "Min" + ": " + seconds + "Sec";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// scroll to top
document.addEventListener("DOMContentLoaded", function (event) {

  let offset = 50;
  let circleContainer = document.querySelector(".circle-container");
  let circlePath = document.querySelector('.circle-container path');
  let pathLength = circlePath.getTotalLength();
  circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
  circlePath.style.strokeDasharray = pathLength;
  circlePath.style.strokeDashoffset = pathLength;
  circlePath.getBoundingClientRect();
  circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  let updateLoader = () => {

    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let height = docHeight - winHeight;
    let progress = pathLength - (scrollTop * pathLength / height);
    circlePath.style.strokeDashoffset = progress;

    if (scrollTop > offset) {
      circleContainer.classList.add("active");
    } else {
      circleContainer.classList.remove("active");
    }

  }

  circleContainer.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.onscroll = () => {
    updateLoader();
  }

  updateLoader();

});
