import React from "react";
import { all_members } from "./AllMembers";
import { Row, Col } from "react-grid-system";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/MeetTheTeam.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class MemberPopup extends React.Component {
  constructor(props) {
    super(props);
    this.memberRef = React.createRef();
  }

  render() {
    const index = this.props.index;
    return (
      <>
        <div className="lightest-background-section">
          {this.props.show && (
            <div
              className="member-popup"
              ref={this.memberRef}
              onLoad={this.positionMember}
            >
              <button className="exitButton" onClick={this.props.onHide}>
                {" "}
                X{" "}
              </button>
              <Row justify="center" type="flex">
                <Col xs={10} md={4}>
                  <LazyLoadImage
                    src={all_members[index].picture}
                    alt={all_members[index].name}
                    effect="blur"
                  />
                </Col>
                <Col xs={10} className="member-popup-info" md={6}>
                  <div>
                    <h2>{all_members[index].name}</h2>
                    <h3>{all_members[index].position}</h3>
                    <p>{all_members[index].year}</p>
                    <p>favorite language: {all_members[index].language}</p>
                    <p>favorite spot: {all_members[index].spot}</p>
                    <p>best part about wic? {all_members[index].wiclove}</p>
                    <p>fun fact: {all_members[index].bio}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="member-popup-socials">
                  {all_members[index].email && (
                    <a href={all_members[index].email} target="_blank">
                      <FaEnvelope />
                    </a>
                  )}
                  {all_members[index].github && (
                    <a href={all_members[index].github} target="_blank">
                      <FaGithub />
                    </a>
                  )}
                  {all_members[index].linkedin && (
                    <a href={all_members[index].linkedin} target="_blank">
                      <FaLinkedinIn />
                    </a>
                  )}
                  {all_members[index].instagram && (
                    <a href={all_members[index].instagram} target="_blank">
                      <FaInstagram />
                    </a>
                  )}
                </Col>
              </Row>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default MemberPopup;
