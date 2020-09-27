import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Modal, Input } from "antd";
import { url, getAllPlatformLoginInfo } from "../axios";
import { createForm } from 'rc-form';
import "./functionlist.css";

class SignIn extends Component {
  state = {
    userID: "",
    password: "",
    platformname: undefined
  };

  componentwillMount = () => {
    localStorage.clear();
  }
  componentDidMount = () => {

  };

  miejun = () => {
    // window.location.href = "http://192.168.1.243:9081/meiJun_system"
    window.open(url + "/meiJun_system")
    // miejunsystem([

    // ]).then(res => {
    //   if (res.data.message === 'success') {

    //   }
    // });
  }

  // "Bearer " + localStorage.getItem('accesstokens')

  //打开账号设置弹窗
  setaccount = () => {
    this.setState({
      visible: true
    })
    getAllPlatformLoginInfo([
      `Bearer ${localStorage.getItem(
        "accesstokens"
      )}`
    ]).then(res => {
      if (res.data.message === 'success') {
        this.setState({
          visible: true
        })
      }
    });

  }

  //关闭弹窗
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  //在线监控
  platform1 = () => {
    window.open("https://115.231.112.230:666")
  }

  //执法系统
  platform2 = () => {
    window.open("http://zjwj.zjwjw.gov.cn:8888/hii/login")
  }

  //监督协管
  platform3 = () => {
    window.open("http://zs.wsjdxg.cn:8888/zs/isso/login?username=17705800891")
  }

  //水质检测
  platform4 = () => {
    window.open("https://zj.waterview.cn/")
  }

  //空气放射
  platform7 = () => {
    window.open("http://47.100.197.207:8080")
  }

  //监督风采
  platform8 = () => {
    window.open("http://115.231.121.150:83/JDFC.aspx")
  }

  //工作动态
  platform9 = () => {
    window.open("http://wsjkw.zhoushan.gov.cn/col/col1228989991/index.html")
  }

  //工作动态
  platform10 = () => {
    window.open("http://datav.aliyuncs.com/share/9b68da0044bde51f14d239ebf67a6c6b")
  }


  //账号平台
  handleChange = (value) => {
    this.setState({
      platformname: value
    })
  }

  //修改账户
  handleOk = () => {
    // message.success('修改成功')
    this.setState({
      visible: false,
    })
  }


  render() {
    return (
      <div id="functionlist" className="covers">
        <div className="header">
          <img src={require('./logo1.png')} alt="" style={{ width: "70px", marginRight: '20px' }} />
                数字卫监 阳光执法统一执法平台
        </div>
        <div className="outline">
          <img src={require('./user.png')} alt="" style={{ width: "20px", marginRight: '20px' }} />
          舟山市管理员
          <img src={require('./out.png')} alt="" style={{ width: "20px", marginLeft: '20px', marginRight: '20px' }} />
          <Link to="/SignIn">
            <span style={{ color: 'white' }}>退出</span>
          </Link>

        </div>
        <div className="contline">
          <div className="lefttype">
            执法办案
          </div>
          <div className="conttitle" onClick={this.platform1}>
            <img src={require('./icon1.png')} alt="" className="imgsize" />
            <span>在线监控</span>
          </div>
          <div className="conttitle" onClick={this.platform2}>
            <img src={require('./icon2.png')} alt="" className="imgsize" />
            <span>执法系统</span>
          </div>
          <div className="conttitle" onClick={this.platform3}>
            <img src={require('./icon3.png')} alt="" className="imgsize" />
            <span>监督协管</span>
          </div>
        </div>

        <div className="contline">
          <div className="lefttypemid">
            监测平台
          </div>
          <div className="conttitlemid" onClick={this.platform4}>
            <img src={require('./icon4.png')} alt="" className="imgsize" />
            <span>水质检测</span>
          </div>
          <div className="conttitlemid" onClick={this.platform5}>
            <img src={require('./icon5.png')} alt="" className="imgsize" />
            <span>酒店消毒</span>
          </div>
          <div className="conttitlemid" onClick={this.platform6}>
            <img src={require('./icon6.png')} alt="" className="imgsize" />
            <span>吸烟监控</span>
          </div>
        </div>
        <div className="contline" style={{ marginTop: '30px' }}>
          <div className="lefttypemid" style={{ background: 'none' }}>

          </div>
          <div className="conttitlemid" onClick={this.miejun}>
            <img src={require('./icon7.png')} alt="" className="imgsize" />
            <span>医疗检测</span>
          </div>
          <div className="conttitlemid" onClick={this.platform7}>
            <img src={require('./icon8.png')} alt="" className="imgsize" />
            <span>空气放射</span>
          </div>
          <div className="conttitlemid" onClick={this.platform10}>
            <img src={require('./icon12.png')} alt="" className="imgsize" />
            <span>DATAV大屏</span>
          </div>
        </div>

        <div className="contline">
          <div className="lefttypebot">
            工作风采
          </div>
          <div className="conttitlebot" onClick={this.platform8}>
            <img src={require('./icon9.png')} alt="" className="imgsize" />
            <span>监督风采</span>
          </div>
          <div className="conttitlebot" onClick={this.platform9}>
            <img src={require('./icon10.png')} alt="" className="imgsize" />
            <span>工作动态</span>
          </div>
          <div className="conttitlebot" onClick={this.setaccount}>
            <img src={require('./icon11.png')} alt="" className="imgsize" />
            <span>账号设置</span>
          </div>
        </div>
        <Modal
          title="各平台账号设置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          destroyOnClose
          width="550px"
          centered
          mask={false}
        >
          <div>
            <div className="linetitle">
              <span className="lefttitle" >在线监控：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                autoComplete="off"
                value={this.state.name}
                onChange={this.name}
                className="linetext"
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.host}
                onChange={this.host}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">监督协管：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.name}
                onChange={this.name}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.host}
                onChange={this.host}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">水质检测：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.name}
                onChange={this.name}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.host}
                onChange={this.host}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">酒店消毒：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.name}
                onChange={this.name}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.host}
                onChange={this.host}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">吸烟监控：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.name}
                onChange={this.name}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.host}
                onChange={this.host}
              />
            </div>
            <div className="linetitle" style={{ border: 'none' }}>
              <span className="lefttitle">空气放射：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.name}
                onChange={this.name}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.host}
                onChange={this.host}
              />
            </div>

          </div>
        </Modal>
      </div>
    );
  }
}

export default SignIn = createForm()(SignIn);