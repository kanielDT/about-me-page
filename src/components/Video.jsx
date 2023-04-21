import { Container, Row, Col } from "react-bootstrap"
export default function Video () {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                    <h2 className="text-center">~My car in about 1 year~</h2>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/yoV-VX8RlMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}