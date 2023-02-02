import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #f7c815;
  padding: 5px;
`;

function Banner() {
  return (
    <StyledDiv className="Banner">
      <h2>Banner</h2>
    </StyledDiv>
  );
}

export default Banner;
