import React, { Component } from 'react';

import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InlineStyle = () => (
    <style>{`
.new-comment {
    position: relative;
    margin: 0 0 20px 40px;
}

.member-no-menu {
    cursor: default;
}

.new-comment .member {
    position: absolute;
    left: -40px;
}

.member-initials {
    display: block;
    font-size: 12px;
    font-weight: 700;
    height: 32px;
    left: 0;
    line-height: 32px;
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
}

form {
    display: block;
    margin-top: 0em;
}

.comment-frame {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px -1px rgba(9,45,66,.25), 0 0 0 1px rgba(9,45,66,.08);
    margin: 4px 4px 12px 0;
    transition: box-shadow 85ms ease-in;
}

.comment-box {
    position: relative;
}

.comment-box-input {
    background: #fff!important;
    box-shadow: none;
    height: 77px;
    margin: 0;
    min-height: 75px;
    padding: 9px 11px;
    padding-bottom: 0;
    width: 96%;
    resize: none;
    overflow: hidden;
    overflow-wrap: break-word;
    border:none;
}

.comment-too-long-warning {
    display: none;
    margin-top: 16px;
}

.button.disabled, .button.disabled.primary:focus, .button.disabled:active, .button.disabled:focus, .button.disabled:hover, button.disabled, button.disabled.primary:focus, button.disabled:active, button.disabled:focus, button.disabled:hover, input[type=button].disabled, input[type=button].disabled.primary:focus, input[type=button].disabled:active, input[type=button].disabled:focus, input[type=button].disabled:hover, input[type=submit].disabled, input[type=submit].disabled.primary:focus, input[type=submit].disabled:active, input[type=submit].disabled:focus, input[type=submit].disabled:hover, input[type=submit]:disabled, input[type=submit]:disabled:hover {
    background-color: #f5f6f7 !important;
    box-shadow: none !important;
    border: none !important;
    color: #97a7b0 !important;
    cursor: default !important;
}

.button.primary, button.primary, input[type=button].primary, input[type=submit].primary {
    background-color: #5aac44;
    box-shadow: 0 1px 0 0 #3f6f21;
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
}
    `}</style>
);

class AddComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="window-module">
                <InlineStyle />
                <div className="window-module-title window-module-title-no-divider">
                    <span className="window-module-title-icon icon-lg">
                        <FontAwesomeIcon icon={faComment} />
                    </span>
                    <h3>Add Comment</h3>
                </div>
                <div className="new-comment">
                    <div className="member member-no-menu">
                        <span className="member-initials" title="userfullname">un</span>
                    </div>
                    <form>
                        <div className="comment-frame">
                            <div className="comment-box">
                                <textarea className="comment-box-input" placeholder="Write a comment..."></textarea>
                            </div>
                        </div>
                    </form>
                    <div className="comment-controls u-clearfix">
                        <input className="primary confirm" type="submit" value="Save" disabled/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddComment;
