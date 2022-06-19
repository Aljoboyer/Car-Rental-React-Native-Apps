import {gql} from '@apollo/client';

export const GET_ALL_CARS = gql`
    query GetAllCars {
        GetCars {
            id
            carName
            perDayPrice
            location
            seat
            brand
            description
            carimg
        }
    }
`
export const CREATE_PAYMENT_INTENT = gql`

    query PaymentIntent($price: String) {
        GetPaymentIntent (price: $price){
        clientSecret
    }
  }
`