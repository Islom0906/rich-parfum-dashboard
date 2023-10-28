import { Button,  Popconfirm, Space, Table,Image } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";



const ProductTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const Delete = async (id) => {
        deleteHandle('/products/product',id)
    };

    const [reverseData,setReverseData]=useState([])



    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/product/add')
    };


    useEffect(()=>{
        const reverse=data?.reverse()
        setReverseData(reverse)
    },[data])



    const columns = [
        {
            title: 'Name Uz',
            dataIndex: 'name_uz',
            id: 'name_uz',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Name Ru',
            dataIndex: 'name_ru',
            id: 'name_ru',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Brand Name',
            dataIndex: 'brand_name',
            id: 'brand_name',
            render: (text) => <p>{text}</p>,
        },

        {
            title: 'Image',
            dataIndex: 'product_images',
            id: 'product_images',
            render: (image) => {
                return (
                    <Image
                        width={50}

                        src={image[0]?.image}
                    />
                )},
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record.slug)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Popconfirm
                        title={'Are you sure to delete this task?'}
                        description={'Delete the task '}
                        onConfirm={() => Delete(record.slug)}>
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

ProductTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default ProductTable;