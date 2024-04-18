import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		fill={'currentColor'}
		height={20}
		ref={ref}
		viewBox={'0 -960 960 960'}
		width={20}
		xmlns={'http://www.w3.org/2000/svg'}
		{...props}
	>
		<path
			d={
				'M480-312q70 0 119-49t49-119-49-119-119-49-119 49-49 119 49 119 119 49m0-72q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28m0 192q-142.596 0-259.798-78.5T48-480q55-131 172.202-209.5T480-768t259.798 78.5T912-480q-55 131-172.202 209.5T480-192m0-72q112 0 207-58t146-158q-51-100-146-158t-207-58-207 58-146 158q51 100 146 158t207 58'
			}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgEye)
const Memo = memo(ForwardRef)

export default Memo
