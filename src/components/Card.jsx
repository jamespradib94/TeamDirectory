
import React from 'react'

export const Card = (props) => {
  const { data } = props;
  return (
    <div className="col-card">
      <div className="user-card">
        <div className="ms-3 py-3 d-flex align-items-center">
          <img className="card-image" src={data.img} />
          <div className = "ms-3 card-body-text">
            <h5 className="mb-0 font-weight-600">{`${data.first_name} ${data.last_name}`}</h5>
            <p className = "card-email text-secondary">{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};