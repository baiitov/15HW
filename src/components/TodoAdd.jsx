import { Component } from 'react'
import './TodoAdd.css'
class User extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
		}
	}
	InputHandler(e) {
		this.setState({
			input: e.target.value,
		})
	}

	FormSumbitHandler(e) {
		e.preventDefault()
		const newData = {
			input: this.state.input,
			data: new Date().toLocaleDateString(),
			id: Math.random().toString(),
			completed: false,
		}
		this.props.onGetData(newData)
	}

	render() {
		return (
			<form
				className='forma'
				onSubmit={this.FormSumbitHandler.bind(this)}
			>
				<input className='inp' type='text' onChange={this.InputHandler.bind(this)} />
				<button className='btn'>ADD</button>
			</form>
		)
	}
}
export default User
