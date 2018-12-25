import React, { Component } from 'react';
import { ActivityItem } from '../index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const InlineStyle = () => (
    <style>{`
    `}</style>
);

/**
 * User Activity History
 */
class Activity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="window-module">
                <InlineStyle />
                <div className="window-module-title window-module-title-no-divider">
                    <span className="window-module-title-icon icon-lg">
                        <FontAwesomeIcon icon={faComments} />
                    </span>
                    <h3>Activity</h3>
                </div>
                <div>
                    <ActivityItem />
                    <ActivityItem />
                    <ActivityItem />
                    <ActivityItem />
                    <ActivityItem />
                    <ActivityItem />
                </div>
            </div>
        );
    }
}

export default Activity;
