import { Container, Row, Col, Carousel } from "react-bootstrap"

export default function PictCarousel () {
    return (
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col className="p-0">
                    <Carousel fade>
                        <Carousel.Item>
                            <img src="https://bringatrailer.com/wp-content/uploads/2021/04/2007_nissan_350z_16185132361624ee3ee0b53IMG_3300.jpg"className=" d-block w-100 "
                            width={200} height={350}
                            alt="car1" />
                            <Carousel.Caption>
                                <h2>Nissan 350z</h2>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="https://www.topgear.com/sites/default/files/2021/08/1995-Nissan-Skyline-GT-R-_0.jpg"className=" d-block w-100 "
                            width={200} height={350}
                            alt="car2" />
                            <Carousel.Caption>
                                <h2>Nissan r33 GT-R Skyline</h2>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="https://180sx.club/wp-content/uploads/2019/07/nissan-180sx-kouki.jpg"className=" d-block w-100 "
                            width={200} height={350}
                            alt="car3"  />
                            <Carousel.Caption>
                                <h2>Nissan 180sx</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}