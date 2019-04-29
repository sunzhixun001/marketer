import React from 'react';
class UserProp extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div>
                <div></div>
                <div>{title}</div>
            </div>
        )
    }
}
export default function User() {
    return (
        <div>
            <div className='card'>
                <UserProp title='编号'></UserProp>
                <UserProp title='姓名'></UserProp>
                <UserProp title='手机'></UserProp>
                <UserProp title='公司'></UserProp>
                <UserProp title='职位'></UserProp>
                <UserProp title='地址'></UserProp>
            </div>
        </div>
    )
}
require('./Form.css');