/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { Descriptions, Modal, Tag } from 'antd'
import { type ViewQuotationProps } from './Quotations.types'

export const ViewQuotation: React.FC<ViewQuotationProps> = ({
  isModalOpen,
  handleCancel,
  quotation,
}) => {
  const { Item } = Descriptions

  return (
    <>
      <Modal
        title={'View Quotation'}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        destroyOnClose
        width={700}
      >
        <Descriptions
          // title={quotation?.name + ' Details'}
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          // className='w-75'
        >
          <Item label='Quoted By'>
            {quotation?.quotedBy?.name} <br />
          </Item>
          <Item label='Phone No'>
            {quotation?.quotedBy?.phoneNo} <br />
          </Item>
          <Item label='G Mail'>
            {quotation?.quotedBy?.email} <br />
          </Item>
          <Item label='Packer'>{quotation?.packer?.name}</Item>
          <Item label='Service'>{quotation?.serviceType?.serviceType}</Item>
          <Item label='Description'>
            {quotation?.description} <br />
          </Item>
          <Item label='Date'>
            {quotation?.date.toString()} <br />
          </Item>
          <Item label='Quotation'>
            {quotation?.amount} <br />
          </Item>
          <Item label='Comments'>
            {quotation?.comments} <br />
          </Item>
          <Item label='Status'>
            <Tag color={status === 'Approved' ? 'green' : 'blue'}>{quotation?.status}</Tag> <br />
          </Item>
        </Descriptions>
      </Modal>
    </>
  )
}
