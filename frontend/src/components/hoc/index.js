import React from 'react';
import { ApiServiceConsumer } from '../api-service-context';

const withApiService = () => (Wrapped) => {
    return (props) => {
        return (
             <ApiServiceConsumer>
                 {
                     (ApiService) => {
                        return( <Wrapped {...props}
                            ApiService={ApiService}
                        />)
                     }
                 }
             </ApiServiceConsumer>
        )
    }
} 

export default withApiService;