import { forwardRef } from 'react';
import { IconType } from '../../icons/svg-icon.props';
import { TextInputProps } from '../text-input/text-input';
import inputStyles from '../text-input/text-input.module.css';
import clsx from 'clsx';
import { Icon } from '../../icons/icon';

interface TextInputWithIconProps extends TextInputProps {
	icon: IconType;
	iconClick: () => void;
}

export const TextInputWithIcon = forwardRef<
	HTMLInputElement,
	TextInputWithIconProps
>(
	(
		{ className, placeholder, error, label, icon, iconClick, ...props },
		ref
	): JSX.Element => {
		return (
			<div
				className={clsx(
					inputStyles.wrapper,
					className,
					inputStyles.inputWithIcon
				)}
			>
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
					<Icon icon={icon} className={inputStyles.icon} onClick={iconClick} />
				</label>
				{error && <div className={inputStyles.error}>{error.message}</div>}
			</div>
		);
	}
);

TextInputWithIcon.displayName = 'TextInputWithIcon';
