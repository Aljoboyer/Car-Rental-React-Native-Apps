import {gql} from '@apollo/client';

export const ADD_CAR = gql`
    mutation AddCarData ($input: CarInput){
        AddCar(input: $input){
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

export const ADD_USER = gql`
    mutation addUser ($input: UserInput){
        AddUser(input: $input){
            name
            email
            phone
        }
    }
`

export const ADD_BOOKINGS = gql`
    mutation AddBookingData ($input: BookingInput){
        AddBookings(input: $input){
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
            secretKey
        }
    }
`

export const UPDATE_PROFILE = gql`
    mutation updateProfile ($input: UpdateProfileInput){
        UpdateUserPorfile(input: $input){
            id
            name
            phone
            img
        }
    }
`