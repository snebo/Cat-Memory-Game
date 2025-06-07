export default function Button({
	text,
	changeCategory,
	category,
}: {
	text: string;
	changeCategory: (text: string) => void;
	category: string;
}) {
	return (
		<button
			onClick={() => {
				changeCategory(text);
			}}
			className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
				category === text
					? 'bg-indigo-500 text-white'
					: 'bg-white text-gray-700 hover:bg-indigo-100'
			}`}
		>
			{text.charAt(0).toUpperCase() + text.slice(1)}
		</button>
	);
}
