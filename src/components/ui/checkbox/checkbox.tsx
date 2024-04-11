import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type Props = {
	text?: string
}

export const CheckboxComponent = ({ text }: Props) => (
	<form>
		<div style={{ alignItems: 'center', display: 'flex', gap: '11px' }}>
			<Checkbox.Root className={`${s.checkbox}`} defaultChecked id={'c1'}>
				<Checkbox.Indicator className={`${s.checkboxIndicator}`}>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className={'Label'} htmlFor={'c1'}>
				{text}
			</label>
		</div>
	</form>
)
