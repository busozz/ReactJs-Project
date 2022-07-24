import React from 'react'
import { useSelector } from 'react-redux'
import MainContent from '../../Components/Content/MainContent'
import { selectIsLoading } from '../../Redux/features/categorySlice'






const HomePAge = () => {
    const isLoading = useSelector(selectIsLoading)


    return (
        <>

            {isLoading ? isLoading :
                <MainContent />
            }
        </>
    )
}

export default HomePAge