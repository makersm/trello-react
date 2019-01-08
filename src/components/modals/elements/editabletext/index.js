import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const InlineStyle = () => (
    <style>{`
        .editable-box-input {
            opacity: 0.8;
            height: 50px;
        }
        
        .mt10 {
            margin-top: 10px;
        }
        
        .mr10 {
            margin-right: 10px;
        }
        
        .ml10 {
            margin-left: 10px;
        }
        
        .button.danger, button.danger, input[type=button].danger, input[type=submit].danger {
            background-color: red;
            box-shadow: 0 1px 0 0 darkred;
            border: none;
            color: #fff;
            padding: 10px;
            border-radius: 3px;
            cursor: pointer;
        }
    `}</style>
);

/**
 * Card Detail Modal's EditableText
 */
const STATUS = {
    'EDITING' : 1,
    'TEXTING' : 2,
};

const propTypes = {
    text: PropTypes.string.isRequired,
};

class EditableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: STATUS.TEXTING,
            text: this.props.text, //### REQUIRED FEILD
            tmp: this.props.text
        };

        this.onHandleClick = this.onHandleClick.bind(this);
        this.onHandleSave = this.onHandleSave.bind(this);
        this.onHandleDelete = this.onHandleDelete.bind(this);
        this.onHandleCancel = this.onHandleCancel.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.setTextareaByText = this.setTextareaByText.bind(this);
    }

    onHandleClick() {
        const {text, status} = this.state;
        if(!text) return;

        let newStatus = status === STATUS.EDITING ? STATUS.TEXTING : STATUS.EDITING;
        this.setState({
            ...this.state,
            status: newStatus
        });
    }

    onHandleSave() {
        const {tmp, status} = this.state;

        let newStatus = status === STATUS.EDITING ? STATUS.TEXTING : STATUS.EDITING;
        this.setState({
            ...this.state,
            status: newStatus,
            text: tmp,
        });
    }

    onHandleDelete() {
        const {onDelete} = this.props;
        onDelete();
    }

    onHandleCancel() {
        const {text, status} = this.state;

        let newStatus = status === STATUS.EDITING ? STATUS.TEXTING : STATUS.EDITING;
        this.setState({
            ...this.state,
            status: newStatus,
            tmp: text,
        });

        this.setTextareaByText();
    }

    onHandleChange(event) {
        this.setState({
            ...this.state,
            tmp: event.target.value,
        });
    }

    /**
     * Clear Textarea
     */
    setTextareaByText() {
        this.textarea.value = this.state.text;
    }

    render() {
        const {tmp, text, status} = this.state;
        const deleteElement = 'onDelete' in this.props ?
            <input className="danger wide confirm mt10 ml10" type="submit" value="Delete" onClick={this.onHandleDelete} />
            : '';

        return (
            <div style={{'display' : status == STATUS.EDITING ? 'block' : 'inline-block'}}>
                <InlineStyle />
                <span style={{'display' : status == STATUS.TEXTING ? 'inline-block' : 'none', 'cursor': 'pointer'}} onClick={this.onHandleClick}>{tmp}</span>
                <div style={{'display' : status == STATUS.EDITING ? 'block' : 'none'}}>
                    <textarea onChange={this.onHandleChange} className="editable-box-input comment-box-input" defaultValue={text} ref={el => this.textarea = el}></textarea>
                    <input className="primary wide confirm mt10" type="submit" value="Save" onClick={this.onHandleSave} />
                    {deleteElement}
                    <a href="javascript:;" className="icon-lg icon-close dark-hover cancel" onClick={this.onHandleCancel}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                </div>
            </div>
        );
    }
}

EditableText.propTypes = propTypes;
export default EditableText;
