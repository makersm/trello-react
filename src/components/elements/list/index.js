import React, { Component } from 'react';
import { Card } from '../index';

const InlineStyle = () => (
    <style>{`
        .list {
            background-color: #dfe3e6;
            border-radius: 3px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            max-height: 100%;
            position: relative;
            white-space: normal;
        }
        
        .list-wrapper {
            width: 272px;
            margin: 0 4px;
            height: 100%;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: top;
            white-space: nowrap;
        }
        
        .list-header {
            flex: 0 0 auto;
            padding: 10px 8px 8px;
            position: relative;
            min-height: 20px;
        }
        
        .list-cards {
            flex: 1 1 auto;
            margin-bottom: 0;
            overflow-y: auto;
            overflow-x: hidden;
            margin: 0 4px;
            padding: 0 4px;
            z-index: 1;
            min-height: 0;
        }
        
        .u-clearfix:after {
            clear: both;
            content: "";
            display: table;
        }
        
        .add-cards {
            margin: 0 4px 5px;
        }
        
        .add-card {
            padding: 0 4px;
            text-decoration: none;
        }
    `}</style>
);

/**
 * Trello's List
 */
class List extends Component {
    constructor(props) {
        super(props);
    }

    setCards() {

    }

    render() {
        const {title} = this.props;
        let cards = this.setCards();

        return (
            <div className="list-wrapper">
                <InlineStyle />
                <div className="list">
                    <div className="list-header">
                        {title}
                    </div>
                    <div className="list-cards u-fancy-scrollbar u-clearfix js-list-cards">
                        <Card title="카드1"/>
                    </div>
                    <div className="add-cards">
                        <a href="" className="add-card">Add a Card</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
