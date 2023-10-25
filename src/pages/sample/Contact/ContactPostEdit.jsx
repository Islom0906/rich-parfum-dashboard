import React, {useEffect} from 'react';
import {Button, Col, Form, Input, message, Row, Space} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {MinusCircleOutlined} from "@ant-design/icons";

const initialValueForm = {
    name_ru:"",
    name_uz:"",
    contact_child: [
        {
            name_uz: "",
            name_ru: "",
            text: ""
        }
    ]
};





const ContactPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId}=useSelector(state => state.editData)
    const dispatch=useDispatch()




    // query-contact
    const {
        mutate: postContactMutate,
        data: postContact,
        isLoading: postContactLoading,
        isSuccess: postContactSuccess,
    } = useMutation(({url, data}) => apiService.postData(url, data),{
        onSuccess:()=>{

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
        isLoading: editContactLoading,
        data: editContactData,
        refetch: editContactRefetch,
        isSuccess: editContactSuccess,
    } = useQuery(["edit-contact", editId], () => apiService.getDataByID("/about/contact-father", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putContact,
        isLoading: putContactLoading,
        data: putData,
        isSuccess: putContactSuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id),{
        onSuccess:()=>{
            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // contact success
    useEffect(() => {
        if (putContactSuccess) {
            dispatch({type:EDIT_DATA,payload:""})
        }

        if (postContactSuccess || putContactSuccess) {

            navigate('/contact')
        }
    }, [postContact,putData])





    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editContactRefetch();
        }
    }, [editId]);

    // if no edit contact
    useEffect(() => {
        if (editId===""){
            form.setFieldsValue(initialValueForm)
        }
    }, []);




    //edit contact
    useEffect(()=>{
        if (editContactSuccess){
    const editContactChild=[]
            editContactData?.contact_child.map(item=>{
                const data={
                    name_ru:item.name_ru,
                    name_uz:item.name_uz,
                    text:item.text,
                }
                editContactChild.push(data)
            })


        const edit={
            name_ru:editContactData.name_ru,
            name_uz:editContactData.name_uz,
            contact_child: editContactChild
        }
            form.setFieldsValue(edit)
        }

    },[editContactData])



    const onFinish = (values) => {

        console.log(values)


        if (editContactData){
            putContact({url: '/about/contact-father',data:values,id:editId})
        }else{
            postContactMutate({url: "/about/contact-father/", data:values});
        }






    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    // refresh page again get data

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
    if (storedValues) {
        storedValues.images=[]
      form.setFieldsValue(storedValues);
    }

    const handleBeforeUnload = () => {
        
            localStorage.setItem(
              'myFormValues',
              JSON.stringify(form.getFieldsValue()),
            );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return ()=>{
        localStorage.removeItem('editDataId')
        localStorage.removeItem('myFormValues')
        window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, []);





    return (
        <div>
            {( postContactLoading ||editContactLoading ||putContactLoading) ?
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
                                label="Контактное лицо Ru"
                                name="name_ru"
                                rules={[
                                    {
                                        required: true,
                                        message: "Ввод Контактное лицо обязателен Ru!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Kontakt sarlavhasi Uz"
                                name="name_uz"
                                rules={[
                                    {
                                        required: true,
                                        message: "Kontakt sarlavhasi kiritish majburiy Uz!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>

                    <Form.List name={'contact_child'}>
                        {(fields, {add, remove}) => (
                            <>
                                {fields.map((field, index) => {
                                    return (
                                        <div key={field.fieldKey} style={{marginBottom: 20}}>
                                            <Space align={"start"}>


                                                <Form.Item
                                                    label={`Bog'lanish uchun ${index + 1}`}
                                                    name={[field.name, "name_uz"]}
                                                    rules={[
                                                        {required: true, message: "Bog'lanish uchun malumot kiriting"}
                                                    ]}
                                                    style={{width: "100%"}}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item
                                                    label={`Связаться ${index + 1}`}
                                                    name={[field.name, "name_ru"]}
                                                    rules={[
                                                        {required: true, message: "Связаться обязателен."}
                                                    ]}
                                                    style={{width: "100%"}}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                                <Form.Item
                                                    label={` ${index + 1}`}
                                                    name={[field.name, "text"]}

                                                    style={{width: "100%"}}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Space>


                                            <MinusCircleOutlined
                                                onClick={() => remove(field.name)}/>
                                        </div>

                                    );
                                })}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block>
                                        Add Item
                                    </Button>
                                </Form.Item>

                            </>
                        )}
                    </Form.List>
                        <Button type="primary" htmlType="submit" style={{width: "100%",marginTop:"20px"}}>
                    {
                            editContactSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default ContactPostEdit;