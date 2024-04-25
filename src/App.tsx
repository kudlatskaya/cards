import Close from '@/assets/icons/components/Close'
import Eye from '@/assets/icons/components/Eye'
import Logout from '@/assets/icons/components/Logout'
import Search from '@/assets/icons/components/Search'
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
				<Input as={'textarea'} label={'Default input'} variant={'default'} />
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

			{/*<Button as={'div'}>Normal Button</Button>*/}

			<div>
				<Card />
			</div>
		</div>
	)
}
