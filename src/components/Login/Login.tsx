/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Button, Form, Input, Layout, Carousel, Image } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { type LoginResponse, type LoginDetails, type LoginProps } from './Login.types'
import api from '../../api/login.resource'
import img1 from '../../images/photo0.jpeg'
// import img2 from '../../images/photo1.jpeg'
// import img3 from '../../images/photo2.jpeg'
// import img4 from '../../images/photo3.jpeg'
import img5 from '../../images/photo4.jpeg'

export const Login: React.FC<LoginProps> = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const images = [img1, img5]
  const onFinish = async (credentials: LoginDetails) => {
    const res: LoginResponse = await api.login(credentials)
    if (res.id != null) {
      window.sessionStorage.setItem('user', JSON.stringify(res))
      // userDetails = res

      switch (res.role) {
        case 'User':
          navigate('/packers', { state: { res } })
          window.sessionStorage.setItem('key', 'packers')

          break
        case 'Agent':
          navigate('/agent-dashboard', { state: { res } })
          window.sessionStorage.setItem('key', 'services')

          break
        case 'Admin':
          window.sessionStorage.setItem('key', 'packers')
          navigate('/packers', { state: { res } })
          break

        default:
          setErrorMessage('Invalid Role')
          break
      }
    } else setErrorMessage('Invalid Username or Password')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const loginDetails: LoginDetails = { username: '', password: '' }
  //   window.sessionStorage.removeItem('user')
  return (
    <div className='vh-100'>
      <Layout.Header>
        <h4 className='text-white pt-3'>Move Smart</h4>
      </Layout.Header>
      {/* <Carousel autoplay style={{height:'15%'}}>
        {images.map((img, i) => (
          <Image src={img} preview={false} key={i} />
        ))}
      </Carousel> */}
      <Form
        name='login'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={loginDetails}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        className='d-flex flex-column justify-content-center align-items-center h-75'
        onValuesChange={() => {
          if (errorMessage.length > 0) {
            setErrorMessage('')
          }
        }}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input
          // prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username'
          />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password
          // prefix={<LockOutlined className='site-form-item-icon' />}
          // placeholder='Password'
          />
        </Form.Item>

        {/* <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
        <h6 className='text-danger'> {errorMessage}</h6>
        <p>
          Register as
          <Link to='/user-register'> User</Link> | <Link to='/agent-register'> Agent </Link>
        </p>
      </Form>
    </div>
  )
}
