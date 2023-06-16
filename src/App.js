import cx from 'classnames';
import { Component,} from 'react';

export default class TodoList extends Component {
    constructor(props) {
      super(props);
        this.state = {
          list: [],
          inputVal: '',
          selectedItem: false,
        };
      }

      handleChange = (event) =>{
        this.setState({ inputVal: event.target.value});
        
      }
      handleDone = () => {
        this.setState({ selectedItem: !this.state.selectedItem })
        
        // this.setState{}
      }
      handleAdd = () =>{
        const newTodo = this.state.inputVal
        this.setState(prevState => ({
          list: [...prevState.list, newTodo]
        }));
      }
    render() {
      const { list } = this.state;
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                </div>
                <div>
                    <input
                      type='text' 
                      value={this.state.inputVal} 
                      onChange={this.handleChange} /> 
                    <button onClick={this.handleAdd}>Add</button>
                    <p> {} remaining out of {list.length} tasks</p>
                    <div className='todo-list'>
                        <ul>
                         {list.map((item, index) => (
                          <li key={index} className={this.state.selectedItem ? 'is-done': ''} onClick={this.handleDone}>{item}</li>
                         ))}
                        </ul>
                    </div>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}