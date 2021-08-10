import React, { Component } from 'react';

import CoolButton from '../coolButton/CoolButton';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';

class Signup extends Component {
	render() {
		const { style } = this.props;
		const totalStyle = "flex flex-col items-center justify-center font-thin m-2 mx-8 border-b border-secondary-dark " + style;
		return (
		    <>
                <Navbar />
                <FormField label="Name" placeholder="e.g Alex Smith" />
                <FormField label="Email" placeholder="e.g. alexsmith@mail.com" />
                <CoolButton label="Signup" style="button is-rounded my-class is-success is-small" />
            </>
		);
	}
}

export default Signup;