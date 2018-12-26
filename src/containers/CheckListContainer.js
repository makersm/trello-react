import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CheckList } from '../components/modals';
import { addchecklist } from '../store/modules/addCheckList';

/**
 * Smart Container (Subscribe generate new CheckList)
 */
class CheckListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: []
        };

        this.getCheckLists = this.getCheckLists.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let titles = prevState.titles; //### For Successive duplicate title
        if('title' in nextProps) { //### Prevent Initial call
            return {titles};
        }

        return null;
    }

    getCheckLists() {
        const { titles } = this.props;
        return titles.map((data, index) => {
            if(data) {
                return ( <CheckList title={data} key={index} /> );
            }
        });
    }

    render() {
        const checkLists = this.getCheckLists();

        return (
            <div>
                {checkLists}
            </div>
        );
    }
}

/**
 * set Store's state to Container(CheckListContainer)'s props
 * @param state
 * @returns {{titles: *, title: *}}
 */
function mapStateToProps (state) {
    return {
        titles: state.addCheckList.titles,
        title: state.addCheckList.title,
    };
};

/**
 * Connect component(CheckListContainer) and redux store
 */
export default connect(
    mapStateToProps
)(CheckListContainer);