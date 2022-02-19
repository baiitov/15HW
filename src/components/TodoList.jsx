import { Component } from 'react'
import './TodoList.css'
class TodoList extends Component {
	// constructor(){
	//     super()
	//     this.state= {
	//      showDelete: false
	//     }
	// }

	ChekedHandler(e) {
		this.setState(
			this.props.data.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
		console.log(this.props.data)
	}

	render() {
		return (
			<ul>
				{this.props.data.map((el) => {
					return (
						<li className='block' key={el.id}>
							<div className={el.completed ? 'done' : 'task'}>
								<h3>{el.input}</h3>
								<p className='data'>{el.data}</p>
								<input
								className='checkbox'
									onChange={this.ChekedHandler.bind(this)}
									checked={el.completed}
									id={el.id}
									type='checkbox'
								/>
							</div>

							<button
								onClick={(e) => this.props.onFilterData(e)}
								id={el.id}
								className='btn'
							>
								delete
							</button>
						</li>
					)
				})}
			</ul>
		)
	}
}
export default TodoList
