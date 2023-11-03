import {Button, Image, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const PartnerTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()

    const Delete = async (id) => {
        deleteHandle('/about/partner',id)
    };
    const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/partner/add')
    };

    useEffect(()=>{
        const reverse=data?.reverse()
        setReverseData(reverse)
    },[data])
    const columns = [
        {
            title: 'Full name',
            dataIndex: 'full_name_uz',
            id: 'full_name_uz',
            render: (text) => <p>{text}</p>,
        },
        // {
        //     title: 'Job Uz',
        //     dataIndex: 'job_uz',
        //     id: 'job_uz',
        //     render: (text) => <p>{text}</p>,
        // },
        // {
        //     title: 'Job Ru',
        //     dataIndex: 'job_ru',
        //     id: 'job_ru',
        //         render: (text) => <p>{text}</p>,
        // },
        {
            title: 'Image',
            dataIndex: 'image',
            id: 'image',
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
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.text_ru}
                        </p>
                    ),
                }}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

PartnerTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default PartnerTable;