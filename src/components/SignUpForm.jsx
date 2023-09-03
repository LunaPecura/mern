import React from 'react'
import { useState } from 'react';

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
		setFormData({ ...formData, [e.target.name]: e.target.value, });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('ALERT', formData);
	}

	return (
		<div>
			<h2>SignUpForm</h2>

			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Name</label>
					<input type="text" name="name" value={formData.name} onChange={handleChange} required />
					<label>Email</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} required />
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


