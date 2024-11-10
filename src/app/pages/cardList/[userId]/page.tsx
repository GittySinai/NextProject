import CardView from '@/app/components/CardView'
import React from 'react'

 async function page(props: UserParamsModel) {
    const { userId } = await props.params
    return (
        <div>
            <CardView userId={Number(userId)} />
        </div>
    )
}

export default page
