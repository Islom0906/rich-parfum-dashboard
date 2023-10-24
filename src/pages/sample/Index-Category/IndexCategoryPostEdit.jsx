import React, {useEffect} from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";


const initialValueForm = {
    name: "",
    date: "",

};


const IndexCategoryPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()



    // query-IndexCategory
    const {
        mutate: postIndexCategoryMutate,
        data: postIndexCategory,
        isLoading: postIndexCategoryLoading,
        isSuccess: postIndexCategorySuccess,
    } = useMutation(({url, data}) => apiService.postData(url, data), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // query-edit
    const {
        isLoading: editIndexCategoryLoading,
        data: editIndexCategoryData,
        refetch: editIndexCategoryRefetch,
        isSuccess: editIndexCategorySuccess,
    } = useQuery(["edit-index-category", editId], () => apiService.getDataByID("/products/index-category", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putIndexCategory,
        isLoading: putIndexCategoryLoading,
        data: putData,
        isSuccess: putIndexCategorySuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id), {
        onSuccess: () => {
            message.success('Success')
        },
        onError: (error) => {

            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }

        }
    });

    // IndexCategory success
    useEffect(() => {
        if (putIndexCategorySuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postIndexCategorySuccess || putIndexCategorySuccess) {

            navigate('/index-category')
        }
    }, [postIndexCategory, putData])




    // if edit IndexCategory
    useEffect(() => {
        if (editId !== "") {
            editIndexCategoryRefetch();
        }
    }, [editId]);

    // if no edit IndexCategory
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit IndexCategory
    useEffect(() => {
        if (editIndexCategorySuccess) {


            const edit = {
                name: editIndexCategoryData.name,
                date: editIndexCategoryData.date===null ? "" : editIndexCategoryData.date,
            }

            form.setFieldsValue(edit)
        }

    }, [editIndexCategoryData])


    const onFinish = (values) => {




        if (editIndexCategoryData) {
            putIndexCategory({url: '/products/index-category', data: values, id: editId})
        } else {
            postIndexCategoryMutate({url: "/products/index-category/", data: values});
        }


    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    // refresh page again get data

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
        if (storedValues) {
            storedValues.images = []
            form.setFieldsValue(storedValues);
        }

        const handleBeforeUnload = () => {

            localStorage.setItem(
                'myFormValues',
                JSON.stringify(form.getFieldsValue()),
            );
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);



    return (
        <div>
            {(postIndexCategoryLoading || editIndexCategoryLoading || putIndexCategoryLoading) ?
                <AppLoader/> :
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 24
                    }}
                    wrapperCol={{
                        span: 24
                    }}
                    style={{
                        maxWidth: "100%"
                    }}
                    initialValues={initialValueForm}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{required: true, message: 'Категория обязательна'}]}

                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Дата"
                                name="date"
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>



                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editIndexCategorySuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default IndexCategoryPostEdit;