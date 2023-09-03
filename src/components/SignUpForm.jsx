import React from 'react'
import { useState } from 'react';
import { signUp } from '../utilities/users-service'

const SignUpForm = () => {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
		error: ''
	});

	const disable = formData ? formData.password !== formData.confirm : false;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = async (e) =>  {

		// Prevent form from being submitted to the server
		e.preventDefault()
		try {
			// We don't want to send the 'error' or 'confirm' property,
			// so let's make a copy of the state object, then delete them
			const newFormData = {...formData};
			delete newFormData.error;
			delete newFormData.confirm;
			// or
			// const {name, email, password} = formData
			const user = await signUp(newFormData);
			console.log(await user);
			console.log("inside handleSubmit");
		} catch(err) {
			// An error occurred
			setFormData({...formData, error: 'Sign Up Failed - Try Again'})
		}
	}

	return (
		<div>
			<h2>SignUpForm</h2>

			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Name</label>
					<input type="text" name="name" value={formData.name} onChange={handleChange} required />
					<label>Email</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} /* required */ />
					<label>Password</label>
					<input type="password" name="password" value={formData.password} onChange={handleChange} required />
					<label>Confirm</label>
					<input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
					<button type="submit" disabled={disable}>SIGN UP</button>
				</form>
			</div>

			<p className="error-message">&nbsp;{formData.error}</p>

		</div>
	)
}

export default SignUpForm


