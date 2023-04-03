import Header from "../../common/Header";
import Section from "../../common/Section";
import StyledDiv from "./styled";

const Author = () => {

    return (
        <StyledDiv>
            <Header title={"O autorze"} />
            <Section
                title={"Pi"}
                body={<div>O mnie wiecej tematu</div>}
            />
        </ StyledDiv>
    )

}

export default Author;