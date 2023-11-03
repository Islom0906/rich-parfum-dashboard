import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import TextArea from "antd/es/input/TextArea";
import ImgCrop from "antd-img-crop";


const initialValueForm = {
    full_name_uz: "",
    full_name_ru: "",
    job_uz: "",
    job_ru: "",
    text_uz: "",
    text_ru: "",
    image: "",
    facebook: "",
    instagram: "",
    telegram: "",
    youtube: "",

};


const PartnerPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);


    // query-partner
    const {
        mutate: postPartnerMutate,
        data: postPartner,
        isLoading: postPartnerLoading,
        isSuccess: postPartnerSuccess,
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
        isLoading: editPartnerLoading,
        data: editPartnerData,
        refetch: editPartnerRefetch,
        isSuccess: editPartnerSuccess,
    } = useQuery(["edit-partner", editId], () => apiService.getDataByID("/about/partner", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putPartner,
        isLoading: putPartnerLoading,
        data: putData,
        isSuccess: putPartnerSuccess
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

    // partner success
    useEffect(() => {
        if (putPartnerSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postPartnerSuccess || putPartnerSuccess) {

            navigate('/partner')
        }
    }, [postPartner, putData])




    // if edit partner
    useEffect(() => {
        if (editId !== "") {
            editPartnerRefetch();
        }
    }, [editId]);

    // if no edit partner
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit partner
    useEffect(() => {
        if (editPartnerSuccess) {

            const imageInitial = [
                {
                    uid: editPartnerData?.id,
                    name: editPartnerData?.id,
                    status: 'done',
                    url: editPartnerData?.image,
                },
            ]
            const edit = {
                full_name_uz: editPartnerData.full_name_uz,
                full_name_ru: editPartnerData.full_name_ru,
                job_uz: editPartnerData.job_uz,
                job_ru: editPartnerData.job_ru,
                text_uz: editPartnerData.text_uz,
                text_ru: editPartnerData.text_ru,
                image: editPartnerData.image,
                facebook: '',
                instagram: '',
                telegram: '',
                youtube: ''
            }

            setFileListProps(imageInitial)
            form.setFieldsValue(edit)
        }

    }, [editPartnerData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('full_name_uz', values.full_name_uz);
        formData.append('full_name_ru', values.full_name_ru);
        formData.append('job_uz', '');
        formData.append('job_ru', '');
        formData.append('text_uz', values.text_uz);
        formData.append('text_ru', values.text_ru);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        formData.append('facebook', '');
        formData.append('telegram', '');
        formData.append('instagram', '');
        formData.append('youtube', '');


        if (editPartnerData) {
            putPartner({url: '/about/partner', data: formData, id: editId})
        } else {
            postPartnerMutate({url: "/about/partner/", data: formData});
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
            {(postPartnerLoading || editPartnerLoading || putPartnerLoading) ?
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
                                label="Full Name Uz"
                                name="full_name_uz"
                                rules={[{required: true, message: 'F.I.O ni kiritish talab qilinadi'}]}

                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Полное имя Ru"
                                name="full_name_ru"
                                rules={[{required: true, message: 'Требуется Полное имя'}]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>
                    {/*<Row gutter={20}>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            label="Kasb"*/}
                    {/*            name="job_uz"*/}
                    {/*            rules={[{required: true, message: 'Kasb talab qilinadi'}]}*/}

                    {/*        >*/}
                    {/*            <Input/>*/}
                    {/*        </Form.Item>*/}

                    {/*    </Col>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            label="Работа"*/}
                    {/*            name="job_ru"*/}
                    {/*            rules={[{required: true, message: 'Требуется Работа'}]}*/}
                    {/*        >*/}
                    {/*            <Input/>*/}
                    {/*        </Form.Item>*/}

                    {/*    </Col>*/}

                    {/*</Row>*/}
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Fikr-mulohaza"
                                name="text_uz"
                                rules={[{required: true, message: 'Требуется Fikr-mulohaza'}]}

                            >
                                <TextArea rows={4}/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Обратная связь"
                                name="text_ru"
                                rules={[{required: true, message: 'Требуется Обратная связь'}]}
                            >
                                <TextArea rows={4}/>
                            </Form.Item>

                        </Col>

                    </Row>
                    <Row gutter={20}>
                        <Form.Item
                            label='Изображение Пользователь'
                            name={'image'}
                            rules={[{required: true, message: 'Требуется загрузка изображения Пользователь'}]}>
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
                    {/*<Title level={4}>Социальные сети пользователя</Title>*/}
                    {/*<Row gutter={20}>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            label="Facebook"*/}
                    {/*            name="facebook"*/}
                    {/*            rules={[{required: true, message: 'Требуется Facebook'}]}*/}

                    {/*        >*/}
                    {/*            <Input addonBefore={'https://'}/>*/}
                    {/*        </Form.Item>*/}

                    {/*    </Col>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            label="Instagram"*/}
                    {/*            name="instagram"*/}
                    {/*            rules={[{required: true, message: 'Требуется Instagram'}]}*/}
                    {/*        >*/}
                    {/*            <Input addonBefore={'https://'}/>*/}
                    {/*        </Form.Item>*/}

                    {/*    </Col>*/}

                    {/*</Row>*/}
                    {/*<Row gutter={20}>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            label="Telegram"*/}
                    {/*            name="telegram"*/}
                    {/*            rules={[{required: true, message: 'Требуется Telegram'}]}*/}
                    {/*        >*/}
                    {/*            <Input addonBefore={'https://'}/>*/}
                    {/*        </Form.Item>*/}

                    {/*    </Col>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            label="Youtube"*/}
                    {/*            name="youtube"*/}
                    {/*            rules={[{required: true, message: 'Требуется Youtube'}]}*/}

                    {/*        >*/}
                    {/*            <Input addonBefore={'https://'}/>*/}
                    {/*        </Form.Item>*/}

                    {/*    </Col>*/}

                    {/*</Row>*/}
                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editPartnerSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default PartnerPostEdit;