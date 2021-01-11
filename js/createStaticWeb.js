const createStaticWeb = ({ portfolio }) => {
  //just use the MERN template for now
  return (
    `
       <div class="MERN" style="grid-template-columns: repeat(1, 1fr) !important;">
      <div class="MERN-element">
  <button type="button" class="btn btn-primary w-100 btn-lg">Mini Social Network</button>
  <!-- carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" >
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../images/staticWeb/portfolio1.png" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../images/staticWeb/portfolio2.png" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../images/staticWeb/portfolio3.png" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- description -->
  <div class="MERNProjectDescription">
  <h4>Motivation</h4>
  <ul>
    <li>This is this portfolio.</li>
    <li>All the features in this are powered by just Javascript</li>
    <li>The front page is build with SASS to generate all the blinking stars</li>
    <li>The email section is powered by Emailjs since this is only a static web</li>
  </ul>
    <h4>Build by</h4>
    <ul>
      <li>Javascript</li>
      <li>SASS</li>
      <li>Bootstrap4</li>
      <li>Emailjs</li>
    </ul>
  </div>

  <!-- button -->
  <button type="button" class="btn btn-primary w-100"><a href="https://github.com/Dom119/portfolio"
      target="blank">Visit Github Repo</a></button>
</div>
      </div>
    `
  )
}

export default createStaticWeb