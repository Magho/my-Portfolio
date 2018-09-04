import React from 'react';
import {Grid, Cell} from 'react-mdl';

import ProjectCard from './ProjectCard.js';

export default class ReactProjects extends React.Component {

	render () {
		return(
			<Grid className="projects-grid">
        		<Cell col={4}>
					<ProjectCard 
						cardImageUrl="https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"
					 	cardTitle="my first project" 
					 	cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
					 	cardGithubLink="#"
					 	cardCodepenLink="#"
					 	cardLivedemoLink="#"
					 	cardTitleColor="#fff"
					/>
				</Cell>
        		<Cell col={4}>
					<ProjectCard 
						cardImageUrl="https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"
					 	cardTitle="my first project" 
					 	cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
					 	cardGithubLink="#"
					 	cardCodepenLink="#"
					 	cardLivedemoLink="#"
					 	cardTitleColor="#fff"
					/>
				</Cell>
				<Cell col={4}>
					<ProjectCard 
						cardImageUrl="https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"
					 	cardTitle="my first project" 
					 	cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
					 	cardGithubLink="#"
					 	cardCodepenLink="#"
					 	cardLivedemoLink="#"
					 	cardTitleColor="#fff"
					/>
				</Cell>
				<Cell col={4}>
					<ProjectCard 
						cardImageUrl="https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"
					 	cardTitle="my first project" 
					 	cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia..."
					 	cardGithubLink="#"
					 	cardCodepenLink="#"
					 	cardLivedemoLink="#"
					 	cardTitleColor="#fff"
					/>
				</Cell>
        	</Grid>
		);
	}
}