import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Popover from 'react-awesome-popover';

const InlineStyle = () => (
<style>{`
    `}</style>
);

class CPopover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        };
        this.setPopoverRef = this.setPopoverRef.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    setPopoverRef(popover) {
        this.popoverRef = popover;
    }

    /**
     * Configure if click event occured popover's outside
     * @param event
     */
    handleOutsideClick(event) {
        const domNode = ReactDOM.findDOMNode(this.popoverRef)
        if(domNode.contains(event.target)) {
            if(!this.state.isShow) { //#### if first init
                this.setState({
                    ...this.state,
                    isShow: true,
                });

                return true;
            }
        }

        if (!domNode.contains(event.target)) { //### if click outside
            if(this.state.isShow) {
                this.setState({
                    ...this.state,
                    isShow: false,
                });
            }
        }
    }

    render() {
        const {actionitem, content} = this.props;
        const {isShow} = this.state;
        return (
            <Popover placement="bottom" arrow={false} contentClass="popover-content" ref={this.setPopoverRef} open={isShow}>
                {actionitem}
                {content}
            </Popover>
        );
    }
}

export default CPopover;
