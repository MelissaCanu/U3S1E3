import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyGrid = () => (
	<Container>
		<Row>
			{horror.map((item) => (
				<Col key={item.id}>
					<Card>
						<Card.Img variant="top" src={item.img} alt={item.title} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>{item.price + "$"}</Card.Text>
							<Button variant="primary">Buy</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	</Container>
);

export default MyGrid;
