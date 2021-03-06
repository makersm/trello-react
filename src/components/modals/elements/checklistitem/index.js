import React, { Component } from 'react';

import {EditableText} from '../index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

const InlineStyle = () => (
    <style>{`
        .checklist-items-list {
           margin-top: 5px;
           min-height: 8px;
        }
        
        .checklist-item {
            clear: both;
            padding-left: 40px;
            position: relative;
            border-radius: 3px;
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            transition-property: opacity,height,padding,margin,-webkit-transform;
            transition-property: transform,opacity,height,padding,margin;
            transition-property: transform,opacity,height,padding,margin,-webkit-transform;
            transition-duration: .14s;
            transition-timing-function: ease-in;
            cursor: pointer;
        }
        
        .checklist-item-fade-out .checklist-item-checkbox, .checklist-item-state-complete .checklist-item-checkbox {
            background-color: rgba(9,45,66,.02);
            box-shadow: 0 0 0 1px rgba(9,45,66,.13);
            text-indent: 0;
        }

        .checklist-item-checkbox {
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 1px rgba(9,45,66,.25), 0 0 0 1px rgba(9,45,66,.08);
            box-sizing: border-box;
            position: absolute;
            left: 0;
            line-height: 20px;
            margin: 6px;
            overflow: hidden;
            text-align: center;
            top: 0;
            height: 20px;
            width: 20px;
            white-space: nowrap;
        }
        
        .icon-lg, .icon-sm-checkbox {
            color: #798d99;
        }
        
        .icon-sm-checkbox {
            height: 20px;
            font-size: 16px;
            line-height: 20px;
            width: 20px;
        }
        
        .icon-lg, .icon-sm-checkbox {
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
        
        .checklist-item-details {
            word-break: break-word;
            word-wrap: break-word;
            overflow-wrap: break-word;
            padding-right: 32px;
        }
        
        .checklist-item-row {
            padding: 5px 0;
        }
        
        .checklist-item-fade-out .checklist-item-details-text, .checklist-item-state-complete .checklist-item-details-text {
            color: #6b808c;
            font-style: italic;
            text-decoration: line-through;
        }
        
        .checklist-item-details-text {
            min-height: 20px;
            margin-bottom: 0;
        }
        
        .markeddown {
            word-break: break-word;
            word-wrap: break-word;
            overflow-wrap: break-word;
        }
       
    `}</style>
);

/**
 * Css display type by status(checked :: Todo  / unchecked :: Done)
 * @type {{checked: boolean, icon: *}}
 */
const type = {
    checked : {
        className: "checklist-item-state-complete",
        checkIcon: <FontAwesomeIcon icon={faCheckSquare} />
    },
    unchecked: {
        className: "",
        checkIcon: ""
    }
};

const STATUS = {
    ALIVE: 1,
    REMOVE: 2,
};

/**
 * Card Modal's CheckList Item
 */
class CheckListItem extends Component {
    constructor(props) {
        super(props);
        this.state = this.setStateFromProps(props);
        this.setStateChange = this.setStateChange.bind(this);
        this.onHandleDelete = this.onHandleDelete.bind(this);
    }

    /**
     * Prevent unnesaccery update
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextState !== this.state;
    }

    /**
     * Set State using Props
     * @param props
     * @returns {{status: string}}
     */
    setStateFromProps(props) {
        let status = "unchecked";
        if('status' in props){
            status = props.status;
        }
        return { status : status, condition : STATUS.ALIVE };
    }

    /**
     * Change state using click
     */
    setStateChange() {
        var typeToChange = this.state.status == "unchecked" ? "checked" : "unchecked";
        this.setState({
            ...this.state,
            status : typeToChange
        });

        this.props.handleClick(typeToChange);
    }

    onHandleDelete() {
        const {onDelete} = this.props;

        this.setState({
            ...this.state,
            condition : STATUS.REMOVE
        });

        onDelete(this.state.status);
    }

    render() {
        const {status, condition} = this.state;
        const {title} = this.props;

        return (
            <div className={`checklist-item ${type[status].className}`} style={{'display': condition === STATUS.ALIVE ? 'block': 'none'}}>
                <InlineStyle />
                <div className="checklist-item-checkbox ">
                    <span className="icon-sm-checkbox icon-check checklist-item-checkbox-check" onClick={this.setStateChange}>
                        {type[status].checkIcon}
                    </span>
                </div>
                <div className="checklist-item-details">
                    <div className="checklist-item-row">
                        <span className="checklist-item-details-text markeddown">
                            <EditableText text={title} onDelete={this.onHandleDelete}/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckListItem;
