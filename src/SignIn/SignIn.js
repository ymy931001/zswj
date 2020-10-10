import React, { Component } from "react";
import { Button, Input, message } from "antd";
import { login } from "../axios";
import { createForm } from 'rc-form';
import "./SignIn.css";


class SignIn extends Component {
  state = {
    userID: "",
    password: ""
  };

  componentwillMount = () => {
    localStorage.clear();


  }
  componentDidMount = () => {

  };


  logindown = (e) => {
    if (e.keyCode === 13) {
      login([
        this.state.userID,
        this.state.password
      ]).then(res => {
        if (res.data.message === 'success') {
          localStorage.setItem('accesstokens', res.data.data.token)
          message.success("登陆成功");
          // window.location.href = "http://datav.aliyuncs.com/share/9b68da0044bde51f14d239ebf67a6c6b"
          window.location.href = "/functionlist"
        } else {
          message.error("用户名或密码错误");
        }
      });
    }
  }


  login = () => {
    console.log(this.state.userID)
    if (!this.state.userID) {
      message.error("请输入用户名");
      return;
    }
    if (!this.state.password) {
      message.error("请输入密码");
      return;
    }
    login([
      this.state.userID,
      this.state.password
    ]).then(res => {
      if (res.data.message === 'success') {
        localStorage.setItem('accesstokens', res.data.data.token)
        message.success("登陆成功");
        // window.location.href = "http://datav.aliyuncs.com/share/9b68da0044bde51f14d239ebf67a6c6b"
        window.location.href = "/functionlist"
      } else {
        message.error("用户名或密码错误");
      }
    });
  };

  render() {
    return (
      <div id="signbody" className="cover">
        <div className="logo">
          <img src={require('./logo1.png')} alt="" style={{ width: "70px", marginRight: '20px' }} />
                数字卫监 阳光执法统一执法平台
        </div>
        <div className="main">
          <div className="loginbody">
            <span className="logintitle">
              用户登录
            </span>
            <div>
              <Input
                size="large"
                className="SignIn-Inputs"
                placeholder="请输入用户名"
                prefix={
                  <span style={{ borderRight: '1px solid #d9d9d9', paddingRight: '10px' }}>
                    <img src={require('./user.png')} alt="" style={{ width: "15px" }} />
                  </span>
                }
                onChange={e => this.setState({ userID: e.target.value })}
                value={this.state.userID}
                onKeyDown={this.logindown}
              />
            </div>
            <div>
              <Input
                size="large"
                className="SignIn-Inputs"
                placeholder="请输入密码"
                prefix={
                  <span style={{ borderRight: '1px solid #d9d9d9', paddingRight: '10px' }}>
                    <img src={require('./pass.png')} alt="" style={{ width: "15px" }} />
                  </span>
                }
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
                onKeyDown={this.logindown}
              />
            </div>
            <div>
              <Button
                className="SignIn-requestbutton"
                onClick={() => {
                  this.login();
                }}
                style={{ height: '40px', width: '100%', fontSize: '18px', background: '#0e8cc9', color: 'white', border: 'none' }}
              >
                <span>登录</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="bottext">
          <div className="bombtn">
            平台服务商：&nbsp;&nbsp;<a href="http://www.terabits.cn/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>杭州钛比科技有限公司</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：&nbsp;&nbsp;0571-87755736
              </div>
          <div className="bombtns">
            浙ICP备16003817号-1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站标识码：3610782
              </div>
          <div className="bombtns">
            <img src={require('./bot.png')} alt="" style={{ width: '20px', marginRight: '10px' }} />
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602007808" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>浙公网安备33010602009975号</a>
          </div>
        </div>
      </div>

    );
  }
}

export default SignIn = createForm()(SignIn);