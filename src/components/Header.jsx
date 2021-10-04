import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Crypto</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to="/cryptocurrencies">
								<Nav.Link>Cryptocurrencies</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/news">
								<Nav.Link>News</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
