import { useController, useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/login-form/validation'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { CheckboxComponent } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<FormValues>({
		resolver: zodResolver(loginSchema),
	})

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
			<Input {...register('email')} errorMessage={errors.email?.message} label={'email'} />
			<Input {...register('password')} errorMessage={errors.password?.message} label={'password'} />
			<ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
			<Button type={'submit'}>Submit</Button>
		</form>
	)
}
