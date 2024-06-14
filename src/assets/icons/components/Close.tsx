import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
				'm291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189z'
			}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgClose)

const Memo = memo(ForwardRef)

export default Memo
