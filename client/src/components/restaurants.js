import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_RESTAURANTS = gql`
	query GetRestaurants {
		restaurants {
			id
		}
	}
`;

const GET_RESTAURANT = gql`
	query GetRestaurant($id: ID!) {
		restaurant(id: $id) {
			id
			name
			bgImag
			address
			owner
			category
		}
	}
`;

function Restaurants() {
	const [contentId, setContentId] = useState('');

	function AsideItems() {
		const { loading, error, data } = useQuery(GET_RESTAURANTS);
		if (loading) return <p className="loading">Loading...</p>;
		if (error) return <p className="error">Error :(</p>;
		return (
			<ul>
				{data.restaurants.map(({ id }) => {
					return (
						<li
							key={id}
							className={'Item' + (contentId === 'id' ? 'on' : '')}
							onClick={() => {
								setContentId(id);
							}}
						>
							<span>{contentId === id ? '🔲 ' : '⬛ '}</span>
							{id}
						</li>
					);
				})}
			</ul>
		);
	}

	function MainContents() {
		const { loading, error, data } = useQuery(GET_RESTAURANT, {
			variables: { id: contentId },
		});

		if (loading) return <p className="loading">Loading...</p>;
		if (error) return <p className="error">Error :(</p>;
		if (contentId === '')
			return <div className="restaurantWrapper">Select Restaurant</div>;

		return (
			<div className="restaurantWrapper">
				<img src={data.restaurant.bgImag} alt=""></img>
				<h2>{data.restaurant.name}</h2>
				<p>{data.restaurant.category}</p>
				<p>{data.restaurant.address}</p>
				<p>{data.restaurant.owner}</p>
			</div>
		);
	}

	return (
		<div id="restaurants" className="component">
			<aside>{AsideItems()}</aside>
			<section className="contents">{MainContents()}</section>
		</div>
	);
}

export default Restaurants;
