import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../components/CarouselImage.jsx';

export default function Home(props){

    return (
    <section id="home">
    <p></p>
        <Carousel>
      <Carousel.Item>
        <CarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>Shop Today</h3>
          <a href="./items"><Button>View all items</Button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Trending Now</h3>
          <a href="./items/Electronics"><Button>Electronics</Button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Newly Added</h3>
          <a href="./items/Clothing"><Button>Clothing</Button></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </section>
    )

}