import React from 'react'
import NavBar from './NavBar'

const FAQPage = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card text-center bg-info-subtle">
                            <div className="card-body">
                                <h2 className="card-text">FAQs</h2>
                                <p className="card-text">Here are some of the Frequently Asked Questions to us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-info-subtle">
                            <div className="card-body">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Should I create an account?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                How do I book tickets for an event?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Can I get a refund or exchange my tickets for a concert?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                How do I manage my guest list for an event?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                What payment methods are accepted?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                How do I contact customer support?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">You can contact us through our mail <a href="">joyfestcomp@gmail.com</a> or call us on <a href="">+91 22 1234 5678</a>.
                                                <br />Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                                Can I live stream events through the app?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                                How do I find and book vendors for my event?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                                How do I leave a review for an event or vendor?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                                Are there any discounts available for group bookings?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                                                Is my payment information secure?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                                                How can I share event details with my friends?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                                                What should I do if I encounter technical issues with the app/website?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                                                Can I host a private event/party?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFourteen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                                                How do I find transportation information for an event?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFifteen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cupiditate tenetur odit dolorum vitae incidunt quisquam vero maiores magnam saepe voluptatem quas doloremque porro cumque ullam quis accusantium, odio sint.
                                                Praesentium, autem debitis repudiandae suscipit placeat nihil assumenda voluptatem ea dolores ipsam nobis distinctio recusandae voluptates vero fuga voluptas et quidem nemo, dolore facere. Labore adipisci quasi sapiente numquam laboriosam!
                                                Asperiores assumenda error, labore cumque, ratione quaerat facere magni recusandae fugit nostrum vitae distinctio natus sed! Molestiae possimus itaque, architecto consectetur laboriosam quod molestias tempore cupiditate, error quaerat obcaecati culpa.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-info-subtle text-center">
                            <div className="card-body">
                                <h2 className="card-text">Have more questions? Contact Us</h2>
                                <h5 className="card-text">Email : joyfestcomp@gmail.com</h5>
                                <h5 className="card-text">Telephone No : +91 22 1234 5678</h5>
                                <p className="card-text">Or<a href="/contact"> Click Here! </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQPage
