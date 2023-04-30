import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import titleStyles from './title.module.css';

interface TitleProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	level?: 1 | 2 | 3;
	styleType?: 'normal' | 'italic';
	type?: 'regular' | 'bold';
}

export const Title: FC<TitleProps> = ({
	className,
	level = 1,
	styleType = 'normal',
	type = 'regular',
	children,
	...props
}): JSX.Element => {
	switch (level) {
		case 1:
			return (
				<h1
					className={clsx(titleStyles.title, titleStyles.h1, className, {
						[titleStyles.bold]: type == 'bold',
						[titleStyles.italic]: styleType == 'italic',
					})}
					{...props}
				>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2
					className={clsx(titleStyles.title, titleStyles.h2, className, {
						[titleStyles.bold]: type == 'bold',
						[titleStyles.italic]: styleType == 'italic',
					})}
					{...props}
				>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3
					className={clsx(titleStyles.title, titleStyles.h3, className, {
						[titleStyles.bold]: type == 'bold',
						[titleStyles.italic]: styleType == 'italic',
					})}
					{...props}
				>
					{children}
				</h3>
			);
	}
};
