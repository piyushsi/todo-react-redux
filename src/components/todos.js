import React from 'react';
import { addTodo, delTodo, checkTodo } from '../actions';
import { connect } from 'react-redux';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: null,
			count: 0,
		};
	}

	add = (e) => {
		if (e.keyCode == 13) {
			this.setState(
				{
					todo: { text: e.target.value, isCompleted: false, id: this.state.count++ },
					count: this.state.count++,
				},
				() => this.props.dispatch(addTodo(this.state.todo))
			);
		}
    };
    del = (e) => {
		 {
			this.setState(
				{
					todo: { text: e.target.innerText, isCompleted: false, id: e.target.id },
					
				},
				() => this.props.dispatch(delTodo(this.state.todo))
			);
		}
    };
    check = (e) => {
        {
           this.setState(
               {
                   todo: { text: e.target.innerText, isCompleted: e.target.checked, id: e.target.id },
                   
               },
               () => this.props.dispatch(checkTodo(this.state.todo))
           );
       }
   };

	render() {
		return (
			<main>
                <header class="header">
      </header>
      
      <section class="content">
          <ul class="list">
          <input class="custom_input" onKeyUp={this.add} />
          
				{
					this.props.todos.map((a) => {
						return <li class="list__item">
                            <label class="label--checkbox" id={a.id}>
                <input onClick={this.check} id={a.id} type="checkbox" class="checkbox" />
                <a>{a.text}</a>
            </label>
                          
                            </li>;
					})
				 }
          
        
          
          
        </ul>
      </section>
      
				
				
			</main>
		);
	}
}
function mapStateToProps(state) {
	return {
		todos: state.todos,
	};
}
export default connect(mapStateToProps)(Todos);
