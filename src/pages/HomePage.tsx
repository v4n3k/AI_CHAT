import { Button } from '@shared/ui';

export const HomePage = () => {
	const aiCardStyles =
		'bg-slate-600 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200';
	const aiDescriptionStyles = 'text-slate-400';

	const chats = [];

	return (
		<div>
			<h1 className='text-6xl text-slate-400 font-bold'>
				Unlock the Power of AI: Chat with the Best Models
			</h1>
			<p className='text-2xl text-white font-bold'>
				Experiment with diverse AI models to boost productivity, spark
				creativity, and get answers instantly
			</p>
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<li className={aiCardStyles}>
					<h2>Chat</h2>
					<p className={aiDescriptionStyles}>
						GPT-4 - Powerfully versatile for creative writing, coding, and
						research.
					</p>
					<p className='text-sm text-gray-300 mt-2'>
						Content creation, brainstorming, assistance.
					</p>
				</li>
				<li className={aiCardStyles}>
					<h2>DeepSeek</h2>
					<p className={aiDescriptionStyles}>
						Excels in complex problem-solving and data analysis.
					</p>
					<p className='text-sm text-gray-300 mt-2'>
						Data analysis, research, financial modeling.
					</p>
				</li>
				<li className={aiCardStyles}>
					<h2>DALL-E</h2>
					<p className={aiDescriptionStyles}>
						Generate stunning, original images from text prompts.
					</p>
					<p className='text-sm text-gray-300 mt-2'>
						Art generation, design prototyping, marketing visuals.
					</p>
				</li>
			</ul>

			<div className='bg-slate-800 py-12 mt-8 rounded-lg'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl font-bold text-slate-200 mb-8'>
						How It Works
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='p-6 bg-slate-700 rounded-lg shadow-md'>
							<svg
								className='w-12 h-12 mx-auto text-blue-500 mb-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 6a2 2 0 11-4 0 2 2 0 014 0zM12 18a2 2 0 11-4 0 2 2 0 014 0z'
								></path>
							</svg>
							<h3 className='text-xl font-semibold text-slate-300 mb-2'>
								Choose an AI Model
							</h3>
							<p className='text-slate-400'>
								Select the AI that fits your task.
							</p>
						</div>

						<div className='p-6 bg-slate-700 rounded-lg shadow-md'>
							<svg
								className='w-12 h-12 mx-auto text-blue-500 mb-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 10l4 4m0 0l4-4m-4 4v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7m8 9l4-4m0 0l4 4m-4-4v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7'
								></path>
							</svg>
							<h3 className='text-xl font-semibold text-slate-300 mb-2'>
								Start Chatting
							</h3>
							<p className='text-slate-400'>
								Enter your prompt and watch the AI respond.
							</p>
						</div>

						<div className='p-6 bg-slate-700 rounded-lg shadow-md'>
							<svg
								className='w-12 h-12 mx-auto text-blue-500 mb-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 5l7 7-7 7'
								></path>
							</svg>
							<h3 className='text-xl font-semibold text-slate-300 mb-2'>
								Get Results
							</h3>
							<p className='text-slate-400'>
								Utilize the AI's output for your project.
							</p>
						</div>
					</div>
				</div>
			</div>

			{chats.length <= 0 ? (
				<Button className='px-10 mx-auto'>Explore AI Models</Button>
			) : (
				<Button className='px-10 mx-auto'>My chats</Button>
			)}
		</div>
	);
};
