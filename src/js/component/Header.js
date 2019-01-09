 import React, { Component} from 'react';
//  import 'antd/dist/antd.css';
 import {Icon, Row, Col} from 'antd';
 import "../../css/componentsCss.css";

 export default class Header extends Component {
   render() {
     return (
       <div className="HeaderSize">
            <Row type="flex" justify="space-around">
                <Col span={4}>logo</Col>
                <Col span={2}>Post</Col>
                <Col span={2}>Login</Col>
                <Col span={2}>Register</Col>
            </Row>
       </div>
     );
   }
 }