import React from 'react'
import { Button, Descriptions, Image, Tag } from 'antd'
import { useLocation, useNavigate, NavLink } from 'react-router-dom'
import { type Packer } from './Packers.types'

export const ViewPacker: React.FC = () => {
  const { Item } = Descriptions
  const location = useLocation()
  const navigate = useNavigate()
  const packer: Packer = location.state?.packer
  return (
    <>
      <NavLink to={'/packers'} title='go back' className='d-flex align-items-center'>
        <p className='m-2'> Back to Packers</p>
      </NavLink>
      <div className='d-flex pl-3'>
        <Descriptions
          title={packer.name + ' Details'}
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          className='w-75'
        >
          <Item label='Description'>
            {packer.description} <br />
          </Item>
          <Item label='Services'>
            {packer.services?.map((ser) => (
              <Tag key={ser.id}>{ser.serviceType}</Tag>
            ))}
          </Item>
          <Item label='Phone No'>
            {packer.phoneNo} <br />
          </Item>
          <Item label='G Mail'>
            {packer.email} <br />
          </Item>
          <Item label='City'>
            {packer.city} <br />
          </Item>
          <Item label='State'>
            {packer.state} <br />
          </Item>
        </Descriptions>
        <Image
          className='mt-5 p-3'
          preview={false}
          src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        />
      </div>
      {/* <NavLink
        to='/create-quotation'
        state={{ packer }}
        className='d-flex justify-content-center mt-5'
      >
        Request a Quotation!
      </NavLink> */}
      <Button
        onClick={() => {
          navigate('/create-quotation', {
            state: {
              packer,
            },
          })
        }}
        style={{ marginLeft: '20%' }}
        className='d-flex justify-content-center mt-5'
      >
        Request a Quotation!
      </Button>
    </>
  )
}
