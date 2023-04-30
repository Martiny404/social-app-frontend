import { FC } from 'react';
import { SVGIconProps } from './svg-icon.props';
import clsx from 'clsx';

export const Icon: FC<SVGIconProps> = ({
	className,
	icon,
	...props
}): JSX.Element => {
	return (
		<svg className={clsx('icon', className)} {...props}>
			<use xlinkHref={`/sprite.svg#${icon}`} />
		</svg>
	);
};
