import { Container, Row, Col } from "react-bootstrap"
export default function Footer () {

    const currentDate = Date().getFullYear
    const githubURl = "https://github.com/kanielDT/about-me-page"

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {currentDate} Kaniel Tapper</p>
                        <br />
                        <button><small><a href={githubURl}
                        target="_blank"
                        rel="norefferer">My Github Code</a></small></button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}