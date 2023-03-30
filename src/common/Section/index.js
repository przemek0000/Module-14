import { StyledSection, StyledHeader, StyledBody } from "./styled";

const Section = ({ primary, title, body, buttons, button }) => (
    <StyledSection>
        <StyledHeader primary={primary}>
                {title}
                {button}
                {buttons}
        </StyledHeader>
        <StyledBody>
            {body}
        </StyledBody>
    </StyledSection>
)

export default Section;