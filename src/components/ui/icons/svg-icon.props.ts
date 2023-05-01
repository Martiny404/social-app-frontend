import { ComponentPropsWithRef } from 'react';

const icons = {
	call: 'call',
	file: 'file',
	chat: 'chat',
	filter: 'filter',
	spinner: 'spinner',
	basket: 'basket',
	check: 'check',
	down: 'down',
};

export type IconType = keyof typeof icons;

export type SVGIconProps = ComponentPropsWithRef<'svg'> & {
	icon: IconType;
};
