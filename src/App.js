import React, { Component } from 'react';
import { List, ModalDetail } from './components';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    }

    setLists() {

    }
    render() {
    let lists = this.setLists();

    return (
       <div>
            <List title="제목"/>
            <ModalDetail />
       </div>
    );
}
}

export default App;
