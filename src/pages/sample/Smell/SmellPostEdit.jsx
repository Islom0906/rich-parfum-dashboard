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


const SmellPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()



    // query-smell
    const {
        mutate: postSmellMutate,
        data: postSmell,
        isLoading: postSmellLoading,
        isSuccess: postSmellSuccess,
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
        isLoading: editSmellLoading,
        data: editSmellData,
        refetch: editSmellRefetch,
        isSuccess: editSmellSuccess,
    } = useQuery(["smell-category", editId], () => apiService.getDataByID("/products/smell", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putSmell,
        isLoading: putSmellLoading,
        data: putData,
        isSuccess: putSmellSuccess
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

    // smell success
    useEffect(() => {
        if (putSmellSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postSmellSuccess || putSmellSuccess) {

            navigate('/smell')
        }
    }, [postSmell, putData])




    // if edit smell
    useEffect(() => {
        if (editId !== "") {
            editSmellRefetch();
        }
    }, [editId]);

    // if no edit smell
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit smell
    useEffect(() => {
        if (editSmellSuccess) {


            const edit = {
                name_uz: editSmellData.name_uz,
                name_ru: editSmellData.name_ru,
            }

            form.setFieldsValue(edit)
        }

    }, [editSmellData])


    const onFinish = (values) => {




        if (editSmellData) {
            putSmell({url: '/products/smell', data: values, id: editId})
        } else {
            postSmellMutate({url: "/products/smell/", data: values});
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
            {(postSmellLoading || editSmellLoading || putSmellLoading) ?
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
                                label="Name uz"
                                name="name_uz"
                                rules={[{required: true, message: 'Hidni nomini talab qilish'}]}

                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Name Ru"
                                name="name_ru"
                                rules={[{required: true, message: 'Требуйте название запаха'}]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>



                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editSmellSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default SmellPostEdit;