import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";

function ContactForm() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-6 col-sm-12 midsection">
            <h2>Contact</h2>
            <form action="mailto:pfotis@gmail.com" method="post" enctype="text/plain"> 
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="your name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="example@email.com"
                />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Write a message"
                  rows="8"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default ContactForm;