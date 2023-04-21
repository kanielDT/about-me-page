import { Container, Row, Col } from "react-bootstrap"
export default function Grid () {
    return (
        <section>
            <Container className="grid-container">
                <Row >
                    <Col sm={12} md={6} >
                    <h2 className=" text-center">Where I Started</h2>
                    <p>I chose Boca-Code for many reasons, but the main reason was to attend an in-person bootcamp near me. I have always wanted to be in a computer-related field, but blocks popped up in my life where honestly I just wanted to get away from the retail industry and into my own. I have a considerable amount of free time to which I could've attended a longer bootcamp, or even a degree, but getting it done as fast as possible was the way i really wanted it.</p>
                    </Col>

                    <Col sm={12} md={6} >
                    <h2 className=" text-center">A dream Job Come Through(hopefully)</h2>
                    <p>For my dream job, even though it's uncomfortable, I would prefer to work on-site. I say this because it may feel like a bother to me, but it's always great to build con nection with those around you. Ironically, as much as I do research on passive income and ways work less, my dream company is apple and I've alwasy kind of liked their tech ever since the iphone 4s, even if they do take a little longer to implement new technology in their products.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}