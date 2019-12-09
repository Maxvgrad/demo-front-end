import connect from "react-redux";
import Link from "../components/Link";
import {setFilter} from "../actions/actions"

const mapStateToProps = (state, ownProps) => {
    return state.visibiltyFilter == ownProps.filter
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;