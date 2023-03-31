import StyledError from './styled';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <StyledError>
            <p>
                Ops.... something went wrong :(
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </StyledError>);
}

export default ErrorPage;