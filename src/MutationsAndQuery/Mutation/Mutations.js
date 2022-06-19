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