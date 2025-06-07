import Image from 'next/image';

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
		<div className="bg-white flex flex-col items-center justify-center w-65 h-85 hover:shadow-xl shadow-gray-500 hover:ring-slate-500 hover:translate-y-[-3px] hover:scale-[101%] hover:translate-z-80 transition-all duration-450 rounded-xl cursor-pointer active:scale-95 ">
			<div
				className="relative w-full h-full shadow-gray-300 "
				onClick={() => addCardToSelected(cardName)}
			>
				<Image src={cardImage} alt={cardName} fill className="object-contain rounded-xl" />
			</div>
			<p className="text-lg font-semibold">{cardName}</p>
		</div>
	);
}
