import { Button,   Space, Table,Image } from "antd";
import {  EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const AboutTable = ({data}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()


    const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/about/add')
    };

    useEffect(()=>{
        const reverse=data?.reverse()
        setReverseData(reverse)
    },[data])
    const columns = [
        {
            title: 'Text Uz',
            dataIndex: 'text_uz',
            id: 'text_uz',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Text Ru',
            dataIndex: 'text_ru',
            id: 'text_ru',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            id: 'image',
            render: (image) => {

                return (
                    <Image
                        width={50}

                        src={image?.image}
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

AboutTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default AboutTable;