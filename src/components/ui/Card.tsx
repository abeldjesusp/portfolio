import React from "react";

interface CardProps {
    title: string;
    cover: string;
    url_certificate: string;
    
}

export const Card = ( { title, cover, url_certificate }: CardProps) => {
  return (
      <div className="mb-5">
        <a className="cardLink" href={ url_certificate } target='_blank'>
            <div className="card mb-2 d-flex flex-fill">
                <img
                    src={ cover }
                    className="card-img"
                    alt={ title }
                />
            </div>
            <h5 className="text-center cardTitle">{ title }</h5>
        </a>
      </div>
  );
};

