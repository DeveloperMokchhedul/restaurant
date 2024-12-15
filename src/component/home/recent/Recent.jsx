import React from 'react'
import Title from '../../common/Title'
import Container from '../../common/Container'
import RecentCard from './RecentCard'

function Recent() {
    return (
        <div className='mt-[83px]'>
            <Container>
                <Title className={"font-extrabold"}>Recents avtivities</Title>
                <RecentCard />
            </Container>

        </div>
    )
}

export default Recent