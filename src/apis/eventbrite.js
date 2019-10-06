//connects to eventbrite api's search feature

import axios from 'axios';

const KEY = 'UD4JB37VQKA5TPHSJC';

export default axios.create({
	baseURL: 'https://www.eventbriteapi.com/v3/events/search/?token=NQ3Y62IZT6BXSDODOLRB',
	params: {
		key: KEY
	}
});