import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Modal, Input, message } from "antd";
import { url, getAllPlatformLoginInfo, editPlatformLoginInfo, getPlatformLoginInfoByType, urls } from "../axios";
import http from 'axios';
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

    ]).then(res => {
      if (res.data.message === 'success') {
        for (var i in res.data.data) {
          if (res.data.data[i].platform === 1) {
            this.setState({
              conut1: res.data.data[i].name,
              password1: res.data.data[i].pwd
            })
          }
          if (res.data.data[i].platform === 2) {
            this.setState({
              conut2: res.data.data[i].name,
              password2: res.data.data[i].pwd
            })
          }
          if (res.data.data[i].platform === 3) {
            this.setState({
              conut3: res.data.data[i].name,
              password3: res.data.data[i].pwd
            })
          }
          if (res.data.data[i].platform === 4) {
            this.setState({
              conut4: res.data.data[i].name,
              password4: res.data.data[i].pwd
            })
          }
          if (res.data.data[i].platform === 5) {
            this.setState({
              conut5: res.data.data[i].name,
              password5: res.data.data[i].pwd
            })
          }
          if (res.data.data[i].platform === 6) {
            this.setState({
              conut6: res.data.data[i].name,
              password6: res.data.data[i].pwd
            })
          }
        }
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

  //吸烟监控
  platform6 = () => {
    getPlatformLoginInfoByType([
      3
    ]).then(res => {
      if (res.data.message === 'success') {
        this.setState({
          name: res.data.data.name,
          password: res.data.data.pwd,
        }, function () {
          http.defaults.headers.get['Content-Type'] = "application/x-www-form-urlencoded"
          http.get(urls + '/login?username=' + this.state.name + '&password=' + this.state.password + '&type=user&grant_type=password', {
            auth: {
              username: "webApp",
              password: 'webApp',
            }
          }).then(res => {
            if (res.data.status === 1003) {
              message.error("用户名不存在！");
            }
            if (res.data.status === 1004) {
              message.error("密码错误");
            }
            if (res.data.status === -1) {
              message.error("账号已禁用");
            }
            if (res.data.status === 1) {
              localStorage.setItem('token', res.data.data.access_token);
              localStorage.setItem('usertype', res.data.data.type);
              localStorage.setItem('realname', res.data.data.realname);
              localStorage.setItem("currenttimes", new Date().getTime());
              localStorage.setItem("menulist", JSON.stringify(res.data.data.menu));
              localStorage.setItem("unitTree", JSON.stringify(res.data.data.unitTree[0].children));
              localStorage.setItem("AreaTree", JSON.stringify(res.data.data.AreaTree[0].children));
              window.open("http://smoke.terabits.cn/app/alarm")
            }
          })
        })
      }
    });
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


  //账号输入
  conut1 = (e) => {
    this.setState({
      conut1: e.target.value
    })
  }
  //密码输入
  password1 = (e) => {
    this.setState({
      password1: e.target.value
    })
  }

  //账号输入
  conut2 = (e) => {
    this.setState({
      conut2: e.target.value
    })
  }
  //密码输入
  password2 = (e) => {
    this.setState({
      password2: e.target.value
    })
  }
  //账号输入
  conut3 = (e) => {
    this.setState({
      conut3: e.target.value
    })
  }
  //密码输入
  password3 = (e) => {
    this.setState({
      password3: e.target.value
    })
  }
  //账号输入
  conut4 = (e) => {
    this.setState({
      conut4: e.target.value
    })
  }
  //密码输入
  password4 = (e) => {
    this.setState({
      password4: e.target.value
    })
  }
  //账号输入
  conut5 = (e) => {
    this.setState({
      conut5: e.target.value
    })
  }
  //密码输入
  password5 = (e) => {
    this.setState({
      password5: e.target.value
    })
  }
  //账号输入
  conut6 = (e) => {
    this.setState({
      conut6: e.target.value
    })
  }
  //密码输入
  password6 = (e) => {
    this.setState({
      password6: e.target.value
    })
  }
  //修改账户
  handleOk = () => {

    var arr = [{
      "platform": 1,
      "name": this.state.conut1,
      "pwd": this.state.password1,
      "id": 6,
    }, {
      "platform": 2,
      "name": this.state.conut2,
      "pwd": this.state.password2,
      "id": 7,
    }, {
      "platform": 3,
      "name": this.state.conut3,
      "pwd": this.state.password3,
      "id": 8,
    }, {
      "platform": 4,
      "name": this.state.conut4,
      "pwd": this.state.password4,
      "id": 9,
    }, {
      "platform": 5,
      "name": this.state.conut5,
      "pwd": this.state.password5,
      "id": 10,
    }, {
      "platform": 6,
      "name": this.state.conut6,
      "pwd": this.state.password6,
      "id": 11,
    }]
    editPlatformLoginInfo([
      JSON.stringify(arr)
    ]).then(res => {
      if (res.data.message === 'success') {
        message.success('修改成功')
        this.setState({
          visible: false,
        })
      }
    });

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
          <div className="lefttypemid">
            监测平台
          </div>
          <div className="conttitlemid" onClick={this.platform10}>
            <img src={require('./icon12.png')} alt="" className="imgsize" />
            <span>数字大屏</span>
          </div>
          <div className="conttitlemid" onClick={this.platform4}>
            <img src={require('./icon4.png')} alt="" className="imgsize" />
            <span>水质检测</span>
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
          <div className="conttitlemid" onClick={this.platform5}>
            <img src={require('./icon5.png')} alt="" className="imgsize" />
            <span>酒店消毒</span>
          </div>
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
              <span className="lefttitle">水质检测：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.conut1}
                onChange={this.conut1}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.password1}
                onChange={this.password1}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">酒店消毒：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.conut2}
                onChange={this.conut2}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.password2}
                onChange={this.password2}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">吸烟监控：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.conut3}
                onChange={this.conut3}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.password3}
                onChange={this.password3}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle">空气放射：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.conut4}
                onChange={this.conut4}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.password4}
                onChange={this.password4}
              />
            </div>
            <div className="linetitle">
              <span className="lefttitle" >在线监控：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                autoComplete="off"
                value={this.state.conut5}
                onChange={this.conut5}
                className="linetext"
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.password5}
                onChange={this.password5}
              />
            </div>
            <div className="linetitle" style={{ border: 'none' }}>
              <span className="lefttitle">执法系统：</span>
              <span>用户名</span>
              <Input placeholder="请输入用户名"
                className="linetext"
                autoComplete="off"
                value={this.state.conut6}
                onChange={this.conut6}
              />
              <span>密码</span>
              <Input placeholder="请输入密码"
                className="linetext"
                autoComplete="off"
                value={this.state.password6}
                onChange={this.password6}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignIn = createForm()(SignIn);