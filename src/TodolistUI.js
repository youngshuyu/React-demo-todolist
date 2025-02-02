import React,{Fragment} from 'react';
import { Input ,Button,List} from 'antd';
require ('antd/dist/antd.css');

const TodolistUI = (props) => {
    return (
        <Fragment>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <Input 
                value={props.inputValue}
                placeholder='todo list'
                style={{width:'300px',marginRight:'10px'}}
                onChange={props.handleInputChange}/> 
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    </Fragment> 
    )
}

// class TodolistUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div style={{marginTop:'10px',marginLeft:'10px'}}>
//                     <Input 
//                         value={this.props.inputValue}
//                         placeholder='todo list'
//                         style={{width:'300px',marginRight:'10px'}}
//                         onChange={this.props.handleInputChange}/> 
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                     <List
//                         style={{marginTop:'10px',width:'300px'}}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (
//                             <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//                                 {item}
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </Fragment>
//         )
//     }
// }

export default TodolistUI