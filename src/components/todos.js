import React from 'react';
import { addTodo, delTodo, checkTodo } from '../actions';
import { connect } from 'react-redux';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: null,
            count: 0,
            active:null
		};
	}

	add = (e) => {
		if (e.keyCode == 13) {
			this.setState(
				{
					todo: { text: e.target.value, isCompleted: false, id: this.state.count++ },
                    count: this.state.count++,
                    active:null
				},
				() => this.props.dispatch(addTodo(this.state.todo))
			);
			e.target.value = '';
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
    active=(e)=>{
        {this.setState({
            active:this.props.todos.map(a=>{
                if(a.isCompleted==true){
                    return a
                }
                else{
    
                }
            }).filter(a=>{
                return a!=undefined})
        })}
    }
    completed=(e)=>{
        {this.setState({
            active:this.props.todos.map(a=>{
                if(a.isCompleted==false){
                    return a
                }
                else{
    
                }
            }).filter(a=>{
                return a!=undefined})
        })}
    }
    all=(e)=>{
        {this.setState({
            active:null})}
    }

	render() {
		return (
			<main>
				<header class="header"></header>

				<section class="content">
					<ul class="list">
						<input class="custom_input" onKeyUp={this.add} placeholder="Add todo" />

						{(this.state.active==null)?this.props.todos.map((a) => {
							return (
								<li class="list__item">
									<label class="label--checkbox" id={a.id}>
                                        {(a.isCompleted)?<input onClick={this.check} id={a.id} type="checkbox" class="checkbox" checked/>:<input onClick={this.check} id={a.id} type="checkbox" class="checkbox" />}
										<a className={`${a.isCompleted}`}>{a.text}</a>
									</label>
									<button id={a.id} onClick={this.del} className="delete">
										x
									</button>
								</li>
							);
                        }):
                        this.state.active.map((a) => {
							return (
								<li class="list__item">
									<label class="label--checkbox" id={a.id}>
                                    {(a.isCompleted)?<input onClick={this.check} id={a.id} type="checkbox" class="checkbox" checked/>:<input onClick={this.check} id={a.id} type="checkbox" class="checkbox" />}
										<a className={`${a.isCompleted}`}>{a.text}</a>
									</label>
									<button id={a.id} onClick={this.del} className="delete">
										x
									</button>
								</li>
							);
                        })
                    }
					</ul>
					<div className="all_btn">
						<button onClick={this.all} class="pure-material-button-contained">All</button>
						<button onClick={this.completed} class="pure-material-button-contained">Active</button>
						<button onClick={this.active} class="pure-material-button-contained">Completed</button>
					</div>
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
