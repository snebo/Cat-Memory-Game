export default function Score({ text, score }: { text: string; score: number }) {
	return (
		<div className="bg-white px-4 py-2 rounded-lg shadow text-sm sm:text-base font-medium text-gray-800">
			{text}: <span className="font-bold text-indigo-600">{score}</span>
		</div>
	);
}
