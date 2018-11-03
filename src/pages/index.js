import React from 'react'
import { search, detail } from '../api'

import Layout from '../components/layout'
import Image from '../components/image'
import Input from '../components/Input'
import ProductList from '../components/ProductList'

class IndexPage extends React.Component {
  state = {
    city: '',
    query: '',
    category: 'cta',
    products: [],
  }

  getProductsDetails = async () => {
    try {
      let productList = await search({
        city: this.state.city,
        query: this.state.query,
        category: this.state.category,
      })
      let productUrls = await Promise.all(
        productList.map(async product => await product.url)
      )

      let urlDetails = await Promise.all(
        productUrls.forEach(async url => {
          let details = await detail(url)
          this.setState({ products: [...this.state.products, ...details] })
        })
      )

      return urlDetails
    } catch (err) {
      return err
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.getProductsDetails()
  }

  render() {
    const productListComponents = this.state.products.map(product => (
      <ProductList
        key={product.dataId}
        title={product.title}
        location={product.location}
        url={product.url}
        description={product.description}
        images={product.images[0]}
        price={product.price}
        postedDate={product.postedDate}
      />
    ))
    return (
      <Layout>
        <div className="flex items-center justify-center px-12">
          <section className="w-full sm:w-full md:w-1/2 lg:w-1/2 text-grey-darkest">
            <h1 className="font-bold text-1xl leading-loose my-3 text-center">
              Car Search
            </h1>

            <form onSubmit={this.handleSubmit}>
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center">
                <div className="w-full sm:w-3/5 sm:px-2">
                  <Input
                    labelName="City"
                    type="text"
                    name="city"
                    handleChange={this.handleChange}
                  />
                </div>

                <div className="w-full sm:w-3/5 sm:px-2">
                  <Input
                    labelName="Car Name"
                    type="text"
                    name="carName"
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
              <button
                className="block appearance-none bg-indigo text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow-md hover:bg-indigo-light w-full sm:w-3/5 mx-auto mt-4"
                type="submit"
              >
                Pick Your Car
              </button>
            </form>
          </section>
        </div>

        <section className="flex flex-wrap mt-24 mx-auto justify-center">
          {productListComponents}
        </section>
      </Layout>
    )
  }
}

export default IndexPage
