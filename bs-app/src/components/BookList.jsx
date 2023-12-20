import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
	state = {
		searchQuery: "",
	};

	handleChange = (event) => {
		this.setState({ searchQuery: event.target.value });
	};
	render() {
		const { books } = this.props;
		const { searchQuery } = this.state;
		// const filteredBooks = books.filter((book) =>
		// 	book.title.toLowerCase().includes(searchQuery.toLowerCase())
		// );
		// console.log("filteredBooks:", filteredBooks);
		/* funziona in console, filtra in base all'input, ma non renderizza sulla pagina */

		return (
			<Row className="mx-2">
				<Col className="mb-3" xs={12}>
					<Form.Control
						type="text"
						placeholder="Search book here"
						value={searchQuery}
						onChange={this.handleChange}
					/>
				</Col>
				{books.map((book) => (
					<Col className="mb-3" xs={6} xl={2} key={book.asin}>
						<SingleBook book={book} />
					</Col>
				))}
			</Row>
		);
	}
}

export default BookList;

/* props.categoryArray
        .filter((book) => book.title.toLowerCase().includes(props.valueToSearch.toLowerCase()))
        .map((book, index) => */
