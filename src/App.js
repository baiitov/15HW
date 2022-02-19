import { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import User from './components/TodoAdd'

class App extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
		}
	}

	addTodoHandler(newData) {
		this.setState({ data: [...this.state.data, newData] })
		console.log(newData)
	}
	deleteHandler(e) {
		this.setState({
			data: this.state.data.filter((el) => el.id !== e.target.id),
		})
		console.log('dfsf')
	}
	render() {
		return (
			<div className='App'>
				<User onGetData={this.addTodoHandler.bind(this)} />
				<TodoList
					data={this.state.data}
					onFilterData={this.deleteHandler.bind(this)}
				/>
			</div>
		)
	}
}

export default App
