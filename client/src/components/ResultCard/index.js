import React, { Component } from "react";
import Axios from 'axios'
// import Maps from '../Maps'
// import GoogleMapReact from 'google-map-react'


// const MapMarker = ({ text }) => <div>{text}</div>
class ResultCard extends Component {
    super(props) {
    };
    constructor() {
        super();
        this.state = {
            chosenName: "",
            chosenAddress1: "",
            chosenAddress2: "",
            chosenAddress3: "",
            chosenCategory: "",
            chosenPhoneNum: "",
            chosenImageUrl: "",
            chosenRating: 0,
            chosenPrice: "",
            chosenLat: '',
            chosenLong: '',
            errors: {}
        };
    };



    onSubmit = e => {
        e.preventDefault();
        e.target.classList.add("click");

        const restaurant = {
            restaurantName: this.props.chosenName,
            restaurantAdd: this.props.chosenAddress1,
            restaurantAdd2: this.props.chosenAddress2,
            restaurantAdd3: this.props.chosenAddress3,
            resLat: this.props.chosenLat,
            resLong: this.props.chosenLong,
        };

        console.log(restaurant)

        Axios({
            method: 'post',
            url: '/api/restaurants',
            data: restaurant
        }).then(function (res) {
            console.log(res)
        }).catch(function (error) {
            console.log(error);
        });
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };



    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="card my-3 mx-auto">
                    <i className="fas fa-star" id="favorite" onClick={this.onSubmit} />
                    <div className="row">
                        <div className="col text-center text-sm-left">
                            <img className="img img-fluid img-thumbnail m-3" alt={this.props.chosenYelpUrl} src={this.props.chosenImage_url} />
                        </div>
                        <div className="col-sm-9">
                            <h2 className="ml-sm-3 mt-3 text-center text-sm-left">{this.props.chosenName}</h2>
                            <h5 className="ml-sm-3 mb-3 text-center text-sm-left">{this.props.chosenAddress1} {this.props.chosenAddress2} {this.props.chosenAddress3}</h5>
                            <ul className="list-group list-group-flush mx-3 ml-sm-0 mr-sm-3">
                                <li className="list-group-item">
                                    <b>Type:</b> {this.props.chosenCategory}
                                </li>
                                <li className="list-group-item">
                                    <b>Phone #:</b> {this.props.chosenPhoneNum}
                                </li>
                                <li className="list-group-item">
                                    <b>Rating:</b> {this.props.chosenRating}⭐    ||    <b>Price Range:</b> {this.props.chosenPrice}
                                </li>
                                {/* <li className="list-group-item">
                                    <Maps
                                        defaultCenter={{
                                            lat: this.props.chosenLat,
                                            lng: this.props.chosenLong
                                        }}
                                    />
                                </li> */}
                                <li className="list-group-item">
                                    <a className="btn btn-danger text-center text-sm-left" href={this.props.chosenYelpUrl} rel="noopener noreferrer" target="_blank">Yelp Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultCard;