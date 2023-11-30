import React from 'react'
import { Col,Row } from 'react-bootstrap'
import StoreItem from "../../data/item.json"
import StoreItems from "../../component/StoreItems/StoreItems"


function Store() {
  return (
    <Row md={2} xs={1} lg={3} className='g-3'>{StoreItem.map(item =>(<Col key={item.id}><StoreItems  {...item} />
    </Col>))}
    </Row>
  )

}

export default Store;