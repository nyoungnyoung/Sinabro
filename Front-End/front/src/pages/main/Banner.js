import styled from 'styled-components'


const StyledDiv = styled.div`
    background-color: #FF7B54;
`;

function Banner() {
    return (
        <StyledDiv className="Banner">
            <h2>Banner</h2>
        </StyledDiv>
    )
}

export default Banner