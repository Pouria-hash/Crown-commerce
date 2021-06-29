import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import HomeElement from '../components/HomePageComponent/HomeElement';
import '../stylesheet/Home.scss';

const HomeScreen = () => {
	const directory = useSelector((state) => state.directory);

	return (
		<div className="container">
			<h1>Wellcome</h1>

			<div className="homepage">
				<div className="directory-menu">
					{directory.map((section) => (
						<Fragment key={section.id}>
							<HomeElement
								title={section.title}
								image={section.imageUrl}
								link={section.linkUrl}
								size={section.size}
							/>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

// const mapStateToProps = ({ directory }) => ({
// 	sections: directory
// });
export default HomeScreen;
