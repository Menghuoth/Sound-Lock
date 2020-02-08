import React from "react";

import { Table, Divider, Tag } from 'antd';
import Avatar from "antd/es/avatar";
import TrackComponent from "../Track/TrackComponent";
import {Col} from "antd/es/grid";
import TrackPlayerComponent from "../Player/TrackPlayer";

const columns = [
    {
        title: '#',
        dataIndex: 'index',
        key: 'index',
    },
    {
        key: "imageUrl",
        dataIndex: "imageUrl",
        title: "",
        width: 50,
        render: (link) => (
            <Avatar
                src={link}
                shape="square"
                size={50} />
        )
    },
    {
        title: 'Song',
        dataIndex: 'song',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Artist',
        dataIndex: 'artist',
        key: 'artist'
    },
    {
        title: 'Action',
        key: 'action',
        width: '150px',
        render:(uselessString, track) => <TrackPlayerComponent track={track} />

    },
];

const data = [
    {
        index: 1,
        key: '1',
        song: 'John Brown',
        artist: 'New York No. 1 Lake Park',
    },
    {
        index: 2,
        key: '2',
        song: 'Jim Green',
        artist: 'London No. 1 Lake Park',
    },
    {
        index: 3,
        key: '3',
        song: 'Joe Black',
        artist: 'Sidney No. 1 Lake Park',
    },
];

const AlbumDetailList = props => {

    return (
        <Table columns={columns} dataSource={data} pagination={false}/>
    );
};

export default AlbumDetailList;