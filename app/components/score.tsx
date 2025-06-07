export default function Score({ text, score }: { text: string; score: number }) {
	return (
		<>
			<p className="shadow drop-shadow-fuchsia-400 font-semibold text-right">
				{text}: {score}
			</p>
		</>
	);
}
