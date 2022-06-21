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
export const GET_USER_INFO = gql`
    query GetUser($email: String) {
        User (email: $email){
        name
        phone
        email
        img
    }
  }
`

export const GET_USERS_BOOKINGS = gql`
    query GetBookings{
        Bookings{
            id
            name
            email
            phone
            img
            carName
            perDayPrice
            seat
            carImg
            licenseFront
            licenseBack
            NidFront
            NidBack
            licenseNum
            NidNum
            payment
            location
            diffDays
            startDate
            endDate
            licenseDate
    }
  }
`