import React, { Component } from "react";
import { Modal } from 'antd';
import { Avatar } from 'antd';
import LoginForm from './LoginForm'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: '登录表单',
            visible: false,
            confirmLoading: false,
            userInfo:'未登录'
        }
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk() {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        
    }
    handleCancel() {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    onChangeState(stateName){
        this.setState(stateName)
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        
        return (
            <div>
                <div className="user-container">
                    <svg className="icon" aria-hidden="true">
                        <use href="#icon-yonghu"></use>
                    </svg>
                    <a onClick={this.showModal}>{this.state.userInfo}</a>
                    <span className="caret"></span>
                    <Modal title="欢迎登录"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        footer={null}
                        width={380} >
                        <LoginForm onChangeState={this.onChangeState.bind(this)}/>
                    </Modal>
                </div>
               
            </div>
        )
    }

}
export default User;

