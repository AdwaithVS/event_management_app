import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*CV7GJpC_6QOnouTP" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>JoyFest Events</h3>
                    <p>To create and cherish joyful memories!</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Upto 20% off on weddings!</h5>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://cdn.cherishx.com/uploads/1654522839_original.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Make your birthdays memorable!</h5>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://watermark.lovepik.com/photo/20211122/large/lovepik-concert-music-festival-passionate-stage-atmosphere-picture_500730236.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Concerts at Your Fingertips!</h5>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card bg-info-subtle">
              <div className="card-body text-center">
                <h2>Who are we?</h2>
                <p><b>JoyFest Events</b> is an event management company. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facilis nemo aliquid? Alias ad, ducimus nostrum obcaecati id fugiat sapiente dolorum, numquam quas incidunt maxime reprehenderit cumque velit corrupti!
                  Sed asperiores eaque rerum! Exercitationem voluptate excepturi eos mollitia quis minus, unde porro, inventore ad enim asperiores natus, vero esse quidem! Dolor quo tempore officia voluptates facere tenetur sint nisi?
                  Aliquid est sint voluptatum aut, inventore nam! Quaerat error culpa ut aspernatur modi, illo natus suscipit, tempore magnam sunt mollitia? Non corporis eos est modi maxime nam magni quod perspiciatis.</p>
                  <a href="#"><button className="btn btn-primary">See more!</button></a>
              </div>
            </div>

          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card bg-info-subtle">
              <div className="card-body text-center">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h4>Events we manage</h4>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.jpg?s=612x612&w=0&k=20&c=fTlNejRdY7dkvk742auNgI3j6Ve9UqqWSnb3QJ-D2gw=" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Wedding Ceremony</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Concerts</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://images.unsplash.com/photo-1625649611137-df49dc542f6a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Birthday Party</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h4>...and many more!</h4>
                    <p>Check out all services that we offer. <a href="#">Click Here!</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
