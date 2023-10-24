import {Button, Image, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const BannerSecondTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()

    const Delete = async (id) => {
        deleteHandle('/about/header-banner-second',id)
    };
    const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/banner-second/add')
    };

    useEffect(()=>{
        const reverse=data?.reverse()
        setReverseData(reverse)
    },[data])
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image_ru',
            id: 'image_ru',
            render: (image) => {
                return (
                    <Image
                        width={50}
                        src={image}
                    />
                )
            },
        },

        {
            title: 'Запах',
            dataIndex: 'smell',
            id: 'smell',
                render: (text) => <p>{text}</p>,
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record.id)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Popconfirm
                        title={'Are you sure to delete this task?'}
                        description={'Delete the task '}
                        onConfirm={() => Delete(record.id)}>
                        <Button type='danger' icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={reverseData}

                rowKey={(record) => record.id}
            />
        </div>
    );
};

BannerSecondTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default BannerSecondTable;