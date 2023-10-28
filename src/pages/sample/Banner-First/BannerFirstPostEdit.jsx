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
    season: "",
    brand: "",


};


const BannerFirstPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsUz, setFileListPropsUz] = useState([]);
    const [fileListPropsRu, setFileListPropsRu] = useState([]);


    // query-first-banner
    const {
        mutate: postBannerFirstMutate,
        data: postBannerFirst,
        isLoading: postBannerFirstLoading,
        isSuccess: postBannerFirstSuccess,
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

    // query-brand
    const {data: brandData, refetch: brandFetch} = useQuery(
        'get-brand',
        () => apiService.getData('/products/brand/'),
        {
            enabled: false,
        },
    );

    // query-edit
    const {
        isLoading: editBannerFirstLoading,
        data: editBannerFirstData,
        refetch: editBannerFirstRefetch,
        isSuccess: editBannerFirstSuccess,
    } = useQuery(["edit-first-banner", editId], () => apiService.getDataByID("/about/header-banner-first", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putBannerFirst,
        isLoading: putBannerFirstLoading,
        data: putData,
        isSuccess: putBannerFirstSuccess
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
        if (putBannerFirstSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postBannerFirstSuccess || putBannerFirstSuccess) {

            navigate('/banner-first')
        }
    }, [postBannerFirst, putData])


    // if edit banner
    useEffect(() => {
        if (editId !== "") {
            editBannerFirstRefetch();
        }
    }, [editId]);

    // if no edit banner
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
        brandFetch()
    }, []);


    //edit banner
    useEffect(() => {
        if (editBannerFirstSuccess) {

            const imageInitialUz = [
                {
                    uid: editBannerFirstData?.id,
                    name: editBannerFirstData?.id,
                    status: 'done',
                    url: editBannerFirstData?.image_uz,
                },
            ]
            const imageInitialRu = [
                {
                    uid: editBannerFirstData?.id,
                    name: editBannerFirstData?.id,
                    status: 'done',
                    url: editBannerFirstData?.image_ru,
                },
            ]
            const edit = {
                brand: editBannerFirstData.brand,
                season: editBannerFirstData.season,
                image_uz: editBannerFirstData.image_uz,
                image_ru: editBannerFirstData.image_ru,
            }


            setFileListPropsUz(imageInitialUz)
            setFileListPropsRu(imageInitialRu)
            form.setFieldsValue(edit)
        }

    }, [editBannerFirstData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('season', values.season);
        formData.append('brand', values.brand);

        if (fileListPropsUz[0]?.originFileObj) {
            formData.append('image_uz', fileListPropsUz[0]?.originFileObj);
        }
        if (fileListPropsRu[0]?.originFileObj) {
            formData.append('image_ru', fileListPropsRu[0]?.originFileObj);
        }



        if (editBannerFirstData) {
            putBannerFirst({url: '/about/header-banner-first', data: formData, id: editId})
        } else {
            postBannerFirstMutate({url: "/about/header-banner-first/", data: formData});
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


    const optionsOccasion = useMemo(() => {
        return [
            {
                value: 'spring',
                label: 'Весна',
            },
            {
                value: 'summer',
                label: 'Лето',
            },
            {
                value: 'autumn',
                label: 'Осень',
            },
            {
                value: 'winter',
                label: 'Зима',
            }
        ]
    }, []);

    const optionsBrand = useMemo(() => {
        return brandData?.map((option) => {
            return {
                value: option?.name_ru,
                label: option?.name_ru,
            };
        });
    }, [brandData]);

    return (
        <div>
            {(postBannerFirstLoading || editBannerFirstLoading || putBannerFirstLoading) ?
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
                                label={'Выберите повод'}
                                name={'season'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                >
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну повод'
                                    optionLabelProp='label'
                                    options={optionsOccasion}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={'Выберите бренд'}
                                name={'brand'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                >
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну бренд'
                                    optionLabelProp='label'
                                    options={optionsBrand}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение Ru'
                                name={'image_uz'}
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
                                name={'image_ru'}
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
                            editBannerFirstSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default BannerFirstPostEdit;