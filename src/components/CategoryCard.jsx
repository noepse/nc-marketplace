export default function CategoryCard (props) {
    const {category} = props
    return <li>{category.category_name}</li>
}