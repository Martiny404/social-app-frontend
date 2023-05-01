import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import inputStyles from './text-input.module.css';
import clsx from 'clsx';

export interface TextInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder?: string;
	error?: FieldError;
	label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ className, placeholder, error, label, ...props }, ref): JSX.Element => {
		return (
			<div className={clsx(inputStyles.wrapper, className)}>
				{placeholder && <span>{placeholder}</span>}
				<label>
					<input
						type='text'
						placeholder={label}
						className={clsx(inputStyles.input, {
							[inputStyles.errorInput]: error,
						})}
						ref={ref}
						{...props}
					/>
				</label>
				{error && <div className={inputStyles.error}>{error.message}</div>}
			</div>
		);
	}
);

TextInput.displayName = 'TextInput';
