import React,{Component,Fragment} from 'react';
import { Input ,Button,List} from 'antd';
import store from './store/index';
require ('antd/dist/antd.css');



class Todolist extends Component {
    constructor (props){
        super(props);
        this.state = store.getState();
        console.log(store.getState());
        
    }

    render() {
        return (
            <Fragment>
                <div style={{marginTop:'10px',marginLeft:'10px'}}>
                    <Input 
                        value={this.state.inputValue}
                        placeholder='todo list'
                        style={{width:'300px',marginRight:'10px'}}/> 
                    <Button type="primary">提交</Button>
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
}
export default Todolist;