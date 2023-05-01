import { Button } from '@/components/ui/elements/buttons/button';
import { Checkbox } from '@/components/ui/elements/checkbox/checkbox';
import { Input } from '@/components/ui/elements/text-input/text-input';
import { RadioButton } from '@/components/ui/elements/radio-button/radio-button';
import { RadioToggle } from '@/components/ui/elements/radio-toggle/radio-toggle';
import { Select } from '@/components/ui/elements/select/select';
import { Icon } from '@/components/ui/icons/icon';
import { Paragraph } from '@/components/ui/typography/paragraph/paragraph';
import { Title } from '@/components/ui/typography/title/title';
import { useState } from 'react';

const ops = [
	{
		label: 'Челябинск',
		value: 'челябинск',
	},
	{
		label: 'Москва',
		value: 'москва',
	},
	{
		label: 'Санкт-Петербург',
		value: 'санкт-петербург',
	},
];

export default function Home() {
	const [loader, setLoader] = useState<boolean>(false);
	return (
		<div>
			<Button onClick={() => setLoader(p => !p)}>set loader</Button>
			<br />
			<Button loading={loader} variant='secondary' icon='chat'>
				asdsfsd
			</Button>
			<br />
			<Button size='big' icon='file' variant='commerce'>
				sdfsdfdsf
			</Button>
			<br />
			<Button variant='outline'>outline</Button>
			<br />
			<Button size='big' rightIcon icon='file' variant='commerce'>
				sdfsdfdsf
			</Button>
			<br />
			<Button icon='call' loading={loader} size='big' />
			<br />
			<Button variant='tertiary' className='red' icon='basket' size='big'>
				удалить трек?
			</Button>
			<br />
			<hr />
			<Title style={{ marginBottom: 20 }}>Hello</Title>
			<Title
				style={{ marginBottom: 20 }}
				type='bold'
				styleType='italic'
				level={2}
			>
				Hello
			</Title>
			<Title style={{ marginBottom: 20 }} level={3}>
				Hello
			</Title>
			<hr />
			<Paragraph>
				Далеко-далеко за словесными горами в стране гласных, и согласных живут
				рыбные тексты. Текста повстречался путь ты пустился подзаголовок вскоре?
				Домах составитель реторический правилами единственное, города запятой!
			</Paragraph>

			<Paragraph type='medium'>
				Далеко-далеко за словесными горами в стране гласных, и согласных живут
				рыбные тексты. Текста повстречался путь ты пустился подзаголовок вскоре?
				Домах составитель реторический правилами единственное, города запятой!
			</Paragraph>
			<br />
			<hr />
			<br />
			<Checkbox placeholder='Участвую' />
			<br />
			<RadioToggle name='age' placeholder='Возраст' />
			<br />

			<RadioButton name='age' placeholder='Hello' />
			<br />

			<hr />

			<Select options={ops} />

			<br />

			<hr />

			<Input placeholder='Имя' label='Введите имя' />
		</div>
	);
}
