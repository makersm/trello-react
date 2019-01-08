import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';


const InlineStyle = () => (
<style>{`
.card-detail-fake-text-area {
    background-color: rgba(9,45,66,.08);
    border-radius: 3px;
    color: #6b808c;
    display: block;
    min-height: 40px;
    padding: 7px 9px;
    text-decoration: none;
}

.icon-lg {
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    width: 32px;
}
    `}</style>
);

/**
 * TOADD :: show a tage
 * ADDING :: show text
 * @type {{TOADD: number, ADDING: number}}
 */
const STATUS = {
    TOADD: 1,
    ADDING: 2,
}

const propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

class AddText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: STATUS.TOADD,
            text: '',
            savedText: '',
        };

        this.onHandleClick = this.onHandleClick.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.clearTextarea = this.clearTextarea.bind(this);
    }

    /**
     * Set Text value as state
     * @param event
     */
    onHandleChange(event) {
        this.setState({
            ...this.state,
            text: event.target.value,
        });
    }

    /**
     * Clear Textarea
     */
    clearTextarea() {
        this.textarea.value = '';
    }

    /**
     * Change status
     */
    onHandleClick() {
        const {status, text} = this.state;
        const newStatus = status == STATUS.TOADD ? STATUS.ADDING : STATUS.TOADD;
        const newText = newStatus == STATUS.TOADD ? '': text;

        this.setState({
            ...this.state,
            status: newStatus,
            text: newText,
        });

        this.clearTextarea();
    }

    onHandleSubmit() {
        const {text} = this.state;
        const {onSubmit} = this.props;
        if(!text) return;

        onSubmit(text);

        this.setState({
            ...this.state,
            text: ''
        });

        this.clearTextarea();
    }

    render() {
        const {status, text} = this.state;

        return (
            <div>
                <InlineStyle />
                <a href="javascript:;" className="card-detail-fake-text-area" style={{'display' : status == STATUS.TOADD ? 'block' : 'none'}}
                    onClick={this.onHandleClick}>
                    Add new Text...
                </a>
                <div style={{'display' : status == STATUS.ADDING ? 'block' : 'none'}}>
                    <textarea onChange={this.onHandleChange} className="editable-box-input comment-box-input" defaultValue={text} ref={el => this.textarea = el}></textarea>
                    <input className="primary wide confirm mt10" type="submit" value="Save" onClick={this.onHandleSubmit} />
                    <a href="javascript:;" className="icon-lg icon-close dark-hover cancel" onClick={this.onHandleClick}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                </div>
            </div>
        );
    }
}

AddText.propTypes = propTypes;
export default AddText;
