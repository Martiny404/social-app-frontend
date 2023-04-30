import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import buttonStyles from './button.module.css';
import { IconType } from '../../icons/svg-icon.props';
import { Icon } from '../../icons/icon';

type ButtonVariants =
	| 'primary'
	| 'secondary'
	| 'outline'
	| 'commerce'
	| 'tertiary';

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon?: IconType;
	variant?: ButtonVariants;
	size?: 'small' | 'big';
	loading?: boolean;
	rightIcon?: boolean;
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	variant = 'primary',
	size = 'small',
	loading = false,
	rightIcon = false,
	icon,
	...props
}): JSX.Element => {
	return (
		<button
			className={clsx(buttonStyles.button, className, {
				[buttonStyles.primary]: variant == 'primary',
				[buttonStyles.secondary]: variant == 'secondary',
				[buttonStyles.commerce]: variant == 'commerce',
				[buttonStyles.outline]: variant == 'outline',
				[buttonStyles.tertiary]: variant == 'tertiary',
				[buttonStyles.small]: size == 'small',
				[buttonStyles.big]: size == 'big',
				[buttonStyles.rightIcon]: rightIcon && children,
				[buttonStyles.leftIcon]: !rightIcon && children,
				[buttonStyles.iconButton]: !children,
			})}
			{...props}
		>
			{loading && <Icon icon='spinner' className={buttonStyles.loader} />}
			{icon && !loading && <Icon icon={icon} />}
			{children && <span>{children}</span>}
		</button>
	);
};
