interface Option {
	id: number;
	label: string;
	value: string;
}

interface SelectProps {
	options: Option[];
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => {
	return (
		<select
			className='bg-slate-700 border-2 text-white text-lg p-2  border-slate-500 rounded-lg w-full outline-none'
			value={value}
			onChange={onChange}
		>
			{options.map(option => (
				<option key={option.id} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};
