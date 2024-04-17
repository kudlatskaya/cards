import EyeOutline from '@/assets/icons/components/eyeoutline'
import LogOutOutline from '@/assets/icons/components/logoutoutline'
import SearchOutline from '@/assets/icons/components/searchoutline'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'
import { Input } from '@/components/ui/input/input'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography/typography'

// const val = {
// 	heads: ['name', 'name', 'name', 'name', 'name', 'name'],
// 	values: [
// 		{
// 			answer: 'string',
// 			answerImg: 'string',
// 			answerVideo: 'string',
// 			created: '2024-04-08T13:02:38.782Z',
// 			deckId: 'string',
// 			grade: 0,
// 			id: 'string',
// 			question: 'string',
// 			questionImg: 'string',
// 			questionVideo: 'string',
// 			shots: 0,
// 			updated: '2024-04-08T13:02:38.782Z',
// 			userId: 'string',
// 		},
// 		{
// 			answer: 'string',
// 			answerImg: 'string',
// 			answerVideo: 'string',
// 			created: '2024-04-08T13:02:38.782Z',
// 			deckId: 'string',
// 			grade: 0,
// 			id: 'string',
// 			question: 'string',
// 			questionImg: 'string',
// 			questionVideo: 'string',
// 			shots: 0,
// 			updated: '2024-04-08T13:02:38.782Z',
// 			userId: 'string',
// 		},
// 	],
// }

export function App() {
	// @ts-ignore
	return (
		<div>
			<div>
				{/*<Button as={'a'} href={'https://google.com'}>*/}
				{/*	Link that looks a button*/}
				{/*</Button>*/}
				<Button disabled={false} fullWidth={false} icon={<LogOutOutline />} variant={'primary'}>
					Primary button
				</Button>
				{/*<Button variant={'secondary'}>Secondary button</Button>*/}
			</div>
			<div>
				<Input
					fullWidth={false}
					iconEnd={<SearchOutline color={'red'} />}
					iconStart={<EyeOutline color={'red'} />}
					label={'Search input_old'}
					variant={'search'}
				/>
				<Input as={'textarea'} label={'Default input_old'} variant={'default'} />
				<Input disabled fullWidth={false} label={'Default input_old'} variant={'default'} />
				<Input disabled={false} fullWidth={false} label={'Default input_old'} variant={'default'} />
				<Input
					disabled={false}
					fullWidth={false}
					label={'Password input_old'}
					variant={'password'}
				/>
				<Input disabled fullWidth={false} label={'Password input_old'} variant={'password'} />

				<Input disabled fullWidth={false} label={'Search input_old'} variant={'search'} />
				<Input
					errorMessage={'Error'}
					fullWidth={false}
					label={'Search input_old'}
					variant={'search'}
				/>
				<Input disabled fullWidth label={'Search input_old'} variant={'search'} />
			</div>
			<div>
				<Table.Root>
					<Table.Head>
						<Table.Tr>
							<Table.Th>{'Name1'}</Table.Th>
							<Table.Th>{'Name2'}</Table.Th>
							<Table.Th>{'Name3'}</Table.Th>
						</Table.Tr>
					</Table.Head>
					<Table.Body>
						<Table.Tr>
							<Table.Td>{'Val1'}</Table.Td>
							<Table.Td>{'Val2'}</Table.Td>
							<Table.Td>{'Val3'}</Table.Td>
						</Table.Tr>
						<Table.Tr>
							<Table.Td>{'Val1'}</Table.Td>
							<Table.Td>{'Val2'}</Table.Td>
							<Table.Td>{'Val3'}</Table.Td>
						</Table.Tr>
					</Table.Body>
				</Table.Root>
			</div>

			<div>
				<CheckboxComponent disabled text={'Checkbox'} />
			</div>
			<div>
				<Typography
					as={'a'}
					href={'https://google.com'}
					text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
					variant={'Link1'}
				/>
			</div>

			{/*<Button as={'div'}>Normal Button</Button>*/}

			<div>
				<Card />
			</div>
		</div>
	)
}
