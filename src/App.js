import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './store/actions';






import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';




const App = props => {
  console.log('I am props: ', props);
  

  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    console.log('buy item invoked: ', item);
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
});

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
