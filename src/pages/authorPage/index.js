import Header from "../../common/Header";
import Section from "../../common/Section";
import StyledDiv from "./styled";

const Author = () => {

    return (
        <StyledDiv>
            <Header title={"Podziękowania"} />
            <Section
                title={"YouCode"}
                body={<div>Ze względu, że to było ostatnie zadanie przed pracą grupową, chciałbym podziękować @Krzyśkowi Dąbrowskiemu i całemu zespołowi za owocną pracę, a szczególnie
                    @Wojciech Knott i @Kamil Ziemann za sprawdzanie i krytykowanie moich prac XD 😛. Potrzebowałem kilku miesięcy by dojść od "0" do tego momentu 🚀.
                </div>}
            />
        </ StyledDiv>
    )

}

export default Author;