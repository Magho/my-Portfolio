import React from 'react';
import { Grid, Cell } from 'react-mdl';
	import Avatar from 'avataaars';

export default class Landing extends React.Component {
	render(){
		return(
			<div style={{ width:'100%', margin:'auto' }}> 
				<Grid className= "landing-color">
					<Cell col={12} >
						<Avatar
						  style={{height:'500px', position :'center'}}
						  avatarStyle='Circle'
						  topType='ShortHairShortFlat'
						  accessoriesType='Blank'
						  hairColor='Black'
						  facialHairType='BeardLight'
						  facialHairColor='Brown'
						  clotheType='ShirtCrewNeck'
						  clotheColor='Gray02'
						  eyeType='Wink'
						  eyebrowType='Default'
						  mouthType='Smile'
						  skinColor='Light'
						/>					
					</Cell>
				</Grid>
			</div>
		);
	}
}