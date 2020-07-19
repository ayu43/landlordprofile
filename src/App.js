//import { AppComponent } from './app.component';
import './App.css';
import React, { Component } from 'react';
//import fire from 'firebase';
import fire from './fire';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			aboutMe: '',
			price: '',
			gender: '',
			housemates: '',
			bed: '',
			bath: '',
			garage: '',
			hasPets: false,

			route10: false,
			route15: false,
			route16: false,
			route19: false,
			route20: false,
			route22: false,
			beach: false,
			downtown: false,
			campus: false
		};
	}
	handleChange = (evt) => {
		// const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		// this.setState({
		// ...this.state,
		// [evt.target.name]: value
		// });
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const landlordRef = fire.database().ref('landlord');
		console.log(this.refs.name.value)
		const landlords = this.state
		landlords.name=this.refs.name.value
		landlords.age=this.refs.age.value
		this.setState(landlords)
		// this.setState({
		// 	//name: this.refs.name.value,
		// 	name: "abc",
		// 	age: this.refs.age.value,
		// 	aboutMe: this.refs.aboutMe.value,
		// 	price: this.refs.price.value,
		// 	gender: this.refs.gender.value,
		// 	housemates: this.refs.housemates.value,
		// 	bed: this.refs.bed.value,
		// 	bath: this.refs.bath.value,
		// 	garage: this.refs.garage.value,
		// 	hasPets: this.refs.hasPets.checked,
		// 	route10: this.refs.route10.checked,
		// 	route15: this.refs.route15.checked,
		// 	route16: this.refs.route16.checked,
		// 	route19: this.refs.route19.checked,
		// 	route20: this.refs.route20.checked,
		// 	route22: this.refs.route22.checked,
		// 	beach: this.refs.beach.checked,
		// 	downtown: this.refs.downtown.checked,
		// 	campus: this.refs.campus.checked

		// })
		console.log(this.state.name)
		console.log(this.state.age)
		//this.state.name=this.refs.name.value
		//this.state.age=this.refs.age.value


		const landlord = {
			name: this.state.name,
			age: this.state.age,
			aboutMe: this.state.aboutMe,
			price: this.state.price,
			gender: this.state.gender,
			housemates: this.state.housemates,
			bed: this.state.bed,
			bath: this.state.bath,
			garage: this.state.garage,
			hasPets: this.state.hasPets,

			route10: this.state.route10,
			route15: this.state.route15,
			route16: this.state.route16,
			route19: this.state.route19,
			route20: this.state.route20,
			route22: this.state.route22,
			beach: this.state.beach,
			downtown: this.state.downtown,
			campus: this.state.campus
		}
		console.log(landlord.name)
		console.log(landlord.age)
		landlordRef.push(landlord);
		this.refs.name.value=''
		this.refs.age.value=''
		// this.setState({
		// // name: '',
		// // age: '',
		// aboutMe: '',
		// price: '',
		// gender: '',
		// housemates: '',
		// bed: '',
		// bath: '',
		// wantGarage: false,
		// noGarage: false,
		// hasPets: false,

		// route10: false,
		// route15: false,
		// route16: false,
		// route19: false,
		// route20: false,
		// route22: false,
		// beach: false,
		// downtown: false,
		// campus: false
		// });
	}
	render() {
		const landlords = this.state;
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<div className="App">
						<header className="Profile">
							<h1>Your Profile</h1>
						</header>
						<header className="Names">
							<label>Name:&nbsp;</label>
							<input type="text"
								id="name"
								name="name"
								ref="name"
								// onChange = {this.handleChange}
								//value={this.state.firstName}
								placeholder="Name" />
						</header>
						<br />
						<br />
						<div className="row">
							<div className="col-xl-12">
								<div
									key={123}
									className="card float-left"
									style={{ width: "18rem", marginRight: "1rem" }}
								>
									<div className="card-body">
										<h5 className="card-title">{landlords.name}</h5>
										<p className="card-text">{landlords.age}</p>
									</div>
								</div>
							</div>
						</div>
						<header className="AGE">
							<label>Age:</label>
							<br />
							<input type="text"
								id="age"
								name="age"
								min="14"
								ref="age"
							// value = {this.state.age}
							// onChange = {this.handleChange}
							/>
						</header>
						<br />
						<br />
						<header className="AboutMe">
							<label>About Me:</label>
							<br />
							<textarea
								id="aboutMe"
								name="aboutMe"
								placeholder="Tell the renters a little bit about yourself here"
								rows="5"
								cols="50"
								ref="aboutMe"
							//value = {this.state.aboutMe}
							//onChange = {this.handleChange}
							/>
							{/*</textarea>*/}
						</header>
						<br />
						<br />
						<h3 className="Preferences">Please indicate your housing preferences in this section:</h3>
						<br />
						<header className="PriceRange">
							<label>Price:&nbsp;$</label>
							<input
								type="text"
								name="price"
								id="price"
								ref="price"
								//onChange = {this.handleChange}
								//value = {this.state.price}
								placeholder="price" />
						</header>
						<br />
						<br />
						<header className="gender">
							<label>Gender:&nbsp;</label>
							<input
								type="text"
								name="gender"
								id="gender"
								ref="gender"
								//onChange = {this.handleChange}
								//value = {this.state.gender}
								placeholder="gender" />
						</header>
						<br />
						<br />
						<header className="Housemates">
							<label>Number of Housemates:&nbsp;</label>
							<input
								type="text"
								id="housemates"
								name="housemates"
								ref="housemates"
								//onChange = {this.handleChange}
								//value = {this.state.housemates}
								placeholder="number of Housemates" />
						</header>
						<br />
						<br />
						<header className="Rooms">
							<label>Number of Bedrooms:&nbsp;</label>
							<input
								type="text"
								id="bed"
								name="bed"
								ref="bed"
								//onChange = {this.handleChange}
								//value = {this.state.bed}
								placeholder="number of Bedrooms" />
						</header>
						<br />
						<br />
						<header className="Bathrooms">
							<label>Number of Bathrooms:&nbsp;</label>
							<input
								type="text"
								id="bath"
								name="bath"
								ref="bath"
								//onChange = {this.handleChange}
								//value = {this.state.bath}
								placeholder="number of Bathrooms" />
						</header>
						<br />
						<br />
						<header className="Garage">
							<label>Number of Parking Spaces:&nbsp;</label>
							<input
								type="text"
								id="garage"
								name="garage"
								ref="garage"
								//onChange = {this.handleChange}
								//value = {this.state.bath}
								placeholder="number of Bathrooms" />
						</header>
						<br />
						<br />
						<header className="Pets">
							<label>Do you have any pets?&nbsp;&nbsp;</label>
							<input
								type="checkbox"
								id="hasPets"
								name="hasPets"
								ref="hasPets"
							//onChange = {this.handleChange}
							//checked = {this.state.hasPets}
							/>
							<label>Yes&nbsp;&nbsp;</label>
						</header>
						<br />
						<br />
						<header className="Bus">
							<label>Nearby Bus Routes:</label>
							<br />
							<input
								type="checkbox"
								id="route10"
								name="route10"
								ref="route10"
							//onChange = {this.handleChange}
							//checked = {this.state.route10}
							/>
							<label>Route 10</label>
							<br />
							<input
								type="checkbox"
								id="route15"
								name="route15"
								ref="route15"
							//onChange = {this.handleChange}
							//checked = {this.state.route15}
							/>
							<label>Route 15</label>
							<br />
							<input
								type="checkbox"
								id="route16"
								name="route16"
								ref="route16"
							//onChange = {this.handleChange}
							//checked = {this.state.route16}
							/>
							<label>Route 16</label>
							<br />
							<input
								type="checkbox"
								id="route19"
								name="route19"
								ref="route19"
							//onChange = {this.handleChange}
							//checked = {this.state.route19}
							/>
							<label>Route 19</label>
							<br />
							<input
								type="checkbox"
								id="route20"
								name="route20"
								ref="route20"
							//onChange = {this.handleChange}
							//checked = {this.state.route20}
							/>
							<label>Route 20</label>
							<br />
							<input
								type="checkbox"
								id="route22"
								name="route22"
								ref="route22"
							//onChange = {this.handleChange}
							//checked = {this.state.route22}
							/>
							<label>Route 22</label>
						</header>
						<br />
						<br />
						<header className="Location">
							<label>Location:</label>
							<br />
							<input
								type="checkbox"
								id="beach"
								name="beach"
								ref="beach"
							//onChange = {this.handleChange}
							//checked = {this.state.beach}
							/>
							<label>Near the Beach</label>
							<br />
							<input
								type="checkbox"
								id="downtown"
								name="downtown"
								ref="downtown"
							//onChange = {this.handleChange}
							//checked = {this.state.downtown}
							/>
							<label>Near Downtown</label>
							<br />
							<input
								type="checkbox"
								id="campus"
								name="campus"
								ref="campus"
							//onChange = {this.handleChange}
							//checked = {this.state.campus}
							/>
							<label>Near Campus</label>
						</header>
						<br />
						<br />
						<button type="submit">Submit</button>
						<br />
						<br />
						<br />
						<br />
					</div>
				</form>
			</React.Fragment>
		);
	}
}
export default App;
