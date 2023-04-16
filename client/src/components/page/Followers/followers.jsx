import './Followers.css'
import React, {useState, useEffect}from'react';


const Followers = () => {
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
        fetch('http://localhost:4000/follower/followers')
            .then(response => response.json())
            .then(data => {
				console.log(data)
                setFollowers(data.followers);
				console.log(data.followers)
            })
            .catch(error => {
                console.error('Failed to fetch follower details', error);
            });
    }, []);

	return(
		<div className='Followers-container'>
            <div className='page-heading'>FOLLOWERS</div>
			<div className='follower-card-container-main'>
				{followers.map(follower => (
					<div key={follower.id} className='follower-card-container'>
						<div className='follower-card-name'>{follower.followername}</div>
						<div className='follower-card-designation'>{follower.designation}</div>
						<div className='follower-card-follower'>{follower.followers} Followers</div>
						<div className='follower-card-button'><button className='follower-card-button-follow'>Unfollow</button></div>
					</div>
				))}
			</div>
        </div>
	)
}
export default Followers;