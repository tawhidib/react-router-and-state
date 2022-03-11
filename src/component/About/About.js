import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section my-5">
      <div className="container">
        <div className="top-area">
          <h2 className="my-4">BEST IT TRAINING IN THE COUNTRY</h2>
          <h4>
            Learn real world software engineering from industry experts. Upgrade
            your skill to international level.
          </h4>
          <div className="featurs row g-5 ">
            <div className="col-6 py-4">
              <div className="feature-icon">
                <i class="fas fa-trophy"></i>
              </div>
              <div className="feature-title">
                <h5>Real World Project Development</h5>
              </div>
              <div className="feature-details">
                <p>
                  Learn using real world projects with customer requirements and
                  specifications. Enrich your experience of working with real
                  people with real projects. Start building project from scratch
                  and finish it with publishing and deploying it in server.
                </p>
              </div>
            </div>
            <div className="col-6 py-4">
              <div className="feature-icon">
                <i class="far fa-check-circle"></i>
              </div>
              <div className="feature-title">
                <h5>Follow Latest Industry Standard Tools and Techniques</h5>
              </div>
              <div className="feature-details">
                <p>
                  Always up to date; our courses take into consideration newer
                  frameworks, technology, work process and development criterias
                  used in top companies. Be on the edge.
                </p>
              </div>
            </div>
            <div className="col-6 py-4">
              <div className="feature-icon">
                <i class="fas fa-microphone"></i>
              </div>
              <div className="feature-title">
                <h5>Build Solid Foundations</h5>
              </div>
              <div className="feature-details">
                <p>
                  Successful career depend on a solid mastery of the
                  fundamentals. Build a solid foundations on the essential
                  programming skills and knowledge.
                </p>
              </div>
            </div>
            <div className="col-6 py-4">
              <div className="feature-icon">
                <i class="far fa-play-circle"></i>
              </div>
              <div className="feature-title">
                <h5>Learn Teamwork and Collaboration </h5>
              </div>
              <div className="feature-details">
                <p>
                  Get to know how to work in a project with your colleagues.
                  Collaborate with other people in the process and learn team
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="why-us-section my-4">
          <h2 className="py-4">Why Chose GrowSkill</h2>
          <div className="row">
            <div className="col-6">
              <h4>Real World Project Development</h4>
              <p>
                Learn using real world projects with customer requirements and
                specifications. Enrich your experience of working with real
                people with real projects. Start building project from scratch
                and finish it with publishing and deploying it in server.
              </p>
            </div>
            <div className="col-6">
              <h4>Follow Latest Industry Standard Tools and Techniques</h4>
              <p>
                Always up to date; our courses take into consideration newer
                frameworks, technology, work process and development criterias
                used in top companies. Be on the edge.
              </p>
            </div>
            <div className="col-6">
              <h4>Build Solid Foundations</h4>
              <p>
                Successful Careers depend on a solid mastery of the
                fundamentals. Build a solid foundations on the essential
                programming skills and knowledge.
              </p>
            </div>
            <div className="col-6">
              <h4>Learn Teamwork and Collaboration</h4>
              <p>
                Get to know how to work in a project with your colleagues.
                Collaborate with other people in the process and learn team
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
