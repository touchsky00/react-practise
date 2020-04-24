import React from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'antd';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mes: '登陆',
            visible: false,
        }
    }

    clickLogin = () => {
        if(this.state.mes == '登陆') {
            this.setState({
                mes: 'hello'
            })
        } else {
            this.setState({
                mes: '登陆'
            })
        }
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    closeModal = () => {
        this.setState({
            visible: false,
        });
    };
    handleOk = () => {
        this.closeModal();
    };
    handleCancel =() => {
        this.closeModal();
    }

    render() {
        return (
            <div>
                login page
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <button onClick={()=>this.clickLogin()}>{this.state.mes}</button>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Login)