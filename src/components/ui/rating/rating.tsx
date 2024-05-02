import React, { useState } from 'react'

import SvgStar from '@/assets/icons/components/star'

import s from '@/components/ui/rating/rating.module.scss'

const Rating = () => {
	const [turnOn, setTurnOn] = useState(false)

	const onClickHandler = () => {
		setTurnOn(!turnOn)
	}

	return (
		<div>
			<span className={`${turnOn && s.turnOn}`} onClick={onClickHandler}>
				<SvgStar />
			</span>
		</div>
	)
}

export default Rating
