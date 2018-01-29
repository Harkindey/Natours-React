import React from 'react';

const GridTest = () => {
	return (
		<section className="gridtest">
			<div className="row">
				<div className="col-1-of-2">Col 1 of 2</div>
				<div className="col-1-of-2">Col 1 of 2</div>
			</div>
			<div className="row">
				<div className="col-1-of-3">Col 1 of 3</div>
				<div className="col-1-of-3">Col 1 of 3</div>
				<div className="col-1-of-3">Col 1 of 3</div>
			</div>
			<div className="row">
				<div className="col-1-of-3">Col 1 of 3</div>
				<div className="col-2-of-3">Col 2 of 3</div>
			</div>
			<div className="row">
				<div className="col-1-of-4">Col 1 of 4</div>
				<div className="col-1-of-4">Col 1 of 4</div>
				<div className="col-1-of-4">Col 1 of 4</div>
				<div className="col-1-of-4">Col 1 of 4</div>
			</div>
			<div className="row">
				<div className="col-1-of-4">Col 1 of 4</div>
				<div className="col-1-of-4">Col 1 of 4</div>
				<div className="col-2-of-4">Col 2 of 4</div>
			</div>
			<div className="row">
				<div className="col-1-of-4">Col 1 of 4</div>
				<div className="col-3-of-4">Col 3 of 4</div>
			</div>
		</section>
	);
};

export default GridTest;
