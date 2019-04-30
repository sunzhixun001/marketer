import React from 'react';
import axios from 'axios';

class UserProp extends React.Component {
    render() {
        const {title, value, icon} = this.props;
        return (
            <div className='user-prop'>
                <div className='left'>
                    <div className='icon'><img src={'assets/' + icon + '.png'}></img></div>
                    <div className='title'>{title}： </div>
                </div>
                <div className='value'>{value}</div>
            </div>
        )
    }
}
export default class User extends React.Component {
    constructor(props){
        super(props);
        const {id} = props.match.params;
        this.state = {
            id,
            userNo: '000000',
            realName: '',
            mobile: '',
            company: '',
            position: '',
            address: ''
        }
    }
    render() {
        return (
            <div className='box'>
                <div className='contain'>
                    <div className='card'>
                        <div className='logo'><img src='assets/logo.png'></img></div>
                        <div className='user'>
                            <UserProp title='编号' value={this.state.userNo} icon='no'></UserProp>
                            <UserProp title='姓名' value={this.state.realName} icon='name'></UserProp>
                            <UserProp title='手机' value={this.state.mobile} icon='mobile'></UserProp>
                            <UserProp title='公司' value={this.state.company} icon='company'></UserProp>
                            <UserProp title='职位' value={this.state.position} icon='job'></UserProp>
                            <UserProp title='地址' value={this.state.address} icon='address'></UserProp>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.getUser({id: this.state.id, success: data => {
            this.setState(data);
        }});
    }
    getUser = ({id, success}) => {
        fetch(`/user/${id}`)
        .then(r => r.json())
        .then(response => {
            success && success(response.data);
        });
        // axios.get('/api/user/2');
    }
}
require('./Form.css');