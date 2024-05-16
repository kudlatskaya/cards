import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CheckboxComponent } from '@/components/ui/checkbox'
//import { TextField } from '@/components/ui/text-field'
import { Input } from '@/components/ui/input'

type FormValues = {
	email: string
	password: string
	rememberMe: boolean
}

export const LoginForm = () => {
	const { control, handleSubmit, register } = useForm<FormValues>()

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

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input {...register('email')} label={'email'} />
			<Input {...register('password')} label={'password'} />
			<CheckboxComponent checked={value} label={'Remember me'} onCheckedChange={onChange} />
			<Button type={'submit'}>Submit</Button>
		</form>
	)
}
