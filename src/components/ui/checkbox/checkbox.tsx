import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons'

export default () => {
	const [checked, setChecked] = React.useState('indeterminate')

	return (
		<>
			<StyledCheckbox checked={checked} onCheckedChange={setChecked}>
				<Checkbox.Indicator>
					{checked === 'indeterminate' && <DividerHorizontalIcon />}
					{checked === true && <CheckIcon />}
				</Checkbox.Indicator>
			</StyledCheckbox>

			<button
				onClick={() =>
					setChecked((prevIsChecked) =>
						prevIsChecked === 'indeterminate' ? false : 'indeterminate'
					)
				}
				type={'button'}
			>
				Toggle indeterminate
			</button>
		</>
	)
}
