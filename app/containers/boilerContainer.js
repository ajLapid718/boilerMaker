// Smart Container Goes Here;
import AllItems from '../components/boilerComponent.js';
import { connect } from 'react-redux';
import { getEverything } from '../actions/action-creators.js';

const AllItemsContainer = connect(null, null)(AllItems);

export default AllItemsContainer;
