import React, { Component } from "react";
import { Icon,Input,AutoComplete } from 'antd';

import Ajax from '../util/ajax';
class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        }
    }
    handleSearch(value) {
        let _this = this;

        Ajax({
            type: 'get',
            url: 'http://120.79.15.180:3000/search/suggest',
            data: {
                keywords: value
            },
            success: function (str) {
                let datas = JSON.parse(str);
                let songs = [];
                if (datas.result) {
                    let songsArr = datas.result.songs;
                    for (let i = 0; i < songsArr.length; i++) {
                        let temp = songsArr[i].name + '-' + songsArr[i].artists[0].name
                        songs.push(temp);
                    }
                    _this.setState({
                        dataSource: !value ? [] : songs
                    });
                    songs.length =0 ;
                }
            }
        })

    }
    render() {
        const { dataSource } = this.state;
        return (
            <div className="search_wrap">
                <AutoComplete
                    className="search_box"
                    dataSource={this.state.dataSource}
                    onSearch={(value) => { this.handleSearch(value) }}
                    placeholder="请输入歌曲、歌手"
                >
                 <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                 </AutoComplete>
            </div>
        )
    }
}
export default Searcher;