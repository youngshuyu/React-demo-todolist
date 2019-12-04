import React,{Component,Fragment} from 'react';
import { Input ,Button,List} from 'antd';
import store from './store/index';
require ('antd/dist/antd.css');



class Todolist extends Component {
    constructor (props){
        super(props);
        this.state = store.getState();
        console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <Fragment>
                <div style={{marginTop:'10px',marginLeft:'10px'}}>
                    <Input 
                        value={this.state.inputValue}
                        placeholder='todo list'
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.handleInputChange}/> 
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                    <List
                        style={{marginTop:'10px',width:'300px'}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </Fragment>
        )
    }
    handleInputChange(e) {
        const action = {
            type : 'change_input_value',
            value : e.target.value
        }
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        const action = {
            type : 'add_todo_item'
        }
        store.dispatch(action);
    }
}
export default Todolist;