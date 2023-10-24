import React, { useState} from 'react';
import SocialTable from './SocialTable';
import {Button, Col, Input, message, Row, Space, Spin} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import apiService from '../../../@crema/services/apis/api';
import { useQuery} from 'react-query';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import {useDispatch} from 'react-redux';

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data,
    isLoading: getCategoryLoading,
  } = useQuery('social-get', () => apiService.getData('/about/social-media'), {
    // enabled:false,
    onError: (error) => {

      message.error(error);
      // Handle the error
    },
  });
  const [search, setSearch] = useState([]);
  const [isSearch, setIsSearch] = useState(false);



  const addArticle = () => {
    dispatch({type: EDIT_DATA, payload: ''});
    navigate('social/add');
  };
  const serachProduct = (value) => {
    if (value === '') {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }

    const filterData = data?.filter(
      (data) =>
        data.name_ru.toLowerCase().includes(value.toLowerCase()) ||
        data.name_uz.toLowerCase().includes(value.toLowerCase()),
    );
    setSearch(filterData);
  };

  return (
    <div className={'site-space-compact-wrapper'}>
      <Space direction={'vertical'} style={{width: '100%'}}>
        <Row gutter={20}>
          <Col span={16}>
            <Input onChange={(e) => serachProduct(e.target.value)} />
          </Col>
          <Col span={8}>
            <Button
              type='primary'
              disabled={data?.length>0}
              icon={<PlusOutlined />}
              style={{width: '100%'}}
              onClick={addArticle}>
              Add
            </Button>
          </Col>
        </Row>
        <Spin
          size='medium'
          spinning={getCategoryLoading}>
          <SocialTable
            data={isSearch ? search : data}
          />
        </Spin>
      </Space>
    </div>
  );
};

export default Index;
