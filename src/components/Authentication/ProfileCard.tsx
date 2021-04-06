import userEvent from '@testing-library/user-event'
import React from 'react'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

export interface User {
    name: string
    email: string
}

declare interface ProfileCardProps {
    user: User
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    return <div style={{ minWidth: 320 }}>
        <Form title="Profile">
            <Input
                label="Name"
                disabled
                value={props.user.name}
            />

            <Input
                label="Email"
                disabled
                value={props.user.email}
            />
        </Form>
    </div>
}

export default ProfileCard