import React from 'react';
import {Button, Form,  InputNumber, Space,Typography} from "antd";
import {MinusCircleOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
const { Title } = Typography;

import './product.css'

const FormListType = ({name,title,value}) => {
    return (

        <div className={`${value!==title ? 'hidden' :''}`}>
            <Title level={3}>{title}</Title>
            <Form.List name={name}>
                {(fields, {add, remove}) => (
                    <>
                        {fields.map((field, index) => {
                            return (
                                <div key={field.fieldKey} style={{marginBottom: 20}}>
                                    <Space align={"start"}>


                                        <Form.Item
                                            label={`Объем парфюма ${index + 1}`}
                                            name={[field.name, "litr"]}
                                            rules={[
                                                {required: true, message: "Размер духов обязателен."}
                                            ]}
                                            style={{width: "100%"}}
                                        >
                                            <InputNumber style={{width: "100%"}}/>
                                        </Form.Item>
                                        <Form.Item
                                            label={`Цена парфюма ${index + 1}`}
                                            name={[field.name, "price"]}
                                            rules={[
                                                {required: true, message: "Требуется цена на духи."}
                                            ]}
                                            style={{width: "100%"}}
                                        >
                                            <InputNumber style={{width: "100%"}}/>
                                        </Form.Item>
                                        <Form.Item
                                            label={`Цена на духи со скидкой ${index + 1}`}
                                            name={[field.name, "discount"]}

                                            style={{width: "100%"}}
                                        >
                                            <InputNumber style={{width: "100%"}}/>
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
        </div>
    );
};

FormListType.propTypes={
    name:PropTypes.string,
    title:PropTypes.string,
    value:PropTypes.string,
}

export default FormListType;