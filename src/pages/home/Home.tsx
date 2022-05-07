import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/ui/Card';

import './Home.css';
import { loadCertificates } from '../../helpers/loadCertificates';

export const Home = () => {

    const [certificates, setCertificates] = useState<any>([]);
    
    useEffect(() => {
        loadCertificates()
            .then((data) => setCertificates(data) );
    }, []);
    
    return (
        <>
            <h2 className='mb-3'>Certificates</h2>

            <div className="row">
                {
                    certificates.map( (c: any) => (
                        <div key={ c.id } className="col-md-4">
                            <Card
                                { ...c }
                            />
                        </div>
                    ))
                }
            
            </div>
        </>
    )
}

