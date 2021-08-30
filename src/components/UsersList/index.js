import React from 'react';
import {gql, useQuery} from '@apollo/client'

function Index(props) {
    const GET_ALL_USERS = gql`
        query getAllUsers {
            id
            name
            money
        }
    `
    const { loading, error, data } = useQuery(GET_ALL_USERS)
    return (
        <div>

        </div>
    );
}

export default Index;