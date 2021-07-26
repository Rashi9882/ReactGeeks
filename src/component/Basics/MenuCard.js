import React from 'react';

const MenuCard = () => {
    return (
        <>
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <h2 className="card-title">Maggie</h2>
                    <span className="card-description subtle">
                        Lorem ipsum dolor sit amet consectutor adipisicing elit.
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
        </>
    );
}

export default MenuCard;