import { Nav } from '@components/nav';

export default function IndexPage() {
	return (
		<div>
			<Nav />
			<div className='hero'>
				<h1 className='title'>Next.js + Tailwind CSS</h1>
			</div>
			<div className='container mx-auto'>
				<h1 className='text-lg text-center m-4'>TailwindUI/Next.js</h1>
				<p className='bg-red-700'>This is a test of the tailwind next integration.</p>
			</div>
		</div>
	);
}
