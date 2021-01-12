const createMERNProjects = () => {
  return (
    `
 <div class="MERN">
  <!-- Project 1 -->
    <div class="MERN-element">
  <button type="button" class="btn btn-primary w-100 btn-lg">Contact Keeper</button>
  <!-- carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" style="filter: invert(100%)">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="images/MERN/contactKeeper1.png" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/contactKeeper2.png" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/contactKeeper3.png" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/contactKeeper4.png" alt="4th slide">
      </div>
    </div>
    <a class="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev" style="filter: invert(100%)">
      <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
      <span class="sr-only ">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"    data-slide="next" style="filter: invert(100%)">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- description -->
  <div class="MERNProjectDescription">
    <h4>Motivation</h4>
    <ul>
      <li>To create a simple MERN app where user can register and login to save their contact details.</li>
    </ul>
    <h4>Front End</h4>
    <ul>
      <li>React</li>
      <li>Context API for state management</li>
      <li>React-Chrome Extension for testing</li>
      <li>React router dom</li>
      <li>Axios for fetching data from back end</li>
      <li>UUID4 for generating ID</li>
    </ul>
    <h4>Back End</h4>
    <ul>
      <li>Nodejs / Express</li>
      <li>mongoose / MongoDB Atlas</li>
      <li>bcryptjs and jsonwebtoken to handle the authentication</li>
      <li>config for storing global variables</li>
      <li>express-validator for validating data received from front-end</li>
      <li>concurrently and nodemon to run the development environment</li>
      <li>API is tested by Postman</li>
      <li>Hosting on Heroku</li>
    </ul>
    <h4>Features</h4>
    <ul>
      <li>Register a new account</li>
      <li>Login with an existing account</li>
      <li>Add a new contact</li>
      <li>Update a contact</li>
      <li>Delete a contact</li>
    </ul>
  </div>

  <!-- button -->
  <button type="button" class="btn btn-outline-primary w-100"><a href="https://github.com/Dom119/React-Contact-Keeper" target="blank" class="text-primary">Visit Github Repo</a></button>
  <button type="button" class="btn btn-primary w-100"><a href="https://react-contact-keeper-dom119.herokuapp.com/" target="blank">View Launch Project</a></button>
</div>

  <!-- ------------------------------Project 2--------------------------------- -->
  
    <div class="MERN-element">
  <button type="button" class="btn btn-primary w-100 btn-lg">Mini Social Network</button>
  <!-- carousel -->
  <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" style="filter: invert(100%)">
      <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="images/MERN/socialNetwork1.png" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/socialNetwork2.png" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/socialNetwork3.png" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/socialNetwork4.png" alt="4th slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/MERN/socialNetwork5.png" alt="5th slide">
      </div>
    </div>
    <a class="carousel-control-prev " href="#carouselExampleIndicators2" role="button" data-slide="prev" style="filter: invert(100%)">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next" style="filter: invert(100%)">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- description -->
  <div class="MERNProjectDescription">

    <h4>Motivation</h4>
    <ul>
      <li>To create a simple Social Network for developers. </li>
      <li>User can register, login, see other developers' profiles, posting and comment / like posts of each other.</li> 
    </ul>
    <h4>Front End</h4>
    <ul>
      <li>React</li>
      <li>Redux for State Management</li>
      <li>React / Redux Chrome Extension</li>
      <li>react-moment for date formatting</li>
      <li>react-router-dom for routing</li>
      <li>uuid4 for generating random id</li>
    </ul>
    <h4>Back End</h4>
    <ul>
      <li>Nodejs / Express</li>
      <li>bcryptjs and jsonwebtoken to handle authentication</li>
      <li>config for storing global variable</li>
      <li>express-validator for validating form data from frond end</li>
      <li>mongoose / MongoDB Atlas</li>
      <li>request for fetching data from database</li>
      <li>concurrently and nodemon for development environment</li>
      <li>API is tested by Postman</li>
      <li>Hosting on Heroku</li>
    </ul>
    <h4>Features</h4>
    User can 
    <ul>
      <li>Register and Login</li>
      <li>Create and Edit profile</li>
      <li>Add Education and Experience</li>
      <li>View other profiles</li>
      <li>Make a post and view other posts</li>
      <li>Comment and like posts</li>
    </ul>
  </div>

  <!-- button -->
  <button type="button" class="btn btn-outline-primary w-100"><a href="https://github.com/Dom119/React-Social-Media" target="blank" class="text-primary">Visit Github Repo</a></button>
  <button type="button" class="btn btn-primary w-100"><a href="https://react-social-network-dom119.herokuapp.com/" target="blank">View Launch Project</a></button>
</div>

</div>
    `
  )
}

export default createMERNProjects