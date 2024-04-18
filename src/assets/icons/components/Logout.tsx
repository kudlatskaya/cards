import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
				'M216-144q-29.7 0-50.85-21.15T144-216v-528q0-29.7 21.15-50.85T216-816h264v72H216v528h264v72zm432-168-51-51 81-81H384v-72h294l-81-81 51-51 168 168z'
			}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgLogout)
const Memo = memo(ForwardRef)

export default Memo
