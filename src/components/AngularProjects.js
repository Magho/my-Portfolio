import React from 'react';
import {Grid, Cell} from 'react-mdl';

import ProjectCard from './ProjectCard.js';

export default class AngularProjects extends React.Component {

	render () {
		return(
			<Grid className="projects-grid">
        		<Cell col={4}>
					<ProjectCard 
						cardImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6E6hjcJ_pm1xTf1bd9gV1NVlyLYIN_DLq_1cxsjExu4c3Yzb"
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
						cardImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6E6hjcJ_pm1xTf1bd9gV1NVlyLYIN_DLq_1cxsjExu4c3Yzb"
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
						cardImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6E6hjcJ_pm1xTf1bd9gV1NVlyLYIN_DLq_1cxsjExu4c3Yzb"
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
						cardImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6E6hjcJ_pm1xTf1bd9gV1NVlyLYIN_DLq_1cxsjExu4c3Yzb"
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