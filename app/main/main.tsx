'use client';

import { useEffect, useState } from 'react';
import Card from '../components/card';
import Score from '../components/score';
import { dummyData } from '../utils/dummyData';
import { selectRandom } from '../utils/selectRandomItems';

export default function Main() {
	const [highScore, setHighScore] = useState(0);
	const [playerScore, setPlayerScore] = useState(0);
	const [selectedCards, setSelectedCards] = useState<string[]>([]);
	const [dummyCardData, setDummyCardData] = useState<{ name: string; image: string }[]>([]);

	useEffect(() => {
		// fetch set of cards once -- maybe like 20 cards
		setDummyCardData(dummyData);
	}, []);

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
		<div className="flex flex-col items-end">
			<Score text={'High Score'} score={highScore} />
			<Score text="Score" score={playerScore} />
			<div className="bg-white grid grid-cols-5 gap-2 mt-5 self-start w-full">
				{selectedCardCollection.map((card, idx) => (
					<Card cardName={card.name} key={idx} cardImage={card.image} addCardToSelected={addCard} />
				))}
			</div>
		</div>
	);
}
