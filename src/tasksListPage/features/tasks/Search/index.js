
import Input from "./styled";
import { Form, useLocation, useNavigate, useSubmit } from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const submit = useSubmit();
    const navigate = useNavigate();

    const search = (new URLSearchParams(location.search)).get("search");

    const onInputChange = ({ currentTarget }) => {
        navigate('/success', { replace: true });
        submit(currentTarget.form)
    };

    return (
        <Form>
            <Input
                placeholder=" Filtruj zadania "
                name="search"
                type="search"
                value={search}
                onChange={onInputChange}
            />
        </Form>
    )
}

export default Search;