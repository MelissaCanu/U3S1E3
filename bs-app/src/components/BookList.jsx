import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
	return (
		<Container>
			<Row>
				{books.map((book) => (
					<Col className="mb-3" xs={6} xl={2} key={book.asin}>
						<SingleBook book={book} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default BookList;
