import clsx from 'clsx';
import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from 'react';
import selectStyles from './select.module.css';
import { FieldError } from 'react-hook-form';

interface SelectOption {
	label: string;
	value: string;
}

interface SelectProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	options: SelectOption[];
	error?: FieldError;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ options, className, error, ...props }, ref): JSX.Element => {
		return (
			<div>
				<select
					ref={ref}
					{...props}
					className={clsx(selectStyles.select, className)}
				>
					{options.map((option, idx) => (
						<option
							key={`${option.label}-${option.value}-${idx}`}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</select>
				{error && <div>{error.message}</div>}
			</div>
		);
	}
);

Select.displayName = 'Select';
