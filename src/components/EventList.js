//displays list of events

import React from 'react';

const EventList = ({events, onEventSelect}) => {
	   
	const renderList = events.map(event => {
		return (
			<div className="item" key={event.id}>
				<div className="content">
					<h2 onClick={() => onEventSelect(event)}>{event.name.text}</h2>
				</div>
			</div>
		); 
	});

	
	return <div className="ui relaxed divided list">{renderList}</div>;  
};

export default EventList;