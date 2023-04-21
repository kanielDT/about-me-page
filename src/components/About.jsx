import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
export default function About () {
    return (   

        <main>
            <Container>
                <Row sm={12} med={6} className="text-center">
                    <Col>
                    <h1>Kaniel Tapper</h1>
                    <p>Hi, my name is Kaniel and I am currently a software engineering student at Boca Code. I enjoy beach drives, highway drives, video games, boxing, racing, and driving/traveling to places I haven't been to yet.My goals for this year is to hit the gym again after graduation, aquire a job/intern as a software engineer, buy a brian crowler 2jz rebuild kit for my car, and dive back into property investment research. </p>
                    <p>A dream project for me would be to build my own social media app, one that can out class our current platforms.</p>
                    </Col>
                    <Col className="carousel-col"> <img src="./images/pic.png"  width={500} height={350} alt="profile-pic" /> </Col>
                </Row>
            </Container>
        </main>
    )
}