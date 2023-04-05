
import Input from "./styled";
import { Form, useLocation, useNavigate, useSubmit } from "react-router-dom";
import query from "../searchQueryParamName.js";

const Search = () => {
    const location = useLocation();
    const submit = useSubmit();
    const navigate = useNavigate();

    const search = (new URLSearchParams(location.search)).get(query);

    const onInputChange = ({ currentTarget }) => {
        if (currentTarget.value.trim() === "") {
            return navigate('');
        }

        submit(currentTarget.form)
    };

    return (
        <Form autoComplete="off">
            <Input
                placeholder=" Filtruj zadania "
                name="search"
                type="search"
                value={search || ""}
                onChange={onInputChange}
            />
        </Form>
    )
}

export default Search;