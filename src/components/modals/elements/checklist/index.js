import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { CheckListItem, EditableText, AddText } from '../index';

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
       
       .delete-checklist {
            float:right;
        }
    `}</style>
);

const STATUS = {
    ALIVE: 1,
    REMOVE: 2,
};

/**
 * Card Detail Modal's CheckList
 */
class CheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: STATUS.ALIVE,
            percent: "0",
            checkListItemTotal: 0,
            checkListItemDone: 0,
            checkListItems: [{
                title: '',
                status: ''
            }],
        }

        this.setPercentageChange = this.setPercentageChange.bind(this);
        this.getCheckListItems = this.getCheckListItems.bind(this);
        this.removeThis = this.removeThis.bind(this);
        this.addNewCheckListItem = this.addNewCheckListItem.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    componentDidMount() {

    }

    /**
     * Pass to checklistitem to change state :: percentage
     * @param status
     */
    setPercentageChange(status) {
        let {checkListItemTotal, checkListItemDone} =  this.state;

        switch (status) {
            case 'checked':
                checkListItemDone++;
                break;
            case 'unchecked':
                checkListItemDone--;
                break;
        }

        const percent = checkListItemTotal > 0 ? Math.floor(checkListItemDone / checkListItemTotal * 100) : 0;
        this.setState({
            ...this.state,
            percent,
            checkListItemDone
        });
    }

    getCheckListItems() {
        return this.state.checkListItems.map((data, index) => {
            if(data.title) {
                return (
                    <CheckListItem title={data.title} status={data.status} key={index} handleClick={this.setPercentageChange} onDelete={this.handleItemDelete}/>
                );
            }
        });
    }

    handleItemDelete(status) {
        let {checkListItemTotal, checkListItemDone} =  this.state;

        switch (status) {
            case 'checked':
                checkListItemDone--;
                break;
            case 'unchecked':
                break;
        }

        checkListItemTotal--;
        const percent = checkListItemTotal > 0 ? Math.floor(checkListItemDone / checkListItemTotal * 100) : 0;
        this.setState({
            ...this.state,
            percent,
            checkListItemDone,
            checkListItemTotal
        });
    }

    removeThis() {
        this.setState({
            ...this.state,
            status: STATUS.REMOVE,
        });
    }

    addNewCheckListItem(value) {
        const {checkListItems, checkListItemDone} = this.state;
        let {checkListItemTotal} = this.state;
        checkListItems.push({
            title: value,
            status: 'unchecked',
        });

        checkListItemTotal = checkListItemTotal+1;
        const percent = checkListItemTotal > 0 ? Math.floor(checkListItemDone / checkListItemTotal * 100) : 0;
        this.setState((state) => ({
            ...state,
            checkListItemTotal: state.checkListItemTotal+1,
            percent,
            checkListItems
        }));
    }

    render() {
        const {status, percent} = this.state;
        const {title} = this.props;
        const checkListItems = this.getCheckListItems();

        return (
            <div className="checklist" style={{'display': status === STATUS.ALIVE ? 'block': 'none'}}>
                <InlineStyle />
                <div className="window-module-title window-module-title-no-divider u-clearfix">
                    <span className="window-module-title-icon icon-lg icon-checklist">
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </span>
                    <EditableText text={title}/>
                    <a href="javascript:;" className="quiet delete-checklist" onClick={this.removeThis} >
                        Delete..
                    </a>
                </div>
                    <div className="checklist-progress">
                        <span className="checklist-progress-percentage">{`${percent}%`}</span>
                        <div className="checklist-progress-bar" >
                        <div className="checklist-progress-bar-current checklist-progress-bar-current-complete" style={{width: `${percent}%`}}></div>
                    </div>
                    <div className="checklist-items-list">
                        {checkListItems}
                        <hr/>
                        <div style={{'marginLeft': '40px'}}>
                            <AddText onSubmit={this.addNewCheckListItem}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckList;
