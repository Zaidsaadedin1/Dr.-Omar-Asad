import axios from "../types/axios";
import { CreateOrderDto } from "../types/orderDtos/orderDtos";
import { GenericResponse } from "../types/Shared/sharedDtos";

export const orderController = {
  CreateOrderAsync: async (createOrderDto: CreateOrderDto) => {
    const response = await axios.post<GenericResponse<number>>(
      `/Orders`,
      createOrderDto
    );
    return response.data;
  },
  GetAllUserOrdersAsync: async (userId: string) => {
    const response = await axios.get(`/Orders/GetAllUserOrdersAsync/${userId}`);
    return response.data;
  },
};

export default orderController;
