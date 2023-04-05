import Header from "../../common/Header";
import Section from "../../common/Section";
import StyledDiv from "./styled";

const Author = () => {

    return (
        <StyledDiv>
            {/* <Header title="" /> */}
            <Section
                title="O mnie"
                body={<div>Od zawsze interesowałem się komputerami 💻, swój pierwszy komputer dostałem w wieku 8 lat. Obecnie ucze się Frontend Development z YouCode
                    do tworzenia aplikacji internetowych. W wolnych chwilach uprawiam sport - bieganie 🏃‍♂️, siłownia 💪. Interesuje mnie również rynek gdzie regularnie 
                    inwestuje na giełdzie. Z muzyki to lubię grać na pianinie 🎹, a jeśli chodzi o słuchanie to zależy od sytuacji w jakiej się znajduje lub nastroju 
                    - rock, dark techno, ambient, trance, muzyka filmowa, soundtracks.
                </div>}
            />
        </ StyledDiv>
    )

}

export default Author;