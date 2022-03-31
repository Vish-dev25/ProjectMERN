import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class MenuCard extends Component {
    constructor() {
        super();
        this.state = { arrItem: [] }
    }

    componentDidMount = () => {
        axios.get("http://localhost:5000/items")
            .then(res => {
                this.setState({ arrItem: res.data })
                console.log(res.data)
            })
    }
    render() {
        let { arrItem } = this.state;
        return (
            <>
                <section className="main-card">
                    {arrItem.map((item) => {
                        const { id, item_name, category, price, item_details } = item;

                        return (
                            <>
                                <div className="card-container" key={id}>
                                    <div className="card ">
                                        <div className="card-body">
                                            {/* <img src={image} alt="images" className="card-media" /> */}
                                            <h4 className="title"> {item_name} </h4>
                                            <span className="description">
                                                {item_details}
                                            </span>
                                        </div>
                                        <span className="category"> {category}</span>
                                        <button type="button" className='order-btn mx-2 my-2'>Order Now</button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </section>
            </>
        )
    }



}

export default MenuCard;
