import React, {Component,Fragment} from 'react';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    shouldComponentUpdate(nextProps,nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }else {
            return false;
        }
    }
    
    render() {
        console.log('render');
        
        const {content} = this.props
        return (
            <Fragment>
                <li
                 onClick = {this.handleDelete}
                 index = {this.props.index}
                >
                    {content}
                </li>
            </Fragment>
        )
    }
    handleDelete() {
        const {deleteItem,index} = this.props;
        deleteItem(index);
    }
}
export default ListItem;