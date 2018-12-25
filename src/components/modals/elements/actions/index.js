import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { faClone, faUser, faCheckSquare, faFileExcel, faArrowAltCircleRight, faCopy } from '@fortawesome/free-regular-svg-icons';
import { ActionItem } from '../index';


const InlineStyle = () => (
    <style>{`
        .window-module {
            clear: both;
            margin-bottom: 24px;
            position: relative;
        }
        
        .window-sidebar h3.mod-no-top-margin {
            margin-top: 0;
        }
        
        .window-sidebar h3 {
            color: #6b808c;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: .04em;
            line-height: 16px;
            margin-top: 16px;
            text-transform: uppercase;
            line-height: 20px;
            margin-bottom: -4px;
        }
        
        .button-link {
            background-color: #dfe3e6;
            box-shadow: 0 1px 0 0 #c2ccd1;
            border: none;
            border-radius: 3px;
            box-sizing: border-box;
            cursor: pointer;
            display: block;
            font-weight: 700;
            height: 32px;
            margin-top: 8px;
            max-width: 300px;
            overflow: hidden;
            padding: 6px 12px;
            position: relative;
            text-decoration: none;
            text-overflow: ellipsis;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            white-space: nowrap;
            transition-property: background-color,border-color,box-shadow;
            transition-duration: 85ms;
            transition-timing-function: ease;
        }
        
        .icon-lg, .icon-sm {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            display: inline-block;
            font-family: trellicons;
            font-style: normal;
            font-weight: 400;
            line-height: 1;
            text-align: center;
            text-decoration: none;
        }
        
        .icon-sm {
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            width: 20px;
        }
        
        .icon-lg, .icon-sm {
            color: #798d99;
        }
        
        .button-link>.icon-sm {
            margin: 0 4px 0 -4px;
        }
    `}</style>
);

/**
 * From title to status converter
 * @param text
 * @returns {string}
 */
let converter = (text) => {
    switch (text) {
        case 'ACTIONS':
            return 'actions';
        case 'ADD TO CARD':
            return 'addToCard';
    };
};

/**
 * Sublist using type
 * @type {{addToCard: {items: *[]}, actions: {items: *[]}}}
 */
const type = {
    addToCard: {
        items: [
            // {text: 'Members', icon: faUser},
            // {text: 'Labels', icon: {}},
            {text: 'Checklist', icon: faCheckSquare},
            // {text: 'Due Date', icon: {}},
            {text: 'Attachment', icon: faFileExcel},
        ]
    },

    actions: {
        items: [
            {text: 'Move', icon: faArrowAltCircleRight},
            {text: 'Copy', icon: faCopy },
            {text: 'Share', icon: faClone},
        ]
    },
};

/**
 * Default propTypes
 * @type {{title: React.Validator<T>}}
 */
const propTypes = {
    title: PropTypes.string.isRequired,
};

/**
 * Action that display in card detail modal's left side
 */
class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = this.setStateFromProps(props);
    }

    /**
     * Change state by props
     * state :: status, items
     * @param nextProps
     * @param prevState
     * @returns {*}
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        if(converter(nextProps.title) !== prevState.status) {
            return this.setStateFromProps(nextProps);
        }

        return null;
    }

    /**
     * State Setter
     * @param props
     * @returns {{status: string, items: DataTransferItemList}}
     */
    setStateFromProps(props) {
        const status = converter(props.title);
        return { status : status, items: type[status].items };
    }

    /**
     * ActionItems List Getter
     * @returns {*}
     */
    getActionItems() {
        const { items } = this.state;
        return items.map((data, index) => {
            return (
                <ActionItem key={data.text} icon={data.icon} text={data.text} />
            );
        });
    }

    render() {
        const {title} = this.props;
        let actionItems = this.getActionItems();
        return (
            <div className="window-module u-clearfix">
                <InlineStyle />
                <h3 className="mod-no-top-margin">{title}</h3>
                {actionItems}
            </div>
        );
    }
}

Actions.propTypes = propTypes;
export default Actions;
