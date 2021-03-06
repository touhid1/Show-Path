import React, { useState } from 'react';
import { X } from 'react-feather';

import useComponentVisible from '../hooks/useComponentVisible';
import LangDetails from '../data/LangDetails/';

const Details = ({ name, closePreview }) => {
	const [imgSource, setImageSource] = useState(`/static/icons/${name.toLowerCase()}.svg`);
	const { ref, isComponentVisible } = useComponentVisible(true);
	const lang = name.toLowerCase();

	if (!isComponentVisible) {
		closePreview();
	}

	if (!LangDetails[lang]) {
		closePreview();
		return null;
	}

	const { description, youtube, courses, posts } = LangDetails[lang];

	return (
		<div className="details-preview" ref={ref}>
			<div className="heading">
				<div className="flex">
					<img
						src={imgSource}
						onError={() => {
							setImageSource(`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`);
						}}
						width="25px"
						height="25px"
					/>
					<h4>{name}</h4>
				</div>
				<button className="default-btn" onClick={closePreview}>
					<X />
				</button>
			</div>
			<div className="flex">
				<p className="description">{description}</p>
			</div>
			<div>
				{youtube && (
					<iframe
						title="course-preview"
						width="100%"
						height="400"
						src={youtube}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				)}
			</div>
			{courses.length !== 0 && (
				<div className="courses">
					<h4>Courses</h4>
					{courses.map(course => {
						return (
							<ul key={course}>
								<li>
									<span className={course.type}>{course.type}</span>
									<a
										target="_BLANK"
										rel="noreferrer noopener"
										href={`${course.url}?ref=showpath.tech`}
									>
										{course.name}
									</a>
								</li>
							</ul>
						);
					})}
				</div>
			)}

			{posts.length !== 0 && (
				<div className="posts">
					<h4>Posts</h4>
					{posts.map(post => {
						return (
							<ul key={post}>
								<li>
									<a target="_BLANK" rel="noreferrer noopener" href={`${post.url}?ref=showpath.tech`}>
										{post.title}
									</a>
								</li>
							</ul>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Details;
