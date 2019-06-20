import { connect } from 'react-redux';
import Display from '../display'

const mapStateToProps = (state) => {
    console.log(state.acorns.count)
    return {
      children: state.acorns.count,
    }
  }


const DisplayAcorn = connect(
    mapStateToProps)(Display);


export default DisplayAcorn;