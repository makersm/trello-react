import React, {Component} from 'react';

class AddCheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Checklist',
        }

        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.onHandleClick = this.onHandleClick.bind(this);
    }
z
    onInputValueChange(event) {
        this.setState({
            ...this.state,
            inputValue: event.target.value
        });
    }

    onHandleClick() {
        const value = this.state.inputValue;
        this.props.onSubmit(value);
    }

    render() {
        const {onSubmit} = this.props;
        const {inputValue} = this.state;

        return (
            <div>Title
                <input type="text" defaultValue={inputValue} onChange={this.onInputValueChange}/>
                <input className="primary wide confirm" value="Add" type="submit" onClick={this.onHandleClick}/>
            </div>
        );
    }



};

export default AddCheckList;