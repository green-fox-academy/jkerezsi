import { connect } from 'react-redux';
import Button from '../button';
import { acornBought } from '../actions/index';

const mapStateToProps = () => {
  return {
    text: 'Buy',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(acornBought(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;