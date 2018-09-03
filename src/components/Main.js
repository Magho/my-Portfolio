import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing.js';
import Resume from './Resume.js';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Projects from './Projects.js';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing}/>
		<Route path="/resume" component={Resume}/>
		<Route path="/aboutme" component={AboutMe}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/projects" component={Projects}/>
	</Switch>
)

export default Main;
