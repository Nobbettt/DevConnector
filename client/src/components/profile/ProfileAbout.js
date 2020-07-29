import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
	profile: {
		bio,
		skills,
		user: { name, first = name.trim().split(' ')[0] },
	},
}) => {
	return (
		<div className='profile-about bg-light p-2'>
			{bio && (
				<Fragment>
					<h2 className='text-primary'>
						{first}
						{first.charAt(first.length - 1) === 's' ? "'s" : 's'} Bio
					</h2>
					<p>{bio}</p>
					<div className='line' />
				</Fragment>
			)}
			<h2 className='text-primary'>Skill Set</h2>
			<div className='skills'>
				{skills.map((skill, index) => (
					<div key={index} className='p-1'>
						<i className='fas fa-check' /> {skill}
					</div>
				))}
			</div>
		</div>
	);
};
ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
