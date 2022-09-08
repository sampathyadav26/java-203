import React, { Component } from 'react'
import axios from 'axios';

//jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [],

        }

    }
    componentDidMount() {

        axios.get(" http://localhost:3000/users").then(res => {

            this.setState({ data: res.data });

        });

        $(document).ready(function () {

            setTimeout(function () {

                $('#userdata').DataTable();

            }, 1000);

        });

    }
    render() {
        return (
            <div className="table-users ">

                <div className="jumbotron text-center">

                    <h3 className='chandra'>OJAS INNOVATIVE TECHNOLOGIES</h3>
                    <hr />

                </div>

                <div className='container'>

                    <table id="userdata" className="table table-hover table-bordered">

                        <thead>

                            <tr className='thead-col'>

                                <th scope="col">id</th>

                                <th scope="col">username</th>

                                <th scope="col">email</th>



                            </tr>

                        </thead>

                        <tbody>
                            {

                                this.state.data.map((res) => {

                                    return (<tr>

                                        {/* <th scope="row">1</th> */}

                                        <td>{res.id}</td>

                                        <td>{res.username}</td>

                                        <td>{res.email}</td>

                                    </tr>

                                    )

                                }

                                )

                            }

                        </tbody>

                    </table>



                </div>

            </div>
        )
    }
}

export default DataList
