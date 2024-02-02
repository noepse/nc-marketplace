import Button from 'react-bootstrap/Button';
import Categories from '../components/Categories';

export default function Home(props){

    return (<>
        <p>What are you looking for today?</p>
        <a href="./items"><Button>View all items</Button></a>
    </>
    )

}