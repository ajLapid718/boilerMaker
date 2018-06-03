// Smart Container Goes Here;
import AllItems from '../components/boilerComponent.js';
import { connect } from 'react-redux';
import { getEverything } from '../actions/action-creators.js';

const mapStateToProps = state => {
  return {
    allItems: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayAll: () => dispatch(getEverything())
  }
}

const AllItemsContainer = connect(mapStateToProps, mapDispatchToProps)(AllItems);

export default AllItemsContainer;
