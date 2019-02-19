import React from 'react';

function Images(props){
	// Map through images
	console.log(props.data)
	let images = props.data.map((image, i)=>{
		return(
			<img className="images" src={image} key={i} />
		)
	})
	console.log(images)
	return(
		<section className="gallery">{images}</section>
	)
}


export default Images;