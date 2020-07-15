import { Nav } from '@components/nav';
import Head from 'next/head';

export default function IndexPage() {
	return (
		<div>
			<Head>
				<title>Next.js TailwindCSS</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<Nav />
			<div className='hero'>
				<h1 className='title'>Next.js + Tailwind CSS</h1>
			</div>
			<div className='container mx-auto'>
				<h1 className='text-lg text-center m-4'>TailwindUI/Next.js</h1>
				<p className='bg-red-700'>This is a test of the tailwind next integration.</p>
			</div>
			<div className='container mx-auto pt-5'>
				<label htmlFor='price' className='block text-sm leading-5 font-medium text-gray-700'>
					Price
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<span className='text-gray-500 sm:text-sm sm:leading-5'>$</span>
					</div>
					<input id='price' className='form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5' placeholder='0.00'></input>
					<div className='absolute inset-y-0 right-0 flex items-center'>
						<select
							aria-label='Currency'
							className='form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5'
						>
							<option>USD</option>
							<option>CAD</option>
							<option>EUR</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}
