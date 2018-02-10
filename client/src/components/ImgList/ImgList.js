import React from 'react';
import Img from '../Img';

const ImgList = props => {
	const results = props.data;
	let imgs = results.map(img => <Img url={img.urls.small} key={img.id}/>);

	return (
		<div className="img-list">
			{imgs}
		</div>
	);
};

export default ImgList;