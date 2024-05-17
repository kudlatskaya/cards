import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type Props = {
	checked?: boolean
	disabled?: boolean
	label?: string
	onChange?: (checked: boolean) => void
}

export const CheckboxComponent = ({ checked, disabled, label, onChange }: Props) => (
	<form>
		<div style={{ alignItems: 'center', display: 'flex', gap: '11px' }}>
			<Checkbox.Root
				checked={checked}
				className={s.checkbox}
				defaultChecked
				disabled={disabled}
				id={'c1'}
				onCheckedChange={onChange}
			>
				<Checkbox.Indicator className={`${s.checkboxIndicator}`}>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className={'Label'} htmlFor={'c1'}>
				{label}
			</label>
		</div>
	</form>
)
