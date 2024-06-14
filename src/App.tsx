import image from '@/assets/img/image.png'
import { LoginForm } from '@/components/auth/login-form/login-form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'
import { Input } from '@/components/ui/input/input'
import Rating from '@/components/ui/rating/rating'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography/typography'
import {Search, Eye, Close} from './assets/icons/index'
import { Logout } from './assets/icons/components/Logout'



export function App() {
	// @ts-ignore
	return (
		<div>
			<div
				style={{
					width: '50%',
				}}
			>
				<form
					action={'/user-login'}
					method={'POST'}
					style={{
						color: 'black',
						display: 'flex',
						flexDirection: 'column',
						gap: 24,
					}}
				>
					<input name={'userEmail'} type={'email'} />
					<input name={'userPassword'} type={'password'} />
					<input name={'rememberMe'} type={'checkbox'} />
					<input name={'favoriteColor'} type={'color'} />
					<input name={'dob'} type={'date'} />
					<button style={{ backgroundColor: 'white' }}>Submit</button>
				</form>
			</div>
			<LoginForm />
			<div>
				<Table.Root>
					<Table.Head>
						<Table.Tr>
							<Table.Th>{'Name'}</Table.Th>
							<Table.Th>{'Name'}</Table.Th>
							<Table.Th>{'Name'}</Table.Th>
							<Table.Th>{'Name'}</Table.Th>
							<Table.Th>{'Name'}</Table.Th>
						</Table.Tr>
					</Table.Head>
					<Table.Body>
						<Table.Tr>
							<Table.Td>
								<div>
									<img src={image} />
									{`Name`}
								</div>
							</Table.Td>
							<Table.Td>{'Name'}</Table.Td>
							<Table.Td>{'Name'}</Table.Td>
							<Table.Td>{'Name'}</Table.Td>
							<Table.Td>
								<Rating />
							</Table.Td>
						</Table.Tr>
					</Table.Body>
				</Table.Root>
			</div>

			<div>
				<Typography.H1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H1>
				<Typography.H2 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H2>
				<Typography.Body1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Body1>
				<Typography.Body2 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Body2>
				<Typography.Caption color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Caption>
				<Typography.H3 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H3>
				<Typography.H4 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H4>
				<Typography.Link1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Link1>
				<p>
					<Typography.Link2 color={'light'}>
						{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
					</Typography.Link2>
				</p>
				<Typography.Overline color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Overline>
				<Typography.Subtitle1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Subtitle1>
				<Typography.Subtitle2 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Subtitle2>
			</div>
			<div>
				{/*<Button as={'a'} href={'https://google.com'}>*/}
				{/*	Link that looks a button*/}
				{/*</Button>*/}
				<Button disabled={false} fullWidth={false} icon={<Logout />} variant={'primary'}>
					Primary button
				</Button>
				{/*<Button variant={'secondary'}>Secondary button</Button>*/}
			</div>
			<div>
				{/*<Input as={'textarea'} label={'Default input'} variant={'default'} />*/}
				<Input disabled fullWidth={false} label={'Default input'} variant={'default'} />
				<Input disabled={false} fullWidth={false} label={'Default input'} variant={'default'} />
				<Input
					disabled={false}
					errorMessage={'Error'}
					fullWidth={false}
					label={'Default input'}
					variant={'default'}
				/>
				<span>{'ku'}</span>
				<Input
					disabled={false}
					fullWidth
					iconEnd={<Eye />}
					label={'Password input'}
					variant={'password'}
				/>
				<Input
					disabled
					fullWidth={false}
					iconEnd={<Eye />}
					label={'Password input'}
					variant={'password'}
				/>

				<Input
					disabled={false}
					fullWidth={false}
					iconEnd={<Close />}
					iconStart={<Search />}
					label={'Search input'}
					variant={'search'}
				/>

				<Input
					disabled
					fullWidth={false}
					iconEnd={<Close />}
					iconStart={<Search />}
					label={'Search input'}
					variant={'search'}
				/>
				<Input
					errorMessage={'Error'}
					fullWidth={false}
					iconEnd={<Close />}
					iconStart={<Search />}
					label={'Search input'}
					variant={'search'}
				/>
				<Input
					disabled
					fullWidth
					iconEnd={<Close />}
					iconStart={<Search />}
					label={'Search input'}
					variant={'search'}
				/>
			</div>

			<div>
				<CheckboxComponent disabled label={'Checkbox'} />
			</div>

			{/*<Button as={'div'}>Normal Button</Button>*/}

			<div>
				<Card />
			</div>
		</div>
	)
}
