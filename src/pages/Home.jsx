import Button from 'react-bootstrap/Button';
import Categories from './Categories';

export default function Home(props){

    return (<>
        <p>what are you looking for today?</p>
        <a href="./items"><Button>view all items</Button></a>
    </>
    )

}