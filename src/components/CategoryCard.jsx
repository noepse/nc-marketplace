import Button from 'react-bootstrap/Button';

export default function CategoryCard (props) {
    const {category} = props


    return <li><Button>{category.category_name}</Button></li>
}