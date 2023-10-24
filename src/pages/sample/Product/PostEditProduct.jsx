import {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Select, Radio, Upload,} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ImgCrop from 'antd-img-crop';
import {useMutation, useQuery} from 'react-query';
import apiService from '../../../@crema/services/apis/api';
import {AppLoader} from '../../../@crema';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import FormListType from "./FormListType";

const initialValueForm = {
    name_uz: "",
    name_ru: "",
    the_parmufe_uz: "",
    the_parmufe_ru: "",
    ingredients_uz: "",
    ingredients_ru: "",
    scents_uz: "",
    scents_ru: "",
    gender: "",
    occasion: "",
    category: null,
    brand: null,
    smell: null,
    image: [
        null
    ],
    copy:[

    ],
    luxCopy:[

    ],
    original:[

    ]

};

const PostEditProduct = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {editId} = useSelector((state) => state.editData);
    const dispatch = useDispatch();


    const [fileListProps, setFileListProps] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [valuesForm, setValues] = useState({});
    const [isNotEditImages, setIsNotEditImages] = useState(false);
    const [deleteImage, setDeleteImage] = useState({});
    const [productType, setProductType] = useState('copy');


    //                                           ===React-Query===
    // query-category
    const {data: categoryData, refetch: categoryFetch} = useQuery(
        'get-categories',
        () => apiService.getData('/products/index-category/'),
        {
            enabled: false,
        },
    );

    // query-brand
    const {data: brandData, refetch: brandFetch} = useQuery(
        'get-brand',
        () => apiService.getData('/products/brand/'),
        {
            enabled: false,
        },
    );

    // query-smell
    const {data: smellData, refetch: smellFetch} = useQuery(
        'get-smell',
        () => apiService.getData('/products/smell/'),
        {
            enabled: false,
        },
    );


    // query-product
    const {
        mutate: postProductMutate,
        data: postProduct,
        isLoading: postProductLoading,
        isSuccess: postProductSuccess,
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
    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess,
    } = useMutation(({url, formData}) => apiService.postData(url, formData), {

        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });
    // query-edit
    const {
        isLoading: editProductLoading,
        data: editProductData,
        refetch: editProductRefetch,
        isSuccess: editProductSuccess,
    } = useQuery(
        ['edit-product', editId],
        () => apiService.getDataByID('/Product', editId),
        {
            enabled: false,
        },
    );
    // put-query
    const {
        mutate: putProduct,
        isLoading: putProductLoading,
        data: putData,
        isSuccess: putProductSuccess,
    } = useMutation(({url, data, id}) => apiService.editData(url, data, id), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });
    // delete-image-query
    const {mutate: imagesDeleteMutate} = useMutation(({url, id}) =>
        apiService.deleteData(url, id),
    );

    //                                           ===UseEffect===
    // product success
    useEffect(() => {

        if (putProductSuccess) {
            dispatch({type: EDIT_DATA, payload: ''});
        }
        if (editProductSuccess && deleteImage?.uid) {
            imagesDeleteMutate({url: '/ProductImage', id: deleteImage?.uid});
        }
        if (postProductSuccess || putProductSuccess) {
            navigate('/product');


        }
    }, [postProduct, putData]);

    // product error


    // if edit product
    useEffect(() => {
        if (editId !== '') {
            editProductRefetch();
        }
    }, [editId]);

    // if no edit product
    useEffect(() => {
        if (editId === '') {
            form.setFieldsValue(initialValueForm);
        }
        categoryFetch();
        brandFetch();
        smellFetch()
    }, []);

    //edit product
    useEffect(() => {
        const imageInitial = [
            {
                uid: editProductData?.image?.id,
                name: editProductData?.image?.name,
                status: 'done',
                url: `${process.env.REACT_APP_API_URL}/${editProductData?.image.name}`,
            },
        ];
        if (editProductSuccess) {
            const edit = {
                nameRu: editProductData?.nameRu,
                nameEg: editProductData?.nameEg,
                price: editProductData?.price,
                opisaniyaRu: editProductData?.opisaniyaRu,
                opisaniyaEg: editProductData?.opisaniyaEg,
                images: imageInitial,
                productTypeId: editProductData?.productTypeId,
                priceSkitka: editProductData?.priceSkitka,
            };
            setFileListProps(imageInitial);
            form.setFieldsValue(edit);
        }
    }, [editProductData]);

    // post product
    useEffect(() => {
        let imageData = []

        let patchImagesAndInitialImages = [];
        if (imagesUploadSuccess) {
            patchImagesAndInitialImages = fileList.concat(imagesUpload);
        } else {
            patchImagesAndInitialImages = [...fileList];
        }

        const deleteLocalImage = []
        patchImagesAndInitialImages.map((image) => {
            if (!image?.originFileObj?.uid) {
                deleteLocalImage.push(image)
            }
        })


        if (!editProductSuccess && imagesUpload) {
                imagesUpload?.map(image => {
                imageData.push(image?.id)
            })
        } else {
            deleteLocalImage.map((image) => {

                if (image?.uid) {
                    imageData.push(image?.uid)
                } else {
                    imageData.push(image?.id)

                }
            });
        }
        const data = {
            nameRu: valuesForm.nameRu,
            nameEg: valuesForm.nameEg,
            price: valuesForm.price,
            opisaniyaRu: valuesForm.opisaniyaRu,
            opisaniyaEg: valuesForm.opisaniyaEg,
            productTypeId: valuesForm.productTypeId,
            priceSkitka: valuesForm.priceSkitka === null ? 0 : valuesForm.priceSkitka,
        };

        if (imagesUploadSuccess && !editProductSuccess) {
            postProductMutate({url: '/Product', data});
        } else if (isNotEditImages || imagesUploadSuccess) {
            putProduct({url: '/Product', data, id: editId});
        }
    }, [imagesUpload, valuesForm]);


    const onFinish = (values) => {
        const formData = new FormData();

        let uploadNewImage = false;


        fileListProps?.map(file => {
            if (editProductSuccess) {
                if (file?.originFileObj?.uid) {
                    uploadNewImage = true;
                    formData.append('media', file?.originFileObj);
                    setIsNotEditImages(false);
                    setFileList(fileListProps);
                } else {
                    uploadNewImage = false;
                    setFileList(fileListProps);
                    setIsNotEditImages(true);
                }
            } else {
                uploadNewImage = true;
                formData.append('media', fileListProps[0]?.originFileObj);
            }

        })





        if (uploadNewImage && !imagesUploadSuccess) {
            imagesUploadMutate({url: '/products/product-image/', formData});
        }

        setValues(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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

    // render category
    const optionsGender = useMemo(() => {
        return [
            {
                value: 'male',
                label: 'Мужской',
            },
            {
                value: 'female',
                label: 'Женский',
            }
        ]
    }, []);
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
                value: 'Осень',
                label: 'Мужской',
            },
            {
                value: 'winter',
                label: 'Зима',
            }
        ]
    }, []);

    const optionsCategoryIndex = useMemo(() => {
        return categoryData?.map((option) => {
            return {
                value: option?.id,
                label: `${option?.name} ${option?.date}`,
            };
        });
    }, [categoryData]);

    const optionsBrand = useMemo(() => {
        return brandData?.map((option) => {
            return {
                value: option?.id,
                label: option?.name_ru,
            };
        });
    }, [brandData]);

    const optionsSmell = useMemo(() => {
        return smellData?.map((option) => {
            return {
                value: option?.id,
                label: option?.name_ru,
            };
        });
    }, [smellData]);


    const onChange = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({images: newFileList});

    };

    const handleRemoveImage = (file) => {
        if (editProductSuccess) {
            setDeleteImage(file);

        }
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

    // const handleChange = (value) => {
    //   console.log(`selected ${value}`);
    // };

    const chooseType = (e) => {
        setProductType(e.target.value)
    }

    return (
        <div>
            {imagesUploadLoading ||
            postProductLoading ||
            editProductLoading ||
            putProductLoading ? (
                <AppLoader/>
            ) : (
                <Form
                    form={form}
                    name='basic'
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: '100%',
                    }}
                    initialValues={initialValueForm}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Mahsulot nomi Uz'
                                name='name_uz'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Mahsulot nomi kiritish talab qilinadi Uz!',
                                    },
                                ]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Наименование товара Ru'
                                name='name_ru'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name Ru!',
                                    },
                                ]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Parfyumeriya haqida'
                                name='the_parmufe_uz'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Parfyumeriya haqida talab qilinadi!',
                                    },
                                ]}>
                                <TextArea rows={4}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='О парфюме'
                                name='the_parmufe_ru'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Обязательно О парфюмерии!',
                                    },
                                ]}>
                                <TextArea rows={4}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Ingredientlar haqida'
                                name='ingredients_uz'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingredientlar haqida talab qilinadi!',
                                    },
                                ]}>
                                <TextArea rows={4}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Об ингредиентах'
                                name='ingredients_ru'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Обязательно об ингредиентах!',
                                    },
                                ]}>
                                <TextArea rows={4}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Hidlar haqida'
                                name='scents_uz'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hidlar haqida talab qilinadi!',
                                    },
                                ]}>
                                <TextArea rows={4}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='О запахах'
                                name='scents_ru'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Обязательно о запахах!',
                                    },
                                ]}>
                                <TextArea rows={4}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label={'Выберите пол'}
                                name={'gender'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                rules={[
                                    {required: true, message: 'Требуется пол'},
                                ]}>
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну пол'
                                    optionLabelProp='label'
                                    options={optionsGender}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={'Выберите повод'}
                                name={'occasion'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                rules={[
                                    {required: true, message: 'Требуется повод'},
                                ]}>
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
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label={'Категория домашней страницы'}
                                name={'category'}
                                wrapperCol={{
                                    span: 24,
                                }}

                            >
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну Категория'
                                    optionLabelProp='label'
                                    options={optionsCategoryIndex}
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
                                rules={[
                                    {required: true, message: 'Требуется бренд'},
                                ]}>
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
                        <Col span={24}>
                            <Form.Item
                                label={'Выберите запах'}
                                name={'smell'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                rules={[
                                    {required: true, message: 'Требуется запах'},
                                ]}>

                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Выберите одну запах'
                                    optionLabelProp='label'
                                    options={optionsSmell}
                                />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Form.Item
                        label='Загрузить изображение'
                        name={'image'}
                        rules={[{required: true, message: 'Пожалуйста, загрузите изображение'}]}>
                        <ImgCrop rotationSlider>
                            <Upload
                                maxCount={5}
                                fileList={fileListProps}
                                listType='picture-card'
                                onChange={onChange}
                                onPreview={onPreview}
                                beforeUpload={() => false}
                                onRemove={handleRemoveImage}>
                                {fileListProps?.length < 2 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>
                    <Form.Item label="Размер товара" name="checkProductType">
                        <Radio.Group onChange={chooseType}>
                            <Radio.Button value="Copy">Copy</Radio.Button>
                            <Radio.Button value="Lux Copy">Lux Copy</Radio.Button>
                            <Radio.Button value="Original">Original</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <FormListType name={'copy'} title={'Copy'} value={productType}/>
                   <FormListType name={'luxCopy'} title={'Lux Copy'} value={productType}/>
                   <FormListType name={'original'} title={'Original'} value={productType}/>


                    <Button type='primary' htmlType='submit' style={{width: '100%'}}>
                        {editProductSuccess ? 'Edit' : 'Add'}
                    </Button>
                </Form>
            )}
        </div>
    );
};

export default PostEditProduct;