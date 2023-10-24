import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import ImgCrop from "antd-img-crop";


const initialValueForm = {
    name_uz: "",
    name_ru: "",
    image: "",

};


const BrandPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);

    // query-brand
    const {
        mutate: postBrandMutate,
        data: postBrand,
        isLoading: postBrandLoading,
        isSuccess: postBrandSuccess,
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
        isLoading: editBrandLoading,
        data: editBrandData,
        refetch: editBrandRefetch,
        isSuccess: editBrandSuccess,
    } = useQuery(["edit-brand", editId], () => apiService.getDataByID("/products/brand", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putBrand,
        isLoading: putBrandLoading,
        data: putData,
        isSuccess: putBrandSuccess
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

    // brand success
    useEffect(() => {
        if (putBrandSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postBrandSuccess || putBrandSuccess) {

            navigate('/brand')
        }
    }, [postBrand, putData])




    // if edit brand
    useEffect(() => {
        if (editId !== "") {
            editBrandRefetch();
        }
    }, [editId]);

    // if no edit brand
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit brand
    useEffect(() => {
        if (editBrandSuccess) {

            const imageInitial = [
                {
                    uid: editBrandData?.id,
                    name: editBrandData?.id,
                    status: 'done',
                    url: editBrandData?.image,
                },
            ]
            const edit = {
                name_uz: editBrandData.name_uz,
                name_ru: editBrandData.name_ru,
                image: editBrandData.image,
            }

            setFileListProps(imageInitial)
            form.setFieldsValue(edit)
        }

    }, [editBrandData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('name_uz', values.name_uz);
        formData.append('name_ru', values.name_ru);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        if (editBrandData) {
            putBrand({url: '/products/brand', data: formData, id: editId})
        } else {
            postBrandMutate({url: "/products/brand/", data: formData});
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


    // image
    const onChange = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({image: newFileList});
    };


    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <div>
            {(postBrandLoading || editBrandLoading || putBrandLoading) ?
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
                                label="Name Uz"
                                name="name_uz"
                                rules={[{required: true, message: 'Brand nomi kiritish talab qilinadi'}]}

                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Имя Ru"
                                name="name_ru"
                                rules={[{required: true, message: 'Требуется Имя бренда'}]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>

                    <Row gutter={20}>
                        <Form.Item
                            label='Изображение бренда'
                            name={'image'}
                            rules={[{required: true, message: 'Требуется загрузка Изображение бренда'}]}>
                            <ImgCrop rotationSlider>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChange}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Row>

                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editBrandSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default BrandPostEdit;