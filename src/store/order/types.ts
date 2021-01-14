import { ArtWorks } from "../artWork/types"
import { User } from "../user/types"


export const ADD_ORDERS = "ADD_ALL_ORDERS"

export interface OrderState {
    orders: Order[]
}

export interface Order {
    id: number;
    userId?: number;
    createdAt: string;
    updatedAt: string;
    user?: User;
    artWorks?: ArtWorks[]
}

interface AddAllOrders {
    type: typeof ADD_ORDERS,
    payload: Order[]
}

export type OrderActionTypes =
| AddAllOrders
