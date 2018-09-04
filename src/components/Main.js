import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing.js';
import Resume from './navbarSections/Resume.js';
import Contact from './navbarSections/Contact.js';
import Projects from './navbarSections/Projects.js';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing}/>
		<Route path="/resume" component={Resume}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/projects" component={Projects}/>
	</Switch>
)

export default Main;
