import React, {useEffect,  useState} from 'react';
import {Button, Col, Form, message, Row, Upload,  Input} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import ImgCrop from "antd-img-crop";


const initialValueForm = {
    image_uz: "",
    image_ru: "",
    title_ru: "",
    title_uz: "",


};


const SpecialPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsUz, setFileListPropsUz] = useState([]);
    const [fileListPropsRu, setFileListPropsRu] = useState([]);


    // query-special
    const {
        mutate: postSpecialMutate,
        data: postSpecial,
        isLoading: postSpecialLoading,
        isSuccess: postSpecialSuccess,
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
        isLoading: editSpecialLoading,
        data: editSpecialData,
        refetch: editSpecialRefetch,
        isSuccess: editSpecialSuccess,
    } = useQuery(["edit-special", editId], () => apiService.getDataByID("products/special", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putSpecial,
        isLoading: putSpecialLoading,
        data: putData,
        isSuccess: putSpecialSuccess
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

    // special success
    useEffect(() => {
        if (putSpecialSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postSpecialSuccess || putSpecialSuccess) {

            navigate('/special')
        }
    }, [postSpecial, putData])


    // if edit special
    useEffect(() => {
        if (editId !== "") {
            editSpecialRefetch();
        }
    }, [editId]);

    // if no edit special
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit special
    useEffect(() => {
        if (editSpecialSuccess) {

            const imageInitialUz = [
                {
                    uid: editSpecialData?.id,
                    name: editSpecialData?.id,
                    status: 'done',
                    url: editSpecialData?.image_uz,
                },
            ]
            const imageInitialRu = [
                {
                    uid: editSpecialData?.id,
                    name: editSpecialData?.id,
                    status: 'done',
                    url: editSpecialData?.image_ru,
                },
            ]
            const edit = {
                title_uz: editSpecialData.title_uz,
                title_ru: editSpecialData.title_ru,
                image_uz: editSpecialData.image_uz,
                image_ru: editSpecialData.image_ru,
            }


            setFileListPropsUz(imageInitialUz)
            setFileListPropsRu(imageInitialRu)
            form.setFieldsValue(edit)
        }

    }, [editSpecialData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);

        if (fileListPropsUz[0]?.originFileObj) {
            formData.append('image_uz', fileListPropsUz[0]?.originFileObj);
        }
        if (fileListPropsRu[0]?.originFileObj) {
            formData.append('image_ru', fileListPropsRu[0]?.originFileObj);
        }



        if (editSpecialData) {
            putSpecial({url: '/products/special', data: formData, id: editId})
        } else {
            postSpecialMutate({url: "/products/special/", data: formData});
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
    const onChangeUz = ({fileList: newFileList}) => {
        setFileListPropsUz(newFileList);
        form.setFieldsValue({image_uz: newFileList});
    };
    const onChangeRu = ({fileList: newFileList}) => {
        setFileListPropsRu(newFileList);
        form.setFieldsValue({image_ru: newFileList});
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
            {(postSpecialLoading || editSpecialLoading || putSpecialLoading) ?
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
                                label={'Specialning nomini kiriting'}
                                name={'title_uz'}
                                rules={[{required: true, message: 'Nomi talab qilinadi'}]}
                                wrapperCol={{
                                span: 24,
                            }}
                                >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={'Введите название спец.'}
                                name={'title_ru'}
                                rules={[{required: true, message: 'Требуется название спец'}]}
                                wrapperCol={{
                                    span: 24,
                                }}
                                >
                               <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение Ru'
                                name={'image_ru'}
                                rules={[{required: true, message: 'Требуется загрузка изображения Ru'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListPropsUz}
                                        listType='picture-card'
                                        onChange={onChangeUz}
                                        onPreview={onPreview}
                                        beforeUpload={() => false}
                                    >
                                        {fileListPropsUz.length > 0 ? "" : "Upload"}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение Uz'
                                name={'image_uz'}
                                rules={[{required: true, message: 'Требуется загрузка изображения Uz'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListPropsRu}
                                        listType='picture-card'
                                        onChange={onChangeRu}
                                        onPreview={onPreview}
                                        beforeUpload={() => false}
                                    >
                                        {fileListPropsRu.length > 0 ? "" : "Upload"}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editSpecialSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default SpecialPostEdit;