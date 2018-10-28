import React from 'react'

const ProductList = props => (
  <div className="max-w-xs rounded shadow-lg bg-white mb-4 mx-2">
    <img className="w-full h-48" src={props.images} alt="" />
    <div className="px-6 py-4">
      <h1 className="font-bold text-xl overflow-hidden">{props.title}</h1>
      {/* <p className="text-grey-darker text-base">{props.description}</p> */}
    </div>
    <div className="px-6 py-4">
      <span className="block bg-grey-lighter rounded-full px-3 py-1 mb-1 text-sm font-semibold text-grey-darker mr-2 overflow-hidden">
        Price: {props.price}
      </span>
      <span className="block bg-grey-lighter rounded-full px-3 py-1 mb-1 text-sm font-semibold text-grey-darker mr-2 overflow-hidden">
        Location: {props.location}
      </span>
      <span className="block bg-grey-lighter rounded-full px-3 py-1 mb-1 text-sm font-semibold text-grey-darker overflow-hidden">
        Date: {props.postedDate}
      </span>
    </div>
  </div>
)

export default ProductList
