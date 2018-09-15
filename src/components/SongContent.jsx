import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import Ajax from '../util/ajax';
import skPlayer from 'skPlayer';
class SongContent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let oSong = document.getElementById('js-song_gd');
        let imgs = oSong.getElementsByTagName('img');
        let oTexts = oSong.getElementsByClassName('js-gd-info');
        let oSubs = oSong.getElementsByClassName('js-gd-sub');

        let oNewMusic = document.getElementById('new_music-wrap');
        let aSinger = oNewMusic.getElementsByClassName('singer');
        let aSongName = oNewMusic.getElementsByClassName('songs-name');
        let aFmImg = oNewMusic.getElementsByClassName('img-blur');

        let oMv = document.getElementById('js-mv-data');
        let imgs_MV = oMv.getElementsByTagName('img');
        let oTexts_MV = oMv.getElementsByClassName('js-mv-info');
        let oSubs_MV = oMv.getElementsByClassName('js-mv-sub');

        let aData_newMusic = document.getElementsByClassName('js-newMusic-obj');
        let arrData = [];
        Ajax({
            type: 'get',
            url: 'http://120.79.15.180:3000/personalized',
            success: function (str) {
                let datas = JSON.parse(str);
                let song_gd = datas.result;
                let len = imgs.length;
                // let temp = {
                //     name:'',
                //     author:'',
                //     src:'',
                //     cover:''
                // }
                for (let i = 0; i <= len; i++) {
                    if (imgs[i]) {
                        imgs[i].src = song_gd[i].picUrl;
                        oTexts[i].innerHTML = song_gd[i].copywriter;
                        oSubs[i].innerHTML = song_gd[i].name;
                    }


                }
            }
        })
        // 最新音乐
        Ajax({
            type: 'get',
            url: 'http://120.79.15.180:3000/personalized/newsong',
            success: function (str) {
                let datas = JSON.parse(str);
                let song_gd = datas.result;
                let len = aSongName.length;
                for (let i = 0; i <= len; i++) {
                    if (song_gd[i]) {
                        aSongName[i].innerHTML = song_gd[i].song.name;
                        aSinger[i].innerHTML = song_gd[i].song.artists[0].name;
                        aFmImg[i].src = song_gd[i].song.album.blurPicUrl;
                    }
                }
            }
        })

        Ajax({
            type: 'get',
            url: 'http://120.79.15.180:3000/personalized/mv',
            success: function (str) {
                let datas = JSON.parse(str);
                let song_gd = datas.result;
                let len = imgs_MV.length;
                for (let i = 0; i <= len; i++) {
                    if (imgs_MV[i]) {
                        imgs_MV[i].src = song_gd[i].picUrl;
                        oTexts_MV[i].innerHTML = song_gd[i].copywriter;
                        oSubs_MV[i].innerHTML = song_gd[i].name;
                    }

                }
            }
        })
    }
    render() {
        return (
            <Row>
                <Col sm={24} >
                    <div className="song-gd" id="js-song_gd">
                        <header>
                            <h2>推荐歌单</h2>
                            <span><a href="#">更多</a></span>
                        </header>
                        <ul>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/011.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>
                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/02.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/03.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/04.jpg')} alt="" />
                                    <Icon type="play-circle-o" />

                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/05.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/06.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/07.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/08.jpg')} alt="" />
                                    <Icon type="play-circle-o" />

                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>
                            </li>
                            <li className="hidden-sm">
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/01.jpg')} alt="" />
                                    <Icon type="play-circle-o" />

                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>
                            </li>
                            <li className="hidden-sm">
                                <a href="#" className="gd-wrap">
                                    <p className="gd-info js-gd-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/music_gd/04.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-gd-sub">陪你看夕阳 - 抓住那些即逝的美好</span>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col sm={24} >
                    <div className="new_music" id="new_music-wrap">
                        <header><h2>最新音乐</h2><span><a href="#">更多</a></span></header>
                        <ul className="list_music">
                            <Col sm={12}>
                                <div className="new_song-left">
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>01</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><img className="icon-sq" src={require('../public/images/sq.png')} /><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>02</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>03</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><img className="icon-sq" src={require('../public/images/sq.png')} /><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>04</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>05</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="new_song-right hidden-xs">
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>06</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><img className="icon-sq" src={require('../public/images/sq.png')} /><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>07</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><img className="icon-sq" src={require('../public/images/sq.png')} /><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>08</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>09</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><img className="icon-sq" src={require('../public/images/sq.png')} /><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-music='' className='js-newMusic-obj'>
                                            <div className="left"><h3>10</h3></div>
                                            <span>
                                                <img className="img-blur" src={require('../public/images/new_music.png')} alt="" />
                                                <Icon type="play-circle-o" />
                                            </span>

                                            <div className="right">
                                                <p className="songs-name">时代的标记</p>
                                                <span><img className="icon-sq" src={require('../public/images/sq.png')} /><span className="singer">汪峰</span></span>
                                            </div>
                                        </a>
                                    </li>
                                </div>
                            </Col>
                        </ul>
                    </div>
                </Col>
                <Col sm={24}>
                    <div className="song-gd mv-box" id="js-mv-data">
                        <header>
                            <h2>推荐歌单</h2>
                            <span><a href="#">更多</a></span>
                        </header>
                        <ul className="mv-list">
                            <li>
                                <a href="#" className="gd-wrap mv-wrap">
                                    <p className="gd-info js-mv-info mv-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/mv1.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-mv-sub">陪你看夕阳 - 抓住那些即逝的美好</span>
                            </li>
                            <li>
                                <a href="#" className="gd-wrap mv-wrap">
                                    <p className="gd-info js-mv-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/mv1.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-mv-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap mv-wrap">
                                    <p className="gd-info js-mv-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/mv1.jpg')} alt="" />
                                    <Icon type="play-circle-o" />
                                </a>
                                <span className="gd-sub js-mv-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>
                            <li>
                                <a href="#" className="gd-wrap mv-wrap">
                                    <p className="gd-info js-mv-info">编辑推荐：夕阳漏出的光，宛若触手可及</p>
                                    <img src={require('../public/images/mv1.jpg')} alt="" />
                                    <Icon type="play-circle-o" />

                                </a>
                                <span className="gd-sub js-mv-sub">陪你看夕阳 - 抓住那些即逝的美好</span>


                            </li>

                        </ul>
                    </div>
                </Col>
            </Row>

        )
    }
}
export default SongContent;