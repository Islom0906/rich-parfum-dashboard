import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form,  message, Row, Upload, Select} from "antd";
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
    discount: "",
    smell: "",


};


const BannerSecondPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsUz, setFileListPropsUz] = useState([]);
    const [fileListPropsRu, setFileListPropsRu] = useState([]);


    // query-second-banner
    const {
        mutate: postBannerSecondMutate,
        data: postBannerSecond,
        isLoading: postBannerSecondLoading,
        isSuccess: postBannerSecondSuccess,
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

    // query-smell
    const {data: smellData, refetch: smellFetch} = useQuery(
        'get-brand',
        () => apiService.getData('/products/smell/'),
        {
            enabled: false,
        },
    );


    // query-edit
    const {
        isLoading: editBannerSecondLoading,
        data: editBannerSecondData,
        refetch: editBannerSecondRefetch,
        isSuccess: editBannerSecondSuccess,
    } = useQuery(["edit-second-banner", editId], () => apiService.getDataByID("/about/header-banner-second", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putBannerSecond,
        isLoading: putBannerSecondLoading,
        data: putData,
        isSuccess: putBannerSecondSuccess
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

    // banner success
    useEffect(() => {
        if (putBannerSecondSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postBannerSecondSuccess || putBannerSecondSuccess) {

            navigate('/banner-second')
        }
    }, [postBannerSecond, putData])


    // if edit banner
    useEffect(() => {
        if (editId !== "") {
            editBannerSecondRefetch();
        }
    }, [editId]);

    // if no edit banner
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
        smellFetch()
    }, []);


    //edit banner
    useEffect(() => {
        if (editBannerSecondSuccess) {

            const imageInitialUz = [
                {
                    uid: editBannerSecondData?.id,
                    name: editBannerSecondData?.id,
                    status: 'done',
                    url: editBannerSecondData?.image_uz,
                },
            ]
            const imageInitialRu = [
                {
                    uid: editBannerSecondData?.id,
                    name: editBannerSecondData?.id,
                    status: 'done',
                    url: editBannerSecondData?.image_ru,
                },
            ]
            const edit = {
                discount: editBannerSecondData.discount,
                smell: editBannerSecondData.smell,
                image_uz: editBannerSecondData.image_uz,
                image_ru: editBannerSecondData.image_ru,
            }

            setFileListPropsUz(imageInitialUz)
            setFileListPropsRu(imageInitialRu)
            form.setFieldsValue(edit)
        }

    }, [editBannerSecondData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('discount', values.discount);
        formData.append('smell', values.smell);

        if (fileListPropsUz[0]?.originFileObj) {
            formData.append('image_uz', fileListPropsUz[0]?.originFileObj);
        }
        if (fileListPropsRu[0]?.originFileObj) {
            formData.append('image_ru', fileListPropsRu[0]?.originFileObj);
        }



        if (editBannerSecondData) {
            putBannerSecond({url: '/about/header-banner-second', data: formData, id: editId})
        } else {
            postBannerSecondMutate({url: "/about/header-banner-second/", data: formData});
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


    const optionsDiscount = useMemo(() => {
        return [
            {
                value: 'Все',
                label: 'Все',
            },
        ]
    }, []);

    const optionsSmell = useMemo(() => {
        return smellData?.map((option) => {
            return {
                value: option?.name_ru,
                label: option?.name_ru,
            };
        });
    }, [smellData]);

    return (
        <div>
            {(postBannerSecondLoading || editBannerSecondLoading || putBannerSecondLoading) ?
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
                                label={'Выберите Скидка'}
                                name={'discount'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                >
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну Скидка'
                                    optionLabelProp='label'
                                    options={optionsDiscount}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={'Выберите Запах'}
                                name={'smell'}
                                wrapperCol={{
                                    span: 24,
                                }}
                               >
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну Запах'
                                    optionLabelProp='label'
                                    options={optionsSmell}
                                />
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
                                        onChange={onChangeRu}
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
                                label='Banner rasm Uz'
                                name={'image_uz'}
                                rules={[{required: true, message: 'Banner Rasm talab qilinadi'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListPropsRu}
                                        listType='picture-card'
                                        onChange={onChangeUz}
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
                            editBannerSecondSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default BannerSecondPostEdit;

