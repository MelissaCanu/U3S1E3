import React from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
	return (
		<div>
			{books.map((book) => (
				<SingleBook key={book.asin} book={book} />
			))}
		</div>
	);
};

export default BookList;
