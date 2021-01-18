import { ArtWorks } from "../artWork/types"
import { User } from "../user/types"


export const ALL_ORDERS = "ALL_ORDERS"
export const ADD_ORDER = "ADD_ORDER"


export interface OrderState {
    orders: Order[]
    
}

export interface Order {
    id: number;
    userId?: number;
    quantity?: any;
    createdAt: string;
    updatedAt: string;
    user?: User;
    artWorks?: ArtWorks[]
}

interface AddAllOrders {
    type: typeof ALL_ORDERS,
    payload: Order[]
}

interface AddOrders {
    type: typeof ADD_ORDER,
    payload: Order[]
}

export type OrderActionTypes =
| AddAllOrders
| AddOrders
