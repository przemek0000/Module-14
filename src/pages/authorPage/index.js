import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => {
    return (
        <>
           <Header title={"O autorze"} />
            <Section
                title={"Pi"}
                body={<div>O mnie wiecej tematu</div>}
            />
        </>
    )
}

export default Author;