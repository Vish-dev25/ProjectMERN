import React, { Component } from 'react';
import axios from 'axios';

class MenuUpdate extends Component {
    constructor(props) {
        super();
        this.state = { arrItem:[], msg: "" };

    }
    onInputChange = (e) => {
        let {name, value} = e.target;
        let {arrItem} = this.state;

        this.setState( {arrItem: {...arrItem, [name]: value}} )
        
    }

    onSubmit = (e) => {
        e.preventDefault()
        const url = "http://localhost:5000/items/update";
        axios.post(url, this.state.arrItem)
        .then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <>
                <div className='row justify-content-md-center'>
                <div className='col-md-4'>
                    <div className='card card-body p-3 mb-3 mt-5'>
                        <form onSubmit={this.onSubmit}>
                            <h5 className='text-center mb-3' > Update Item</h5>

                            <div className='form-group'>
                                <input type='number' name='id' className='form-control mb-4'  onChange={this.onInputChange} placeholder='Enter food id' />
                            </div>

                            <div className='form-group'>
                                <input type='text' name='name' className='form-control mb-4'  onChange={this.onInputChange} placeholder='Enter food item' />
                            </div>

                            <div className='form-group'>
                                <input type='text' name='description' className='form-control mb-4'  onChange={this.onInputChange} placeholder='Enter description' />
                            </div>

                            <div className='form-group'>
                                <input type='number' name='price' className='form-control mb-4'  onChange={this.onInputChange} placeholder='Enter price' />
                            </div>

                            <div className='form-group'>
                                <input type='text' name='category' className='form-control mb-4'  onChange={this.onInputChange} placeholder='Enter category' />
                            </div>

                            <div className='form-group text-center'>
                                <button type='submit' className='btn btn-success' > Update </button>
                            </div>

                        </form>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
export default MenuUpdate