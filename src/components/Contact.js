import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Avatar from 'avataaars';

export default class Contact extends React.Component {
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}> 
						<h2> Mohamed el-maghraby </h2>
						<h4> Magho </h4>
						<Avatar
							style={{height:'250px'}}
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
						<p style = {{margin:'auto', width:'75%', paddingTop:'1em'}}>
							Lorem Ipsum is simply dummy text of the printing and
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen
							 book. It has survived not only five centuries,
						</p>
					</Cell>

					<Cell col={6}>
						<h2> Contact Me </h2>
						<hr/>
						<div className="contact-list">
							<List>
							    <ListItem>
								    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
								    	<i className="fa fa-phone-square" aria-hidden="true" />
								    	<span> (+20)1207734935 </span>
								    </ListItemContent>
							  	</ListItem>

							  	<ListItem>
								    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
								    	<i className="fa fa-envelope-square" aria-hidden="true" />
								    	<span> (+20)1207734935 </span>
								    </ListItemContent>
							  	</ListItem>

							  	<ListItem>
								    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
								    	<i className="fa fa-facebook-square" aria-hidden="true" />
								    	<span> (+20)1207734935 </span>
								    </ListItemContent>
							  	</ListItem>

							  	<ListItem>
								    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
								    	<i className="fa fa-facebook-square" aria-hidden="true" />
								    	<span> (+20)1207734935 </span>
								    </ListItemContent>
							  	</ListItem>

							</List>
						</div>
					</Cell>
				</Grid> 
			</div>
		);
	}
}