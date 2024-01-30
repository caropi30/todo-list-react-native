import React, { useState } from 'react'

const useModalConfirmation = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [selectedId, setSelectedId] = useState('')

	const handleModalConfirmation = () => {
		setIsVisible(!isVisible)
	}

	const handleOpenModalConfirmation = (id) => {
		setSelectedId(id)
		handleModalConfirmation()
	}

	return {
		isVisible,
		handleModalConfirmation,
		handleOpenModalConfirmation,
		selectedId,
	}
}

export default useModalConfirmation
