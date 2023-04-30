import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import paragraphStyles from './paragraph.module.css';

interface ParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	type?: 'regular' | 'medium';
}

export const Paragraph: FC<ParagraphProps> = ({
	className,
	type = 'regular',
	children,
}): JSX.Element => {
	return (
		<p
			className={clsx(paragraphStyles.p, className, {
				[paragraphStyles.medium]: type == 'medium',
			})}
		>
			{children}
		</p>
	);
};
