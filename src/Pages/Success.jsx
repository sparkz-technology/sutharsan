import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { login } from '../services/AdminApi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: var(--sub-text-color);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: var(--sub-text-color);
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--title-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px 0;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
function Success() {
  const { token } = useParams();


  const navigate = useNavigate();

  const queryKey = ["login"];
  const queryFn = () => login(token)
  const { data, isLoading, isError } = useQuery(queryKey, queryFn,
    {
      enabled: !!token,
      retry: false,
      staleTime: 0,
    }
  );

  useEffect(() => {
    if (data) {
      console.log("Data:", data);
      Cookies.set('token', data.token);
      localStorage.setItem("token", data.token);
      navigate('/admin');
    }
    if (isError) {
      navigate('/');
    }
  }, [data, isError, navigate]);




  return (
    <Container>
      <Title>Welcome, Admin</Title>
      <Loader />
      {
        isLoading ? <Subtitle>Logging in...</Subtitle> : <Subtitle>Redirecting...</Subtitle>
      }
    </Container>
  );
}

export default Success;