import React, { Component } from 'react';
import { CheckList, CheckListItem, Actions, Activity, AddComment } from '../index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faFile, faCheckSquare, faComments } from '@fortawesome/free-regular-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

import {CheckListContainer} from '../../../containers';

const InlineStyle = () => (
    <style>{`
        .window-overlay {
            align-items: flex-start;
            background-color: rgba(0,0,0,.64);
            display: none;
            height: 100%;
            justify-content: center;
            left: 0;
            overflow-y: auto;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 20;
        }

        .window {
            background-color: #ebeef0;
            border-radius: 2px;
            display: none;
            margin: 48px 0 80px;
            position: relative;
            width: 768px;
            z-index: 25;
        }

        .dialog-close-button {
            border-radius: 50%;
            text-align: center;
            font-size: 20px;
            position: absolute;
            top: 0;
            right: 0;
            height: 32px;
            overflow: hidden;
            padding: 4px;
            margin: 4px;
            width: 32px;
            z-index: 2;
            transition: background-color .1s,color .1s;
        }
        
        .card-detail-window {
            min-height: 600px;
        }

        .window-header {
            margin: 12px 40px 8px 56px;
            min-height: 32px;
            position: relative;
            z-index: 1;
        }
        
        .window-header-icon {
            left: -34px;
            position: absolute;
            top: 2px;
        }
        
        .window-title {
        }
        
        .window-header-inline-content {
            cursor: default;
            display: inline-block;
            margin: 4px 8px 4px 2px;
        }
        .quiet, .quiet a {
            color: #6b808c;
        }
        
        .window-main-col {
            float: left;
            margin: 0;
            overflow-x: hidden;
            overflow-y: -webkit-paged-y;
            min-height: 24px;
            padding: 0 8px 8px 16px;
            position: relative;
            width: 552px;
            z-index: 0;
        }
        
        .window-module {
            clear: both;
            margin-bottom: 24px;
            position: relative;
        }
        
        .window-module-title {
            border-bottom: 1px solid rgba(9,45,66,.13);
            position: relative;
            margin: 0 0 4px 40px;
        }

        .window-module-title-no-divider {
            border-bottom: none;
        }
        
        .window-module-title-icon {
            left: -33px;
            position: absolute;
            top: 6px;
        }
        
        .window-module-title h3 {
            display: inline-block;
            width: auto;
            margin: 0;
            min-height: 18px;
            min-width: 40px;
        }
        
        .window-sidebar {
            float: right;
            padding: 8px 16px 8px 8px;
            width: 168px;
            z-index: 10;
            height: -webkit-fill-available;
        }
    `}</style>
);

/**
 * Css display type by status(open / close)
 * @type {{open: {windowOverlayStyle: string, windowStyle: string}, close: {windowOverlayStyle: string, windowStyle: string}}}
 */
const type = {
    open : {
        windowOverlayStyle: "flex",
        windowStyle: "block",
    },
    close : {
        windowOverlayStyle: "",
        windowStyle: "",
    }
};

/**
 * Card Detail Modal
 */
class ModalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : "open",
        };
        this.closeModal = this.closeModal.bind(this); //### Close When Clicked Modal Close button
        this.closeModalIfOverlayed = this.closeModalIfOverlayed.bind(this); //### Close When Click Modal Outside Part
        this.setModalRef = this.setModalRef.bind(this); //### Modal Ref
    }

    /**
     * Close Modal When Clicked Modal Close Button
     */
    closeModal() {
        this.setState({
            status: "close"
        });
    }

    /**
     * Close Modal When Clicked Modal Outside Part
     * @param event
     */
    closeModalIfOverlayed(event) {
        if(this.modalRef && !this.modalRef.contains(event.target)) {
            this.setState({
                status: "close"
            });
        }
    }

    /**
     * Modal Ref Setter
     * @param modal
     */
    setModalRef(modal) {
        this.modalRef = modal;
    }

    render() {
        const {status} = this.state;

        return (
            <div className="window-overlay" style={{display: type[status].windowOverlayStyle}} onClick={this.closeModalIfOverlayed}>
                <InlineStyle />
                <div className="window" style={{display: type[status].windowStyle}} ref={this.setModalRef}>
                    <div className="window-wrapper">
                        <a href="javascript:;" className="icon-lg dialog-close-button" onClick={this.closeModal}>
                            <FontAwesomeIcon icon={faTimesCircle}/>
                        </a>
                    </div>
                    <div className="card-detail-window u-clearfix">
                        <div className="window-header mod-card-detail-icons-smaller">
                            <span className="window-header-icon icon-lg icon-card">
                                <FontAwesomeIcon icon={faTrello} />
                            </span>
                            <div className="window-title">하이하이</div>
                            <div className="window-header-inline-content quiet js-current-list">list Doing</div>
                        </div>
                        <div className="window-main-col">
                            <div className="window-module">
                                <div className="window-module-title window-module-title-no-divider">
                                    <span className="icon-lg window-module-title-icon">
                                        <FontAwesomeIcon icon={faFile} />
                                    </span>
                                    <h3>Description</h3>
                                </div>
                            </div>
                            <div className="checklist-list window-module">
                                <CheckListContainer />
                            </div>
                            <div>
                                <AddComment />
                                <Activity />
                            </div>
                        </div>
                        <div className="window-sidebar">
                            <Actions title="ADD TO CARD" />
                            <Actions title="ACTIONS" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalDetail;
