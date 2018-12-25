import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InlineStyle = () => (
    <style>{`
    `}</style>
);

class ActionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, text } = this.props;
        return (
            <a className="button-link">
                <span className="icon-sm">
                    <FontAwesomeIcon icon={icon} />
                </span>
                <span>{text}</span>
            </a>
        );
    }
}

export default ActionItem;
