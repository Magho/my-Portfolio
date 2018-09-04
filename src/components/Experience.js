import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Experience extends Component {
	render() {
		return (
			<Grid>
				
				<Cell col={4}>
					<p style={{fontSize:'18px' ,fontFamily:'Raleway'}}> {this.props.startYear} - {this.props.endYear} </p>	
				</Cell>

				<Cell col={8}>
					<h4 style={{marginTop : '0px', fontFamily:'Oxygen', fontWeight:'bold'}} > {this.props.jobName} </h4>
					<p style={{fontSize:'15px' ,fontFamily:'Raleway'}} > {this.props.jobDescription} </p>
				</Cell>
			
			</Grid>
		);
	}
}
