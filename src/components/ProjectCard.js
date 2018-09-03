import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, IconButton } from 'react-mdl';	

export default class ProjectCard extends React.Component {

	render () {

		const divStyle = {
			color: `${this.props.cardTitleColor}`,
			height: '250px',
			background: `url(${this.props.cardImageUrl}) center / cover`,
			backgroundRepeat  : 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize:'contain',
        };

		return(
			<Card shadow={0} style={{width: '350px', margin: 'auto', boxShadow: '10px 10px 5px #aaaaaa'}}>
			    <CardTitle style={divStyle} >
			    	{this.props.cardTitle}
			    </CardTitle>
			    <CardText>
			    	{this.props.cardText}
			    </CardText>
			    <CardActions border>
			        <a href={this.props.cardGithubLink} target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
			        <a href={this.props.cardCodepenLink} target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
			        <a href={this.props.cardLivedemoLink} target="_blank" rel="noopener noreferrer"><Button colored>LiveDemo</Button></a>
			    </CardActions>
			</Card>
		);
	}
}