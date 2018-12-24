import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

const InlineStyle = () => (
    <style>{`
        .list-card {
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 0 rgba(9,45,66,.25);
            cursor: pointer;
            display: block;
            margin-bottom: 8px;
            max-width: 300px;
            min-height: 20px;
            position: relative;
            text-decoration: none;
            z-index: 0;
        }
        
        .list-card-details {
            overflow: hidden;
            padding: 6px 8px 2px;
            position: relative;
            z-index: 10;
        }
        
        .list-card-title {
            clear: both;
            display: block;
            margin: 0 0 4px;
            overflow: hidden;
            text-decoration: none;
            word-wrap: break-word;
            color: #17394d;
        }
        
        .badges {
            float: left;
            max-width: 100%;
            margin-left: -2px;
        }
        
        .badge, .badge-icon, .badge-text {
            vertical-align: top;
        }
        
        .badge {
            color: #6b808c;
            display: inline-block;
            margin: 0 4px 4px 0;
            max-width: 100%;
            min-height: 20px;
            overflow: hidden;
            position: relative;
            padding: 2px;
            text-decoration: none;
            text-overflow: ellipsis;
        }
        
        .icon-lg, .icon-sm {
            color: #798d99;
        }
        
        .icon-sm {
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            width: 20px;
        }
        
        .badge-text {
            font-size: 12px;
            padding: 0 4px 0 2px;
            white-space: nowrap;
            line-height: 20px;
        }

    `}</style>
);

/**
 * Trello's Card
 */
class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;
        return (
            <a className="list-card">
                <InlineStyle />
                <div className="list-card-details">
                    <span className="list-card-title">{title}</span>
                    <div className="badges">
                        <div className="badge">
                            <span className="badge-icon icon-sm">
                                <FontAwesomeIcon icon={faComment} />
                            </span>
                            <span className="badge-text">1</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon icon-sm">
                                <FontAwesomeIcon icon={faCheckSquare} />
                            </span>
                            <span className="badge-text">1</span>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default Card;