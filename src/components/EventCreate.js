//creates events, utilizes the eventbrite create api

import React from 'react';
import eventcreate from '../apis/eventcreate';
//import axios from 'axios';

class EventCreate extends React.Component {
	state = {name: null, currency: null, timezone: null, startutc: null, endutc: null};

	
	handleSubmit = async name => {
		const response = await eventcreate.post('', {
			params: {
				organization_id: 26441059813
			},
			"series_parent": {
    			"name": {
     				 "html": this.state.name
    		 	},
    		 	"description": {
      				"html": "<p>Some text</p>"
   			 	},
   			 	"start": {
      				"timezone": "America/Los_Angeles",
      				"utc": "2019-09-12T02:00:00Z"
    			},
    			"end": {
      				"timezone": "America/Los_Angeles",
     			 	"utc": "2019-09-12T02:00:00Z"
    			}
    		},
    		"create_children": [
      			"start": {
       				timezone: "America/Los_Angeles",
        			utc: "2018-05-12T02:00:00Z"
      			},
      			"end": {
       		 		"timezone": "America/Los_Angeles",
        			"utc": "2018-05-12T02:00:00Z"
      			}
  			]
		});	
	}
	
	/*
	handleSubmit = () => {
		axios.post('https://www.eventbriteapi.com/v3/organizations/26441059813/events/?token=NQ3Y62IZT6BXSDODOLRB', {
			params: {
				organization_id: 26441059813,
				key: 'UD4JB37VQKA5TPHSJC'
			},
			"series_parent": {
    			"name": {
     				 "html": "<p>Some text</p>"
    		 	},
    		 	"description": {
      				"html": "<p>Some text</p>"
   			 	},
   			 	"start": {
      				"timezone": "America/Los_Angeles",
      				"utc": "2019-09-12T02:00:00Z"
    			},
    			"end": {
      				"timezone": "America/Los_Angeles",
     			 	"utc": "2019-09-12T02:00:00Z"
    			},
    		},
    		"create_children": [
      			"start": {
       				"timezone": "America/Los_Angeles",
        			"utc": "2018-05-12T02:00:00Z"
      			},
      			"end": {
       		 		"timezone": "America/Los_Angeles",
        			"utc": "2018-05-12T02:00:00Z"
      			}
  			]
		});
	}
	*/
	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	handleCurrencyChange = (event) => {
		this.setState({currency: event.target.value});
	}

	handleTimezoneChange = (event) => {
		this.setState({timezone: event.target.value});
	}

	handleutcStartChange = (event) => {
		this.setState({startutc: event.target.value});
	}

	handleutcEndChange = (event) => {
		this.setState({endutc: event.target.value});
	}

	render() {
		return(
			<div className="ui form error">
				<h3>Create an Event</h3>
				<form onSubmit={this.handleSubmit}>
					<div>
						Event Name: 
						<input type="text" onChange={this.handleNameChange}/>
					</div>
					<div>
						Currency: 
						<input type="text" onChange={this.handleCurrencyChange} />
					</div>
					<div>
						Timezone: 
						<input type="text" onChange={this.handleTimezoneChange}/>
					</div>
					<div>
						Start: 
						<input type="text" onChange={this.handleutcStartChange} />
					</div>
					<div>
						End: 
						<input type="text" onChange={this.handleutcEndChange} />
					</div>
					<button className="ui button primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default EventCreate;