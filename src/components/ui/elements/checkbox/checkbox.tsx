import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import checkboxStyles from './checkbox.module.css';
import { Icon } from '../../icons/icon';
import { FieldError } from 'react-hook-form';

export interface CheckboxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	error?: FieldError;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, placeholder, error, ...props }, ref): JSX.Element => {
		return (
			<div className={clsx(checkboxStyles.wrapper, className)}>
				<label>
					<input
						className={checkboxStyles.checkbox}
						ref={ref}
						type='checkbox'
						{...props}
					/>
					<span className={checkboxStyles.fake}>
						<Icon className={checkboxStyles.icon} icon='check' />
					</span>
					<span className={checkboxStyles.text}>{placeholder}</span>
				</label>
				{error && <div className={checkboxStyles.error}>{error.message}</div>}
			</div>
		);
	}
);

Checkbox.displayName = 'Checkbox';
