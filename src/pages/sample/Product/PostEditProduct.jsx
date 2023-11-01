import {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Select, Radio, Upload, Typography} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ImgCrop from 'antd-img-crop';
import {useMutation, useQuery} from 'react-query';
import apiService from '../../../@crema/services/apis/api';
import {AppLoader} from '../../../@crema';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import FormListType from "./FormListType";

const {Title} = Typography
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
    special: null,
    brand: null,
    smell: null,
    image: [],
    copy: [],
    luxCopy: [],
    original: []

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
    const [deleteImage, setDeleteImage] = useState([]);
    const [productType, setProductType] = useState('Copy');


    //                                           ===React-Query===
    // query-category
    const {data: categoryData} = useQuery(
        'get-categories',
        () => apiService.getData('/products/index-category/'),
    );

    // query-brand
    const {data: brandData} = useQuery(
        'get-brand',
        () => apiService.getData('/products/brand/'),
    );

    // query-smell
    const {data: smellData} = useQuery(
        'get-smell',
        () => apiService.getData('/products/smell/'),
    );

    // query-special
    const {data: specialData} = useQuery(
        'get-special',
        () => apiService.getData('/products/special/'),
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
        () => apiService.getDataByID('/products/product', editId),
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
        apiService.deleteImages(url, id),
    );

    //                                           ===UseEffect===
    // product success
    useEffect(() => {
        let delImage = []
        if (putProductSuccess) {
            dispatch({type: EDIT_DATA, payload: ''});
        }

        deleteImage?.map(image => {
            if (editProductSuccess && image?.uid) {
                delImage.push(image?.uid)
            }

        })
        if (editProductSuccess && delImage.length > 0) {
            const ids={
                image_ids:delImage
            }
            imagesDeleteMutate({url: '/delete-images', id:ids});
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

    }, []);

    //edit product
    useEffect(() => {
        let copy = []
        let luxCopy = []
        let original = []

        const imagesInitial = [];
        for (let i = 0; i < editProductData?.product_images?.length; i++) {
            const editDefaultImages = {
                uid: editProductData?.product_images[i]?.id,
                name: editProductData?.product_images[i]?.id,
                location: editProductData?.product_images[i]?.image,
                status: "done",
                url: editProductData?.product_images[i]?.image
            };
            imagesInitial.push(editDefaultImages);
        }

        editProductData?.product_type.map(type => {
            if (type.name_uz === 'Copy') {
                type?.product_size?.map(size => {
                    const data = {
                        litr: size.litr,
                        price: size.price,
                        discount: size.discount
                    }
                    copy.push(data)
                })
            }
            if (type.name_uz === 'Lux Copy') {
                type?.product_size?.map(size => {
                    const data = {
                        litr: size.litr,
                        price: size.price,
                        discount: size.discount
                    }
                    luxCopy.push(data)
                })
            }
            if (type.name_uz === 'Original') {
                type?.product_size?.map(size => {
                    const data = {
                        litr: size.litr,
                        price: size.price,
                        discount: size.discount
                    }
                    original.push(data)
                })
            }
        })


        if (editProductSuccess) {
            const edit = {
                name_uz: editProductData.name_uz,
                name_ru: editProductData.name_ru,
                the_parmufe_uz: editProductData.the_parmufe_uz,
                the_parmufe_ru: editProductData.the_parmufe_ru,
                ingredients_uz: editProductData.ingredients_uz,
                ingredients_ru: editProductData.ingredients_ru,
                scents_uz: editProductData.scents_uz,
                scents_ru: editProductData.scents_ru,
                gender: editProductData.gender,
                occasion: editProductData.occasion,
                category: editProductData.category===null ? "" :editProductData.category,
                special: editProductData.special===null ? "" :editProductData.special,
                brand: editProductData.brand_id,
                smell: editProductData.smell,
                image: imagesInitial,
                copy,
                luxCopy,
                original
            };
            setFileListProps(imagesInitial);
            form.setFieldsValue(edit);
        }
    }, [editProductData]);

    // post product
    useEffect(() => {
        let imageData = []


        let patchImagesAndInitialImages = [];
        if (imagesUploadSuccess) {
            patchImagesAndInitialImages = fileList.concat(imagesUpload?.images);
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
            imagesUpload?.images?.map(image => {
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
        // product type
        const product_type = []

        if (valuesForm.copy?.length > 0) {
            const data = {
                name_uz: "Copy",
                name_ru: "Копия",
                product_size: [
                    ...valuesForm.copy
                ]
            }
            product_type.push(data)
        }

        if (valuesForm.luxCopy?.length > 0) {
            const data = {
                name_uz: "Lux Copy",
                name_ru: "Люкс Копия",
                product_size: [
                    ...valuesForm.luxCopy
                ]
            }
            product_type.push(data)
        }

        if (valuesForm.original?.length > 0) {
            const data = {
                name_uz: "Original",
                name_ru: "Оригинал",
                product_size: [
                    ...valuesForm.original
                ]
            }
            product_type.push(data)
        }


        const data = {
            name_uz: valuesForm.name_uz,
            name_ru: valuesForm.name_ru,
            the_parmufe_uz: valuesForm.the_parmufe_uz,
            the_parmufe_ru: valuesForm.the_parmufe_ru,
            ingredients_uz: valuesForm.ingredients_uz,
            ingredients_ru: valuesForm.ingredients_ru,
            scents_uz: valuesForm.scents_uz,
            scents_ru: valuesForm.scents_ru,
            gender: valuesForm.gender,
            occasion: valuesForm.occasion,
            category: valuesForm.category===""? null:valuesForm.category,
            special: valuesForm.special===""? null:valuesForm.special,
            brand: valuesForm.brand,
            smell: valuesForm.smell,
            image: imageData,
            product_type
        };

        if (imagesUploadSuccess && !editProductSuccess) {
            postProductMutate({url: '/products/product/', data});
        } else if (isNotEditImages || imagesUploadSuccess) {
            putProduct({url: '/products/product', data, id: editId});
        }
    }, [imagesUpload, valuesForm]);


    const onFinish = (values) => {
        const formData = new FormData();

        let uploadNewImage = false;

        fileListProps?.map(file => {
            if (editProductSuccess) {
                if (file?.originFileObj?.uid) {
                    uploadNewImage = true;
                    formData.append('uploaded_images', file?.originFileObj);
                    setIsNotEditImages(false);
                    setFileList(fileListProps);
                } else {
                    uploadNewImage = false;
                    setFileList(fileListProps);
                    setIsNotEditImages(true);
                }
            } else {
                uploadNewImage = true;
                formData.append('uploaded_images', file?.originFileObj);
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
        const data = categoryData?.map((option) => {
            return {
                value: option?.id,
                label: `${option?.name} ${option?.date}`,
            };
        });

        const defaultData = {
            value: "",
            label: `Без категории`,
        };
        data?.push(defaultData)

        return data
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

    const optionsSpecial = useMemo(() => {
        const data= specialData?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });

        const defaultData = {
            value: "",
            label: `Удалить из специального`,
        };
        data?.push(defaultData)

        return data
    }, [specialData]);

    const onChange = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({image: newFileList});

    };

    const handleRemoveImage = (file) => {
        if (editProductSuccess) {
            setDeleteImage(prop=>[...prop,file]);

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
                    <Title level={3}>Название и описание продукта</Title>
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
                    <Title level={3}>Выбор к какому типу относится товар</Title>
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
                        <Col span={12}>
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
                        <Col span={12}>
                            <Form.Item
                                label={'Добавить в специальный'}
                                name={'special'}
                                wrapperCol={{
                                    span: 24,
                                }}
                                >

                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder='Добавить в специальный'
                                    optionLabelProp='label'
                                    options={optionsSpecial}
                                />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Title level={3}>Изображения товаров (можно загрузить до 3 изображений, Размер: 480x680)</Title>
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
                                {fileListProps?.length < 3 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>
                    <Title level={3}>Размеры и цены продукции</Title>
                    <Form.Item label="Размер товара" name="checkProductType">
                        <Radio.Group onChange={chooseType} defaultValue={'Copy'}>
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