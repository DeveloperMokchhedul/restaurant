import React from 'react'
import Title from '../../common/Title'
import Container from '../../common/Container'
import RecentCard from './RecentCard'
import RecentSlider from './RecentSlider'

function Recent() {
    return (
        <div className='mt-[83px]'>
            <Container>
                <Title className={"font-extrabold"}>Recents avtivities</Title>
                <RecentSlider />
            </Container>

        </div>
    )
}

export default Recent