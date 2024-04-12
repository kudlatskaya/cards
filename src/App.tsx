import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'
import { Input } from '@/components/ui/input/input'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography/typography'
import { FiLogOut } from 'react-icons/fi'

import s from './components/ui/button/button.module.scss'

const val = {
	heads: ['name', 'name', 'name', 'name', 'name', 'name'],
	values: [
		{
			answer: 'string',
			answerImg: 'string',
			answerVideo: 'string',
			created: '2024-04-08T13:02:38.782Z',
			deckId: 'string',
			grade: 0,
			id: 'string',
			question: 'string',
			questionImg: 'string',
			questionVideo: 'string',
			shots: 0,
			updated: '2024-04-08T13:02:38.782Z',
			userId: 'string',
		},
		{
			answer: 'string',
			answerImg: 'string',
			answerVideo: 'string',
			created: '2024-04-08T13:02:38.782Z',
			deckId: 'string',
			grade: 0,
			id: 'string',
			question: 'string',
			questionImg: 'string',
			questionVideo: 'string',
			shots: 0,
			updated: '2024-04-08T13:02:38.782Z',
			userId: 'string',
		},
	],
}

export function App() {
	return (
		<div>
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
			<div>
				<Table data={val} />
			</div>
			{/*<Button as={'div'}>Normal Button</Button>*/}
			<div>
				<Button as={'a'} href={'https://google.com'}>
					Link that looks a button
				</Button>
				<Button disabled={false} fullWidth={false} variant={'primary'}>
					<FiLogOut className={s.icon} />
					Primary button
				</Button>
				<Button variant={'secondary'}>Secondary button</Button>
			</div>

			<div>
				<Input as={'textarea'} label={'Default input'} variant={'default'} />
				<Input disabled fullWidth={false} label={'Default input'} variant={'default'} />
				<Input disabled={false} fullWidth={false} label={'Default input'} variant={'default'} />
				<Input disabled={false} fullWidth={false} label={'Password input'} variant={'password'} />
				<Input disabled fullWidth={false} label={'Password input'} variant={'password'} />
				<Input fullWidth={false} label={'Search input'} variant={'search'} />
				<Input disabled fullWidth={false} label={'Search input'} variant={'search'} />
				<Input errorMessage={'Error'} fullWidth={false} label={'Search input'} variant={'search'} />
				<Input disabled fullWidth label={'Search input'} variant={'search'} />
			</div>
			<div>
				<Card />
			</div>
		</div>
	)
}
