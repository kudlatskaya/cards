import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgExpandMore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		fill={'currentColor'}
		height={20}
		ref={ref}
		viewBox={'0 -1160 960 960'}
		width={20}
		xmlns={'http://www.w3.org/2000/svg'}
		{...props}
	>
		<path d={'M480-333 240-573l51-51 189 189 189-189 51 51z'} />
	</svg>
)
const ForwardRef = forwardRef(SvgExpandMore)
const Memo = memo(ForwardRef)

export default Memo
