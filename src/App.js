//import { AppComponent } from './app.component';
import './App.css';
import React, { Component } from 'react';
//import fire from 'firebase';
import fire from './fire';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

			landlords: []
		};
	}


	componentDidMount() {
		this.getUserData();
	}


	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state) {
			this.writeUserData();
		}
	}

	writeUserData = () => {
		fire.database()
			.ref("landlord")
			.set(this.state);
		console.log("DATA SAVED");
	};

	getUserData = () => {
		let ref = fire.database().ref("landlord");
		ref.on("value", snapshot => {
			const state = snapshot.val();
			this.setState(state);
		});
	};









	/*handleChange = (evt) => {	//deleted 
		// const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		// this.setState({
		// ...this.state,
		// [evt.target.name]: value
		// });
	}*/
	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state.name);
		//console.log(this.state);
		const landlordRef = fire.database().ref('landlord');


		let name = this.refs.name.value
		let age = this.refs.age.value
		let aboutMe = this.refs.aboutMe.value
		let price = this.refs.price.value
		let gender = this.refs.gender.value
		let housemates = this.refs.housemates.value
		let bed = this.refs.bed.value
		let bath = this.refs.bath.value
		let garage = this.refs.garage.value
		let hasPets = this.refs.hasPets.checked
		let route10 = this.refs.route10.checked
		let route15 = this.refs.route15.checked
		let route16 = this.refs.route16.checked
		let route19 = this.refs.route19.checked
		let route20 = this.refs.route20.checked
		let route22 = this.refs.route22.checked
		let beach = this.refs.beach.checked
		let downtown = this.refs.downtown.checked
		let campus = this.refs.campus.checked

		let uid = this.refs.uid.value



		//this.state.name=this.refs.name.value
		//this.state.age=this.refs.age.value

		if (uid && name && age) {
			const { landlords } = this.state;
			const devIndex = landlords.findIndex(data => {
				return data.uid === uid;
			});
			landlords[devIndex].name = name;
			landlords[devIndex].age = age;
			landlords[devIndex].aboutMe = aboutMe;
			landlords[devIndex].price = price;
			landlords[devIndex].gender = gender;
			landlords[devIndex].housemates = housemates;
			landlords[devIndex].bed = bed;
			landlords[devIndex].bath = bath;
			landlords[devIndex].garage = garage;
			landlords[devIndex].hasPets = hasPets;
			landlords[devIndex].route15 = route15;
			landlords[devIndex].route10 = route10;
			landlords[devIndex].route16 = route16;
			landlords[devIndex].route19 = route19;
			landlords[devIndex].route20 = route20;
			landlords[devIndex].route22 = route22;
			landlords[devIndex].beach = beach;
			landlords[devIndex].downtown = downtown;
			landlords[devIndex].campus = campus;

			this.setState({ landlords });
		} else if (name && age) {
			const uid = new Date().getTime().toString();
			const { landlords } = this.state;
			landlords.push({ uid, name, age });
			this.setState({ landlords });
		}

		this.refs.name.value = ""
		this.refs.age.value = ""
		this.refs.aboutMe.value = ""
		this.refs.price.value = ""
		this.refs.gender.value = ""
		this.refs.housemates.value = ""
		this.refs.bed.value = ""
		this.refs.bath.value = ""
		this.refs.garage.value = ""
		this.refs.hasPets.checked = false
		this.refs.route10.checked = false
		this.refs.route15.checked = false
		this.refs.route16.checked = false
		this.refs.route19.checked = false
		this.refs.route20.checked = false
		this.refs.route22.checked = false
		this.refs.beach.checked = false
		this.refs.downtown.checked = false
		this.refs.campus.checked = false
		this.refs.uid.value = ""

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
								{landlords.map(landlord => (
									<div
										key={landlord.uid} //need a unique key
										className="card float-left"
										style={{ width: "18rem", marginRight: "1rem" }}
									>
										<div className="card-body">
											<h5 className="card-title">{landlord.name}</h5>
											<p className="card-text">{landlord.age}</p>
											<p className="card-text">{landlord.price}</p>
										</div>
									</div>))}
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
						<button type="submit" onClick={this.handleSubmit}>Submit</button>
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
