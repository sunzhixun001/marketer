import React from 'react';
class UserProp extends React.Component {
    render() {
        const {title, value, icon} = this.props;
        return (
            <div class='user-prop'>
                <div class='icon'><img src={'assets/' + icon + '.png'}></img></div>
                <div class='title'>{title}: </div>
                <div>{value}</div>
            </div>
        )
    }
}
export default function User() {
    return (
        <div>
            <div className='contain'>
                <div className='card'>
                    <div className='logo'><img src='assets/logo.png'></img></div>
                    <div className='user'>
                        <UserProp title='编号' value='000001' icon='no'></UserProp>
                        <UserProp title='姓名' value='顾晓晖' icon='name'></UserProp>
                        <UserProp title='手机' value='13616601797' icon='mobile'></UserProp>
                        <UserProp title='公司' value='000001' icon='company'></UserProp>
                        <UserProp title='职位' value='000001' icon='job'></UserProp>
                        <UserProp title='地址' value='000001' icon='address'></UserProp>
                    </div>
                </div>
            </div>
        </div>
    )
}
require('./Form.css');