import Main from './main/main';

export default function Home() {
	const apikey = process.env.GIPHY_API_KEY ?? '';
	return (
		<>
			<Main giphy_api={apikey} />
		</>
	);
}
