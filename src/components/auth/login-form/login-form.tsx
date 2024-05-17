import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CheckboxComponent } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
//import { TextField } from '@/components/ui/text-field'

type FormValues = {
	email: string
	password: string
	rememberMe: boolean
}

export const LoginForm = () => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<FormValues>()

	// console.log('errors: ', errors)

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	const {
		field: { onChange, value },
	} = useController({
		control,
		defaultValue: false,
		name: 'rememberMe',
	})

	const emailRegex =
		/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/*<Input {...register('email')} label={'email'} />*/}
			{/*<Input {...register('password')} label={'password'} />*/}
			<Input
				{...register('email', {
					pattern: { message: 'Invalid email', value: emailRegex },
					required: 'Email is required',
				})}
				label={'email'}
			/>
			<Input
				{...register('password', {
					minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
					required: 'Password is required',
				})}
				label={'password'}
			/>
			<CheckboxComponent checked={value} label={'Remember me'} onChange={onChange} />
			<Button type={'submit'}>Submit</Button>
		</form>
	)
}
