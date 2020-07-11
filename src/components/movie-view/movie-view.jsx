import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./movie-view.scss";
import { Container } from "react-bootstrap";

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie, onClick } = this.props;

    if (!movie) return null;

    return (
      <div className="movie-view">
        <Container>
          <Row>
            <Col>
              <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.Title}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="movie-poster" src={movie.ImagePath} />
            </Col>
            <Col>
              <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
              </div>
            </Col>
            <Col>
              <div className="movie-genre">
                <span className="label">Genre: </span>
                <span className="value">{movie.Genre.Name}</span>
              </div>
            </Col>
            <Col>
              <div className="movie-director">
                <span className="label">Director: </span>
                <span className="value">{movie.Director.Name}</span>
              </div>
            </Col>
            <Col>
              <div className="movie-back" onClick={() => onClick()}>
                <button type="button">Back</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
