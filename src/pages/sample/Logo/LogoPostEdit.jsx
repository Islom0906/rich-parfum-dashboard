import React, {useEffect, useState} from 'react';
import {Button, Form,  message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import ImgCrop from "antd-img-crop";


const initialValueForm = {
    logo: "",
};


const LogoPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);

    // query-logo
    const {
        mutate: postLogoMutate,
        data: postLogo,
        isLoading: postLogoLoading,
        isSuccess: postLogoSuccess,
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
        isLoading: editLogoLoading,
        data: editLogoData,
        refetch: editLogoRefetch,
        isSuccess: editLogoSuccess,
    } = useQuery(["edit-logo", editId], () => apiService.getDataByID("/products/site-logo", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putLogo,
        isLoading: putLogoLoading,
        data: putData,
        isSuccess: putLogoSuccess
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

    // logo success
    useEffect(() => {
        if (putLogoSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postLogoSuccess || putLogoSuccess) {

            navigate('/logo')
        }
    }, [postLogo, putData])




    // if edit logo
    useEffect(() => {
        if (editId !== "") {
            editLogoRefetch();
        }
    }, [editId]);

    // if no edit logo
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit logo
    useEffect(() => {
        if (editLogoSuccess) {

            const imageInitial = [
                {
                    uid: editLogoData?.id,
                    name: editLogoData?.id,
                    status: 'done',
                    url: editLogoData?.logo,
                },
            ]
            const edit = {
                logo: editLogoData.logo,
            }

            setFileListProps(imageInitial)
            form.setFieldsValue(edit)
        }

    }, [editLogoData])


    const onFinish = () => {

        const formData = new FormData();


        if (fileListProps[0]?.originFileObj) {
            formData.append('logo', fileListProps[0]?.originFileObj);
        }

        if (editLogoData) {
            putLogo({url: '/products/site-logo', data: formData, id: editId})
        } else {
            postLogoMutate({url: "/products/site-logo/", data: formData});
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
        form.setFieldsValue({logo: newFileList});
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
            {(postLogoLoading || editLogoLoading || putLogoLoading) ?
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
                        <Form.Item
                            label='Изображение логотип только в формате png 90x60'
                            name={'logo'}
                            rules={[{required: true, message: 'Требуется загрузка Изображение логотип'}]}>
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
                            editLogoSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default LogoPostEdit;