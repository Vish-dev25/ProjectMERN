import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MenuAdd from './MenuAdd';

class Menu extends Component {
    constructor(props) {
        super();
        this.state = { arrItem: [], msg: "" };
    }

    componentDidMount = () => {
        axios.get("http://localhost:5000/items")
            .then(res => {
                this.setState({ arrItem: res.data })
                console.log(res.data)
            })
    }

    onDelete = (eid) => {
        axios.delete("http://localhost:5000/items/delete/" + eid)
            .then(res => {
                console.log('Item deleted', res);
                this.componentDidMount();
                this.setState({ msg: 'Record Deleted' });
                this.componentDidMount();
            })
    }


    render() {
        let { arrItem, msg } = this.state;
        return (
            <>  
                
                <div className='container'>
                    <h4 className="mb-3 text-center mt-4">MyResto Menu</h4>
                    <div className='row mt-3'>
                        <span className='alert-danger'>{msg}</span>
                        {<MenuAdd />}
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