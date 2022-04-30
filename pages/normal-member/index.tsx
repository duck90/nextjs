import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Card, Table, Select, Input, Button, Badge, Menu } from 'antd';
import { EyeOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Flex from 'components/shared-components/Flex';
// import Flex from 'components/shared-components/Flex'
import Axios from 'axios';
import callApi from 'utils/callApi'

const { Option } = Select;
const categories = ['Cloths', 'Bags', 'Shoes', 'Watches', 'Devices']


import PageWrapper from '../../components/layout-components/PageWrapper'

const ManageNormalMemberPage: NextPage = () => {
	const [list, setList] = useState(null)

	useEffect(() => {
		getUserList();
	}, [])

	const getUserList = async () => {
		const result = await callApi({
			method: 'GET',
			url: `/api/manage/customers/group?name=`,
		})
	}

	
	const handleShowCategory = (value: string) => {
		if(value !== 'All') {
			const key = 'category'
			// const data = utils.filterArray(ProductListData, key, value)
			setList(null)
		} else {
			setList(null)
		}
	}
	

	return (
		<PageWrapper title="일반회원">
			<Card>
				<Flex alignItems="center" justifyContent="between" mobileFlex={false}>
					<Flex className="mb-1" mobileFlex={false}>
						<div className="mr-md-3 mb-3">
							<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
						</div>
					</Flex>
					{/* <div>
						<Button onClick={addProduct} type="primary" icon={<PlusCircleOutlined />} block>Add product</Button>
					</div> */}
				</Flex>
				<div className="table-responsive">
					{/* <Table 
						columns={tableColumns} 
						dataSource={list} 
						rowKey='id' 
						rowSelection={{
							selectedRowKeys: selectedRowKeys,
							type: 'checkbox',
							preserveSelectedRowKeys: false,
							...rowSelection,
						}}
					/> */}
				</div>
			</Card>
			
		</PageWrapper>
	)
}

export default ManageNormalMemberPage
