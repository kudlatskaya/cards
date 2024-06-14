import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgExpandLess = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		fill={'currentColor'}
		height={20}
		ref={ref}
		viewBox={'0 -1160 960 960'}
		width={20}
		xmlns={'http://www.w3.org/2000/svg'}
		{...props}
	>
		<path d={'m291-336-51-51 240-240 240 240-51 51-189-189z'} />
	</svg>
)
const ForwardRef = forwardRef(SvgExpandLess)

const Memo = memo(ForwardRef)

export default Memo
