//displays events that were pulled from the eventbrite search api using a keyword
//includes a search bar, event detail, and eventlist
//links to event create page

import React from 'react';
import SearchBar from './SearchBar';
import eventbrite from '../apis/eventbrite';
import EventDetail from './EventDetail';
import EventList from './EventList';
import { Link } from "react-router-dom";

class EventDisplay extends React.Component {
	state = {selectedEvent: null, events: []};

	onTermSubmit = async term => {
		const response = await eventbrite.get('', {
			params: {
				q: term
			}
		});

		this.setState({
			events: response.data.events,
			selectedEvent: response.data.events[0]
		});
	};

	onEventSelect = event => {
		this.setState({selectedEvent: event});
	};

	render() {
		if(this.state.selectedEvent == null) {
			return (
				<div>
					<div className="ui secondary pointing menu">
						<Link to="/events/new" className="item">Create Event</Link>
					</div>
					<div className="ui container">
						<SearchBar onFormSubmit={this.onTermSubmit} />
					</div>
				</div>
			);
		}

		return(
			<div>
				<div className="ui secondary pointing menu">
					<Link to="/events/new" className="item">Create Event</Link>
				</div>
				<div className="ui container">
					<SearchBar onFormSubmit={this.onTermSubmit} />
					<div className="ui grid">
						<EventDetail eventname={this.state.selectedEvent.name.text}
								 eventurl={this.state.selectedEvent.url}
								 eventdes={this.state.selectedEvent.description.text}
								 eventimg={this.state.selectedEvent.logo.url}
						/>
						<EventList
							onEventSelect={this.onEventSelect}
							events={this.state.events}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default EventDisplay;