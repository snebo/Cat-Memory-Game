export default function Card({
	cardName,
	cardImage,
	addCardToSelected,
}: {
	cardName: string;
	cardImage: string;
	addCardToSelected: (name: string) => void;
}) {
	return (
		<div
			className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer overflow-hidden"
			onClick={() => addCardToSelected(cardName)}
		>
			<div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
				<img
					src={cardImage}
					alt={cardName}
					className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<p className="text-center text-sm sm:text-base font-semibold p-2 text-gray-700">{cardName}</p>
		</div>
	);
}
