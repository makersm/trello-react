import React, { Component } from 'react';

const InlineStyle = () => (
    <style>{`
.phenom {
    border-bottom: 1px solid rgba(9,45,66,.13);
    margin-left: 40px;
    min-height: 32px;
    padding: 12px 0;
    position: relative;
}

.phenom-creator, .phenom-icon {
    height: 32px;
    left: -40px;
    position: absolute;
    top: 12px;
    width: 32px;
}

.member {
    background-color: #dfe3e6;
    border-radius: 25em;
    color: #17394d;
    cursor: pointer;
    display: block;
    float: left;
    height: 32px;
    margin: 0 4px 4px 0;
    overflow: visible;
    position: relative;
    width: 32px;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 0;
}

.phenom.mod-attachment-type .phenom-desc, .phenom.mod-comment-type .phenom-desc {
    display: block;
}

.phenom-desc {
    margin: 0 24px 0 0;
    word-wrap: break-word;
}

.phenom.mod-attachment-type .phenom-meta, .phenom.mod-comment-type .phenom-meta {
    display: block;
}

.phenom-meta {
    display: inline-block;
    font-size: 12px;
    margin: 0;
    min-width: 110px;
}

.phenom-meta a.date {
    text-decoration: none;
}
    `}</style>
);

/**
 * User's Activity Item
 */
class ActivityItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="phenom">
                <InlineStyle />
                <div className="phenom-creator">
                    <div className="member"> </div>
                </div>
                <div className="phenom-desc">
                    <span>Name</span> Activity to
                </div>
                <div className="phenom-meta quiet">
                    <a className="date" href="">2018년</a>
                </div>
            </div>
    );
    }
}

export default ActivityItem;
