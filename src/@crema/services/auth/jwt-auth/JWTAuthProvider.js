import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from '../../../../shared/constants/ActionTypes';
import jwtAxios,{setAuthToken} from './jwt-api';
import apiService from "../../apis/api";
import axios from "axios";

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({children}) => {
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const dispatch = useDispatch();

  // jwtAxios response
  jwtAxios.interceptors.response.use(
      (res) => res,
      async (err) => {
        const getRefToken = localStorage.getItem('richRefToken')

        if (err.response.status === 401 && err.response.config.method !== "get" && getRefToken) {
          try {
            const refreshTokenData = {
              refresh: getRefToken
            }
            const newToken = await apiService.postData('/user/token/refresh/', refreshTokenData);
            localStorage.setItem('richtoken', newToken.access)

            // Retry the original request with the new token
            const originalRequest = err.config;
            originalRequest.headers.Authorization = `Bearer ${newToken.access}`
            jwtAxios.defaults.headers.common['Authorization'] = `Bearer ${newToken.access}`;
            return axios(originalRequest)
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }else if (err.response.status === 401){
          setJWTAuthData({
            user: undefined,
            isLoading: false,
            isAuthenticated: false,
          });
        }
        return Promise.reject(err);
      },
  );



  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem('richtoken');
      if (!token) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }else {
        setJWTAuthData({
                user: undefined,
                isLoading: false,
                isAuthenticated: true,
              })
      }
      setAuthToken(token);
      jwtAxios
        .get('/user/me')
        .then(({data}) =>
          setJWTAuthData({
            user: data,
            isLoading: false,
            isAuthenticated: true,
          }),
        )
        .catch(() =>
          setJWTAuthData({
            user: undefined,
            isLoading: false,
            isAuthenticated: false,
          }),
        );
    };

    getAuthUser();
  }, []);

  const signInUser = async ({phone, password}) => {
    if (localStorage.getItem('richRefToken')){
      localStorage.removeItem('richRefToken')
    }
    dispatch({type: FETCH_START});
    try {
      const {data} = await jwtAxios.post(`/user/token`,{phone, password});
      localStorage.setItem('richtoken', data.access);
      localStorage.setItem('richRefToken', data.refresh);
      setAuthToken(data.access);
      // const res = await jwtAxios.get('/auth');
      setJWTAuthData({user: undefined, isAuthenticated: true, isLoading: false});
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      console.log(error)
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };

  const signUpUser = async ({name, email, password}) => {
    dispatch({type: FETCH_START});
    try {
      const {data} = await jwtAxios.post('users', {name, email, password});
      localStorage.setItem('token', data.token);
      // setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({user: res.data, isAuthenticated: true, isLoading: false});
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };

  const logout = async () => {
    localStorage.removeItem('richtoken');
    localStorage.removeItem('richRefToken');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}>
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}>
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
