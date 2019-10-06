//connects to the eventbrite create API
import axios from 'axios';

const KEY = 'UD4JB37VQKA5TPHSJC';

export default axios.create({
	baseURL: 'https://www.eventbriteapi.com/v3/organizations/26441059813/events/?token=NQ3Y62IZT6BXSDODOLRB',
	params: {
		key: KEY
	}
});