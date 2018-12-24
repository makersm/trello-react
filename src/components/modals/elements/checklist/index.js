import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { CheckListItem } from '../index';

const InlineStyle = () => (
    <style>{`
        .checklist {
            margin-bottom: 24px;
        }
        
        .checklist-progress {
            margin-bottom: 6px;
            position: relative;
        }
        
        .checklist-progress-percentage {
            color: #6b808c;
            font-size: 11px;
            line-height: 10px;
            position: absolute;
            left: 0;
            top: -1px;
            text-align: center;
            width: 32px;
        }
        
        .checklist-progress-bar {
            background: rgba(9,45,66,.08);
            border-radius: 4px;
            clear: both;
            height: 8px;
            margin: 0 0 0 40px;
            overflow: hidden;
            position: relative;
        }
        
        .checklist-progress-bar-current {
            background: #5ba4cf;
            bottom: 0;
            left: 0;
            position: absolute;
            top: 0;
            transition: width .14s ease-in,background .14s ease-in;
        }
        
        .checklist-progress-bar-current-complete {
            background: #61bd4f;
        }
       
    `}</style>
);

/**
 * Card Detail Modal's CheckList
 */
class CheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: "0"
        }
    }

    render() {
        const {percent} = this.state;
        return (
            <div className="checklist">
                <InlineStyle />
                <div className="window-module-title window-module-title-no-divider u-clearfix">
                    <span className="window-module-title-icon icon-lg icon-checklist">
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </span>
                    <h3>개발</h3>
                    </div>
                    <div className="checklist-progress">
                        <span className="checklist-progress-percentage">{`${percent}%`}</span>
                        <div className="checklist-progress-bar" >
                        <div className="checklist-progress-bar-current checklist-progress-bar-current-complete" style={{width: `${percent}%`}}></div>
                    </div>
                    <div className="checklist-items-list">
                        <CheckListItem />
                        <CheckListItem />
                        <CheckListItem />
                        <CheckListItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckList;
