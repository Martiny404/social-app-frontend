import { FC, forwardRef } from 'react';
import radioButtonStyles from './radio-button.module.css';
import { RadioButtonProps } from '../radio-toggle/radio-toggle';
import clsx from 'clsx';

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ className, placeholder, name, error, ...props }, ref): JSX.Element => {
		return (
			<div className={clsx(radioButtonStyles.wrapper, className)}>
				<label>
					<input
						className={radioButtonStyles.radio}
						ref={ref}
						type='radio'
						name={name}
						{...props}
					/>
					<span className={radioButtonStyles.fake}></span>
					<span className={radioButtonStyles.text}>{placeholder}</span>
				</label>
				{error && (
					<div className={radioButtonStyles.error}>{error.message}</div>
				)}
			</div>
		);
	}
);

RadioButton.displayName = 'RadioButton';
