import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import radioToggleStyles from './radio-toggle.module.css';
import { FieldError } from 'react-hook-form';

export interface RadioButtonProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	name: string;
	error?: FieldError;
}

export const RadioToggle = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ className, placeholder, name, error, ...props }, ref): JSX.Element => {
		return (
			<div className={clsx(radioToggleStyles.wrapper, className)}>
				<label>
					<input
						className={radioToggleStyles.radio}
						ref={ref}
						type='radio'
						name={name}
						{...props}
					/>
					<span className={radioToggleStyles.fake}></span>
					<span className={radioToggleStyles.text}>{placeholder}</span>
				</label>
				{error && (
					<div className={radioToggleStyles.error}>{error.message}</div>
				)}
			</div>
		);
	}
);

RadioToggle.displayName = 'RadioToggle';
