import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RocketWhite from '../../assets/img/rocket-white.svg';
import ImgLogin from "../../assets/img/image-login.png";

const styles = {
    header: {
        fontFamily: "QuentinPro",
        color: "#fff",
        fontSize: '25px'
    },
    h1: {
        color: "#fff",
        fontWeight: 600
    },
    link: {
        background: "#fff",
        color: "#31b88a",
        borderColor: "#fff",
        borderRadius: "5px",
        padding: "10px 25px",
        fontWeight: 700,
        fontSize: "12px"
    },
    p: {
        fontSize: "18px"
    }
}

export default class Home extends Component {

    render() {

        return (
            <div className="h-100 login">
                <Container className="h-100">
                    <Row style={styles.header} className="fixed-top">
                        <Col xs={12} className="d-inline-flex align-items-center justify-content-center py-3">
                            <img src={RocketWhite} alt="Rocket White" className="img-fluid mr-3" width="40" />
                            <span className="pt-2">Dashboard Leads</span>
                        </Col>
                    </Row>
                    <Row className="h-100 align-items-center">
                        <Col xs={12} md={6} >
                            <h1 style={styles.h1} className="text-white mb-4"> Gestão de Leads</h1>
                            <p className="text-white text-justify my-5" style={styles.p}>
                                O sistema ideal para a sua empresa criar e gerenciar leads.
                            </p>
                            <a href="https://my.dashboardleads.com.br/" className="btn btn-muted text-uppercase" style={styles.link} >Fazer Login</a>
                        </Col>
                        <Col xs={12} md={5} className="d-none d-md-flex align-items-center justify-content-end offset-md-1">
                            <img src={ImgLogin} className="img-fluid" alt="Business" />
                        </Col>
                    </Row>
                    <Row className="fixed-bottom py-1 px-2 justify-content-end">
                        <Col xs={12} sm={6} className="d-inline-flex align-items-center justify-content-center py-3">
                            <small className="color-grey">&copy; {new Date().getFullYear()} Dashboard Leads - Todos os direitos reservados.</small>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}