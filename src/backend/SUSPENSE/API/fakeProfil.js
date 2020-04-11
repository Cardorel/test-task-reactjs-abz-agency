import React from 'react';

import {fetchEmptyData} from './api';

const resource = fetchEmptyData();


export const EmptyProfil = () => {
    const empty = resource.empty.read(); 

    return <div>{empty}</div>
}