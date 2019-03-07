/*
 * @Author: Oceanjs
 * @LastEditors: Oceanjs
 * @Description: file content
 * @Email: wanghaiyang@ahdms.com
 * @Company: 迪曼森
 * @Date: 2019-02-21 11:01:35
 * @LastEditTime: 2019-02-25 14:27:19
 */
/* var config = require('./config.json')

module.exports = {
    sayhello:function() {
        console.log(config.hello);
    }
} */




import React,{Component} from 'react'
import config from './config.json'

import one from "./hello.css";

class hello extends Component {
    render() {
        return (
            <div className={one.root}>
                {config.world}
            </div>
        )
    }
}
export default hello
