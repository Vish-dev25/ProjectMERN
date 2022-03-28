import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props){
        super();
        this.state = { arrItem:[], msg: "" };
    }
   
    onInputChange = (e) => {
        let {name, value} = e.target;
        let {arrItem} = this.state;
        this.setState( {arrItem: [...arrItem, name= value]} )
        
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.arrItem)
        const url = "http://localhost:5000/items"
        axios.post(url, this.state.arrItem)
        .then(res => {
            console.log(res);
        })

    }
    componentDidMount = () => {
        axios.get("http://localhost:5000/items")
        .then( res => {
            this.setState({arrItem: res.data})
            console.log(res.data)
        })
    }
    onDelete = (eid) => {
        axios.delete("http://localhost:5000/items/delete/" + eid)
        .then(res => {
            console.log('Item deleted', res);
            this.componentDidMount();
        })
    }


    render() {
        let { arrItem } = this.state;
        return (
            <>
                <div className='container'>
                    <h4 className="mb-3 text-center mt-4">MyResto Menu</h4>
                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <div className='card card-body p-3 mb-3 mt-5'>
                                <form onSubmit={this.onSubmit}>
                                    <h5 className='text-center mb-3' > Insert Items in Menu</h5>

                                    <div className='form-group'>
                                        <input type='number' name='id' className='form-control mb-4' value={arrItem.id} onChange={this.onInputChange} placeholder='Enter food id' />
                                    </div>

                                    <div className='form-group'>
                                        <input type='text' name='name' className='form-control mb-4' value={arrItem.name} onChange={this.onInputChange} placeholder='Enter food item' />
                                    </div>

                                    <div className='form-group'>
                                        <input type='text' name='description' className='form-control mb-4' value={arrItem.description} onChange={this.onInputChange} placeholder='Enter description' />
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
                        

                        <div className='col-sm-8'>
                            <div className="card mt-5 p-2">
                                <h5 className="text-center ml-4 mt-2 mb-3">Menu List </h5>

                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Food Item Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {arrItem.map((item, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td>{item.id}</td>
                                                    <td>{item.item_name}</td>
                                                    <td>{item.item_details}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.category}</td>
                                                    <td><button className='btn btn-warning' ><NavLink to='/MenuUpdate'> Edit </NavLink></button></td>
                                                    <td><button className='btn btn-danger' onClick={() => this.onDelete(item._id)}> Delete </button></td>

                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Menu;