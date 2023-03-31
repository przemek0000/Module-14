import Header from "../tasksListPage/common/Header";
import Section from "../tasksListPage/common/Section";

const Author = () => {
    return (
        <>
           <Header title={"O mnie"} />
            <Section
                title={"Pi"}
                body={<div>O mnie wiecej tematu</div>}
            />
        </>
    )
}

export default Author;