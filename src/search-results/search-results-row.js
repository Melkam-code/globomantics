import './search-results.css';
import { useHistory } from 'react-router';

const SearchResultsRow = ({ house }) => {
    const history = useHistory();

    const setActive = () => {history.push(`/house/${house.id}`);};

    return ( 
        <tr>
            <td onClick={setActive}>
                {house.address}
            </td>
            <td>
                {house.price}
            </td>
            <td>
                {house.likes}
            </td>
        </tr>
     );
}
 
export default SearchResultsRow;