import React, { useEffect } from "react"
import { 
    Jumbotron,
    Card,
    Container,
    Col
 } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { fetchOrders } from "../../store/order/actions"
import { selectOrders } from "../../store/order/selectors"

import "./order.scss"

interface Parameters {
    id: string;
  }

export default function Order() {
    const params: Parameters = useParams();
    const dispatch = useDispatch()
    const { id } = params
    const orders: any = useSelector(selectOrders)

    console.log("THIS IS orders", orders)

    useEffect(() => {
        dispatch(fetchOrders(parseInt(id)))
    }, [dispatch, id])

    return(
        <>
            <Jumbotron 
              className="order-header" 
              as={Col} 
              md={{ span: 12 }}
              >
                <h2>
                    Welcome to your orders {orders.user?.firstName} {" "} {orders.user?.lastName}
                </h2>
            </Jumbotron>
            <Container 
            className="order-container"
            as={Col} 
            md={{ span: 12 }}
            >
                {orders.artWorks?.map((art: { 
                    gallery: any, 
                    name: any, 
                    image: any; 
                }) => {
                    return(
                 <Card
                  className="order-card" 
                  as={Col} 
                  md={{ span: 4 }}
                  >
                  <div 
                  className="order-info">
                    <h2>{art.gallery.name}</h2>
                    <div 
                     className="artWork-image"
                     style={{backgroundImage: `url(${art.image})`}}
                    ></div>
                    <p><strong>{art.name}</strong></p>
                  </div>
                 </Card>
                    )
                })}
            </Container>
            
        </>
    )
}