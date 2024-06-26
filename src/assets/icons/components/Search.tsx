import type { SVGProps } from 'react'
import { Ref } from 'react'

export const Search = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
				'M765-144 526-383q-30 22-65.792 34.5T384.035-336Q284-336 214-406t-70-170 70-170 170-70 170 70 70 170.035q0 40.381-12.5 76.173T577-434l239 239zM384-408q70 0 119-49t49-119-49-119-119-49-119 49-49 119 49 119 119 49'
			}
		/>
	</svg>
)
// const ForwardRef = forwardRef(SvgSearch)

// const Memo = memo(ForwardRef)

// export default Memo
