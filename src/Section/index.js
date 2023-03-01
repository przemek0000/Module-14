import { StyledSection, StyledDiv, StyledHeader, StyledBody } from "./styled";

const Section = ({ title, body, buttons }) => (
    <StyledSection>
        <StyledHeader>
            <div>
                {title}
            </div>
            <StyledDiv>
                {buttons}
            </StyledDiv>
        </StyledHeader>
        <StyledBody>
            {body}
        </StyledBody>
    </StyledSection>
)

export default Section;