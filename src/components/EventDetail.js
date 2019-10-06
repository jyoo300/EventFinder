//lists the name, image, and description of each individual event

import React from 'react';

const EventDetail = ({eventname, eventurl, eventdes, eventimg}) => {
	if(!eventname) {
		return <div>Loading...</div>;
	}


	return (
		<div>
			<div className="ui vertical-segment">
				<h1>
					<a href={eventurl}>{eventname}</a>
				</h1>
				<img src={eventimg} width="100%" height="auto"/>
				<h4>{eventdes}</h4>
			</div>
		</div>
	);
}

export default EventDetail;