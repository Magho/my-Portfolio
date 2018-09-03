import React from 'react';
import { Grid, Cell } from 'react-mdl';
	import Avatar from 'avataaars';

export default class Landing extends React.Component {
	render(){
		return(
			<div style={{ width:'100%', margin:'auto' }}> 
				<Grid className= "landing-color">
					<Cell col={12}>
						
						<Avatar
							style={{paddingTop:'90px', height:'23em', width:'23em'}}
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
						
						<div className="banner-text">
							<h1> Full stack web developer </h1>
							<hr/>
							<p> HTML/CSS | Bootstrap | JS | Nodejs | Angular | React </p>
							<div className="social-links" >

								{/* Linked In */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* facebook */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-facebook-square " aria-hidden="true" />
								</a>

							</div>
						</div>

					</Cell>
				</Grid>
			</div>
		);
	}
}