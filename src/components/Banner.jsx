import React, { Component } from "react";
import { Carousel } from 'antd';
import Ajax from '../util/ajax';
class Banner extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Ajax({
            type: 'get',
            url: 'http://120.79.15.180:3000/banner',
            success: function (str) {
                let datas = JSON.parse(str);
                let oBanBox = document.getElementsByClassName('js-banner')[0];
                let imgArr = oBanBox.getElementsByTagName('img');
                for(let i=0;i<imgArr.length;i++){
                    imgArr[i].src = datas.banners[i].pic;
                }
            }
        })
    }
    render() {
        return (
            <Carousel className="js-banner" effect="fade" autoplay >
                <div><img src={require('../public/images/banner/img01.jpg')} alt="banner" /></div>
                <div><img src={require('../public/images/banner/img02.jpg')} alt="banner" /></div>
                <div><img src={require('../public/images/banner/img03.jpg')} alt="banner" /></div>
                <div><img src={require('../public/images/banner/img04.jpg')} alt="banner" /></div>
                <div><img src={require('../public/images/banner/img05.jpg')} alt="banner" /></div>
            </Carousel>

        )
    }
}
export default Banner;