import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { fetchOrders } from "../../store/order/actions"
import { selectOrders } from "../../store/order/selectors"

interface Parameters {
    id: string;
  }

export default function Order() {
    const params: Parameters = useParams();
    const dispatch = useDispatch()
    const { id } = params
    const orders = useSelector(selectOrders)

    console.log(orders)

    useEffect(() => {
        dispatch(fetchOrders(parseInt(id)))
    }, [dispatch, id])

    return(
        <div>
            Hello
        </div>
    )
}