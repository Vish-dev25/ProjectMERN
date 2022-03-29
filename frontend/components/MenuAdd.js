import React, { Component } from 'react';
import axios from 'axios';

class Menuadding extends Component {
    constructor(props) {
        super();
        this.state = { arrItem: [] , msg: ""};
    }

    componentDidMount = () => {
        axios.get("http://localhost:5000/items")
            .then(res => {
                this.setState({ arrItem: res.data })
                console.log(res.data)
            })
    }
    onInputChange = (e) => {
        let { name, value } = e.target;
        let { arrItem } = this.state;
        this.setState({ arrItem: { ...arrItem,[name]: value } });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/items/", this.state.arrItem)
            .then(res => {
                // this.componentDidMount();
                if (res.data !== 'error') {
                    this.setState({ msg: 'Record has been inserted' });
                }
            });
            console.log(this.state.arrItem);
    }


    render() {
        let { arrItem, msg } = this.state;
        return (
            <>  
                <span className="alert-success">{msg}</span>
                <div className='col-sm-4'>
                    <div className='card card-body p-3 mb-3 mt-5'>
                        <form onSubmit={this.onSubmit}>
                            <h5 className='text-center mb-3' > Insert Items in Menu</h5>

                            <div className='form-group'>
                                <input type='number' name='id' className='form-control mb-4' value={arrItem.id} onChange={this.onInputChange} placeholder='Enter food id' />
                            </div>

                            <div className='form-group'>
                                <input type='text' name='item_name' className='form-control mb-4' value={arrItem.item_name} onChange={this.onInputChange} placeholder='Enter food item' />
                            </div>

                            <div className='form-group'>
                                <input type='text' name='item_details' className='form-control mb-4' value={arrItem.item_details} onChange={this.onInputChange} placeholder='Enter description' />
                            </div>

                            <div className='form-group'>
                                <input type='number' name='price' className='form-control mb-4' value={arrItem.price} onChange={this.onInputChange} placeholder='Enter price' />
                            </div>

                            <div className='form-group'>
                                <input type='text' name='category' className='form-control mb-4' value={arrItem.category} onChange={this.onInputChange} placeholder='Enter category' />
                            </div>

                            <div className='form-group text-center'>
                                <button type='submit' className='btn btn-success' > Add </button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Menuadding