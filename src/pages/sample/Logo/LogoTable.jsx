import {Button, Image, Space, Table} from "antd";
import { EditOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const LogoTable = ({data}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()


    const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/logo/add')
    };

    useEffect(()=>{
        const reverse=data?.reverse()
        setReverseData(reverse)
    },[data])
    const columns = [

        {
            title: 'Logo',
            dataIndex: 'logo',
            id: 'logo',
            render: (image) => {
                console.log(image)
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

LogoTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default LogoTable;