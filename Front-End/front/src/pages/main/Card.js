import styled from "styled-components";
import { Link } from "react-router-dom";
// import React, { useParams } from "react-router-dom";

const LectureDiv = styled.div`
  width: 250px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  /* position: absolute; */
`;

const StyledImg = styled.img`
  width: 250px;
  height: 150px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Card(props) {
  return (
    <div className="Card">
      <StyledLink to={`/detail/${props.id}`}>
        <LectureDiv key={props.id}>
          <StyledImg src={props.imgsrc} alt="img"></StyledImg>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>
            {props.startTime.toLocaleDateString()}
            {" ~ "}
            {props.endTime.toLocaleDateString()}
          </p>
        </LectureDiv>
      </StyledLink>
    </div>
  );
}

export default Card;
