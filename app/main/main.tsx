'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import Score from '../components/score';
import { dummyData } from '../utils/dummyData';
import { selectRandom } from '../utils/selectRandomItems';

export default function Main({ giphy_api }: { giphy_api: string }) {
	const [highScore, setHighScore] = useState(0);
	const [playerScore, setPlayerScore] = useState(0);
	const [selectedCards, setSelectedCards] = useState<string[]>([]);
	const [dummyCardData, setDummyCardData] = useState<{ name: string; image: string }[]>([]);

	const searchKey = 'cat';

	useEffect(() => {
		axios
			.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${giphy_api}&q=${searchKey}}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
			)
			.then((response) => {
				const transformed = response.data.data.map(
					(item: { title: string; images: { original: { url: string } } }) => ({
						name: item.title,
						image: item.images.original.url,
					})
				);

				setDummyCardData(transformed);
			})
			.catch((error) => {
				console.error('error fetching images', error);
				setDummyCardData(dummyData);
			});
	}, [giphy_api]);

	const selectedCardCollection = selectRandom(dummyCardData, 10);

	const addCard = (name: string) => {
		if (selectedCards.includes(name)) {
			console.log('Card already selected');
			setPlayerScore(0);
			// shuffle cards
			setSelectedCards([]);
		} else {
			const newScore = playerScore + 1;
			setPlayerScore(newScore);
			setHighScore((prevHighScore) => Math.max(prevHighScore, newScore));
			const updatedCards = [...selectedCards, name];
			console.log('updated selected cards', updatedCards);
			setSelectedCards(updatedCards);
		}
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
			<div className="flex justify-between w-full max-w-5xl mb-6 px-2 text-gray-700">
				<Score text="High Score" score={highScore} />
				<Score text="Score" score={playerScore} />
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-5xl">
				{selectedCardCollection.map((card, idx) => (
					<Card cardName={card.name} key={idx} cardImage={card.image} addCardToSelected={addCard} />
				))}
			</div>
		</div>
	);
}
