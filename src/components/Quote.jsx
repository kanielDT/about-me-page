import { Container, Row, Col } from "react-bootstrap"
export default function Quote () {
    return (
        <section>
            <Container className="quote-container">
                <Row>
                    <Col className="text-center">
                    <p><q>If one day, the speed kills me, do not be sad because I was Smiling</q></p> -Paul Walker
                    </Col>
                </Row>
            </Container>
        </section>
    )
}