import React from 'react';

const CategoryCard = ({category}) => {
    return (
        <div className=''>
            <div className='shadow-lg shadow-slate-400 rounded-md'>
                <div className="card w-full my-2">
                    <figure><img className='w-52 h-52 rounded-full' src={category.img} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">{category.category}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;