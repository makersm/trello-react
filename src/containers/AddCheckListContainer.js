import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCheckList } from '../components/modals';
import { addchecklist } from '../store/modules/addCheckList';

import { ModalDetail } from '../components';

/**
 * Smart Container (Publish generate new CheckList)
 */
class AddCheckListContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(title) {
        const { propAddCheckList } = this.props;
        propAddCheckList(title); //### Use Reducer to set store state
    };

    render() {
        return <AddCheckList onSubmit={this.handleSubmit} />;
    }
}

/**
 * Set Dispatch(Reducer function) as props
 * @param dispatch
 * @returns {{propAddCheckList: (function(*=): *)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        propAddCheckList: title => dispatch(addchecklist(title))
    };
};

/**
 * Connect component(AddCheckListContainer) and redux store
 */
export default connect(
    null,
    mapDispatchToProps
)(AddCheckListContainer);