import React, { Component } from 'react';

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
        
        .icon-comment:before {
            content: "\\E918";
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
        }

    `}</style>
);

class App extends Component {

    render() {
        const {title} = this.props;
        return (
            <a class="list-card">
                <div class="list-card-details">
                    <span class="list-card-title">제목</span>
                    <div class="badges">
                        <div class="badge">
                            <span class="badge-icon icon-sm icon-comment"></span>
                            <span class="badge-text">1</span>
                        </div>
                        <div class="badge">
                            <span class="badge-icon icon-sm icon-comment"></span>
                            <span class="badge-text">1</span>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default App;