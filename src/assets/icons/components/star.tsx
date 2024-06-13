import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		fill={'currentColor'}
		height={'20'}
		ref={ref}
		viewBox={'0 -960 960 960'}
		width={'20'}
		xmlns={'http://www.w3.org/2000/svg'}
		{...props}
	>
		<path
			d={
				'm352-293 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243-144l63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z'
			}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgStar)

export const Memo = memo(ForwardRef)

// export default Memo
