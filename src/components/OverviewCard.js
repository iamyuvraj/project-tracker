import React from 'react';
import './OverviewCard.css'; // Create a OverviewCard.css file for styles

const OverviewCard = ({ title, value }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default OverviewCard;
