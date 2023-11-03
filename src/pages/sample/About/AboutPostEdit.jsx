import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Upload,Typography} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {MinusCircleOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";

const {Title}=Typography


const initialValueForm = {
    image: [],
    text_uz: "",
    text_ru: "",
    about_children: [
        {
            name_uz: "",
            name_ru: "",
            image: []
        }
    ]
};


const OptionPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsMain, setFileListPropsMain] = useState([]);
    const [fileListPropsChild, setFileListPropsChild] = useState([]);
    const [isUpload, setIsUpload] = useState('');
    const [mainIndex, setMainIndex] = useState(0);


    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess,
    } = useMutation(({url, formData}) => apiService.postData(url, formData), {

        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });


    // query-about
    const {
        mutate: postAboutMutate, data: postAbout, isLoading: postAboutLoading, isSuccess: postAboutSuccess,

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
        isLoading: editAboutLoading,
        data: editAboutData,
        refetch: editAboutRefetch,
        isSuccess: editAboutSuccess,

    } = useQuery(["edit-about", editId], () => apiService.getDataByID("/about/about", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putAbout, isLoading: putAboutLoading, data: putData, isSuccess: putAboutSuccess
    } = useMutation(({
                         url, data, id
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

    // delete image

    const {mutate: imagesDeleteMutate} = useMutation(({url, ids}) => apiService.deleteImages(url, ids), {
        onSuccess: () => message.success('Success'), onError: (error) => message.error(error.message)
    });

    //                                              =====useEffect====

    // about success
    useEffect(() => {
        if (putAboutSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postAboutSuccess || putAboutSuccess) {
            navigate('/about')
        }
    }, [postAbout, putData])

    // if edit about
    useEffect(() => {
        if (editId !== "") {
            editAboutRefetch();
        }
    }, [editId]);

    // if no edit about
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit about
    useEffect(() => {
        const initialAbout = [];
        const initialFileListPropsAbout = [];

        if (editAboutData !== undefined) {
            for (let i = 0; i < editAboutData.about_children.length; i++) {

                let editDefaultImages = [{
                    uid: editAboutData.about_children[i]?.image?.id,
                    name: editAboutData.about_children[i]?.image?.id,
                    status: "done",
                    url: editAboutData.about_children[i]?.image?.image
                }];
                const item = {
                    name_uz: editAboutData.about_children[i].name_uz,
                    name_ru: editAboutData.about_children[i].name_ru,
                    image: editDefaultImages
                };
                initialAbout.push(item);
                initialFileListPropsAbout.push(editDefaultImages)
            }
        }


        const imageInitialMain = [{
            uid: editAboutData?.image?.id,
            name: editAboutData?.image?.id,
            status: 'done',
            url: editAboutData?.image?.image,
        }];

        if (editAboutSuccess) {

            const edit = {
                image: imageInitialMain,
                text_uz: editAboutData.text_uz,
                text_ru: editAboutData.text_ru,
                about_children: initialAbout

            }

            setFileListPropsMain(imageInitialMain);
            setFileListPropsChild(initialFileListPropsAbout)
            form.setFieldsValue(edit)
        }

    }, [editAboutData])
    const onFinish = (values) => {


        const children = []

        for (let i = 0; i < values.about_children.length; i++) {
            let isImage = ""
            if (fileListPropsChild.length > 0) {
                if (fileListPropsChild[i] === null || fileListPropsChild[i]?.length < 1) {
                    isImage = ""
                } else {
                    isImage = fileListPropsChild[i][0]?.uid
                }
            }

            const item = {
                name_uz: values.about_children[i].name_uz,
                name_ru: values.about_children[i].name_ru,
                image: [isImage]
            };
            children.push(item);
        }


        const data = {
            text_uz: values.text_uz,
            text_ru: values.text_ru,
            image: [fileListPropsMain[0]?.uid],
            about_children: children
        };
        if (editAboutSuccess) {
            putAbout({url: "/about/about", data, id: editId});
        } else {
            postAboutMutate({url: "/about/about/", data});
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

            localStorage.setItem('myFormValues', JSON.stringify(form.getFieldsValue()),);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);




    // image

    useEffect(() => {
        // MAIN
        if (imagesUploadSuccess && isUpload === "main") {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]

            setFileListPropsMain(uploadImg);
            setIsUpload('')
        }


        // CHILD
        const uploadFilesStateAbout = [...fileListPropsChild];
        if (imagesUploadSuccess && isUpload === 'child') {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]
            uploadFilesStateAbout[mainIndex] = uploadImg;
            setFileListPropsChild(uploadFilesStateAbout);
            const getValue = form.getFieldsValue();
            const itemsValue = getValue?.about_children;
            if (!itemsValue[mainIndex]) {
                itemsValue[mainIndex] = {
                    name_uz: "",
                    name_ru: "",
                    image: []
                }
            }
            itemsValue[mainIndex].image = uploadImg;
            form.setFieldsValue({items: itemsValue});
            setIsUpload('')
        }

    }, [imagesUpload]);

    const onChangeMainImage = ({fileList: newFileList}) => {

        form.setFieldsValue({image: newFileList});
        if (fileListPropsMain.length !== 0 || newFileList.length === 0) {
            const id = [fileListPropsMain[0]?.uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
            setFileListPropsMain([])
        }
        const formData = new FormData();

        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/products/product-image/", formData});
            setIsUpload('main')
        }
    };

    const onChangeChildImage = (index, {fileList: newFileList}) => {
        setMainIndex(index);


        if (fileListPropsChild[index] || newFileList.length === 0) {
            const id = [fileListPropsChild[index][0].uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
            fileListPropsChild[index] = null;
            setFileListPropsChild(fileListPropsChild);

        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/products/product-image/", formData});
            setIsUpload('child')

        }
    };


    // handleRemoveAbout
    const handleRemoveAbout = (name, remove, index, editorFileList) => {

        if (editorFileList === fileListPropsChild[index] && fileListPropsChild.length > 0) {
            const id = [fileListPropsChild[index][0]?.uid];
            fileListPropsChild.splice(index, 1);
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "/delete-images", ids});
        }
        remove(name);
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


    const addFormList = (add) => {
        let itemsValue = [];
        add()
        const getValue = form.getFieldsValue();
        if (!getValue?.about_children[0]) {
            itemsValue.push({
                name_uz: "",
                name_ru: "",
                image: []
            })
        }
        form.setFieldsValue({items: itemsValue});
    }

    return (<div>
        {(postAboutLoading || editAboutLoading || putAboutLoading || imagesUploadLoading) ? <AppLoader/> :
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
                            label="Выберите Вариант"
                            name="text_ru"
                            rules={[{
                                required: true, message: "Пожалуйста, введите Вариант"
                            }]}
                        >
                            <TextArea rows={4}/>
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Kompaniya haqida matn"
                            name="text_uz"
                            rules={[{
                                required: true, message: "Matn talab qilinadi"
                            }]}
                        >
                            <TextArea rows={4}/>
                        </Form.Item>

                    </Col>
                </Row>


                <Row gutter={20}>

                    <Col span={12}>
                        <Form.Item
                            label='Изображение основной'
                            name={'image'}
                            rules={[{required: true, message: 'Требуется загрузка изображения основной'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsMain}
                                    listType='picture-card'
                                    onChange={onChangeMainImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsMain.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>Добавить преимущества</Title>
                <Form.List name="about_children">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                const editorFileList = fileListPropsChild[index] || [];
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={12}>
                                                <Form.Item
                                                    label='Afzalliklar nomi'
                                                    name={[field.name, 'name_uz']}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Afzalliklar nomi talab qilinadi'
                                                    }]}
                                                    >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label='Наименование Преимущества'
                                                    name={[field.name, 'name_ru']}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Требуется Наименование Преимущества'
                                                    }]}
                                                    >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>

                                        </Row>


                                        <Form.Item
                                            label={`Преимущества Фото ${index + 1}`}
                                            name={[field.name, "image"]}
                                            rules={[{
                                                required: true,
                                                message: 'Требуется загрузка изображения Преимущества'
                                            }]}>

                                            <ImgCrop rotate>
                                                <Upload
                                                    maxCount={1}
                                                    listType="picture-card"
                                                    fileList={editorFileList}
                                                    onChange={(newFileList) => onChangeChildImage(index, newFileList)}
                                                    onPreview={onPreview}
                                                    beforeUpload={() => false}
                                                >
                                                    {editorFileList.length < 1 && "+ Upload"}
                                                </Upload>
                                            </ImgCrop>
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => handleRemoveAbout(field.name, remove, index, editorFileList)}/>
                                    </div>

                                );
                            })}
                            <Form.Item>
                                <Button type="primary" onClick={() => addFormList(add)} block
                                        style={{backgroundColor: '#28a745'}}>
                                    Добавьте предмет
                                </Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>


                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editAboutSuccess ? 'Edit' : 'Add'}
                </Button>
            </Form>}
    </div>);
};

export default OptionPostEdit;