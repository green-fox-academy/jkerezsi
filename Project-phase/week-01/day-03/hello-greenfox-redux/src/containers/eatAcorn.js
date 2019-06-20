import { connect } from 'react-redux';
import { acornEaten } from '../actions/index';
import Button from '../button';

const mapStateToProps = () => {
  return {
    text: 'Eat',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(acornEaten(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;