import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
//import { TextField } from '@/components/ui/text-field'
import { Input } from '@/components/ui/input'

type FormValues = {
	email: string
	password: string
}

export const LoginForm = () => {
	const { handleSubmit, register } = useForm<FormValues>()

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input {...register('email')} label={'email'} />
			<Input {...register('password')} label={'password'} />
			<Button type={'submit'}>Submit</Button>
		</form>
	)
}
