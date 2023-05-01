import { Button } from '@/components/ui/elements/buttons/button';
import { TextInputWithIcon } from '@/components/ui/elements/text-input-with-icon/text-input-with-icon';
import { TextInput } from '@/components/ui/elements/text-input/text-input';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface F {
	name: string;
	surname: string;
	otch: string;
	message: string;
}

const Test: FC = () => {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<F>({ mode: 'onChange' });

	const s: SubmitHandler<F> = data => {
		console.log(data);
	};

	const f = () => {
		resetField('message');
	};

	return (
		<>
			<form onSubmit={handleSubmit(s)}>
				<TextInput
					{...register('name', {
						required: 'Имя обязательное поле!',
					})}
					label='Введите имя'
					error={errors.name}
				/>
				<br />
				<TextInput
					{...register('surname', {
						required: 'Фамилия обязательное поле!',
					})}
					label='Введите фамилию'
					placeholder='Фамилия'
					error={errors.surname}
				/>
				<br />
				<TextInput
					{...register('otch', {
						required: 'Отчество обязательное поле!',
					})}
					label='Введите отчество'
					error={errors.otch}
				/>
				<br />
				<TextInputWithIcon
					{...register('message', {
						required: 'Сообщение обязательное поле!',
					})}
					label='Введите сообщение'
					placeholder='Сообщение'
					error={errors.message}
					icon='basket'
					iconClick={f}
				/>

				<br />
				<Button>отправить</Button>
			</form>
			<br />
		</>
	);
};

export default Test;
