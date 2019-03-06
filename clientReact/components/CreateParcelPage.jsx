import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Aside from './common/Aside';
import Input from './common/Input';
import TextArea from './common/TextArea';
import { parcelRequest } from '../actions/parcelActions';
import { ADD_PARCEL, GET_ERRORS } from '../actions/types';
import style from '../assets/css/style.css';

class CreateParcel extends Component {
  state = {
    receiver_number: '',
    weight: '',
    description: '',
    weight_metric: '', 
    sender_address: '', 
    receiver_address: '', 
    zip: '', 
    state: ''
  };
  
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const parcelData = this.state;
    if (this.props.parcelRequest('/parcels', 'post',{type: ADD_PARCEL}, {type: GET_ERRORS}, parcelData)){
      this.props.history.push('/dashboard');
    }


  }
  render() {
    const { description, receiver_number, weight, 
      sender_address, receiver_address, 
      zip, state } = this.state;
    const options = [
      { text: 'Select weight', value: ''},
      { text: 'KG', value: 'kg'}
    ]
    return (
      <div>
        <section id={style.left}>
          <Aside/>
        </section>

        <div className={style.pageContent}>
          <div id={style.profileTitle}><h1>Create Order Section</h1></div>
          <section id={style.main}>
            <div className={style.dashboardContainer}>
                <form id={style.createParcel} onSubmit = {this.handleSubmit}>
                  <fieldset>
                    <legend><h2>Create Parcel Delivery Order <i className="fa fa-edit"></i></h2></legend>
                    <div id="message"></div>
                  <div className={style.formLeft}>
          
                    <Input 
                      label="phone"
                      text="Phone"
                      type="tel"
                      placeholder="Enter contact phone number"
                      id="receiver_number"
                      value = {receiver_number}
                      handleChange={this.handleChange}
                      required
                    />
                    <Input 
                      label="weight"
                      text="Weight"
                      type="number"
                      placeholder="Item weight"
                      id="weight"
                      value = {weight}
                      handleChange={this.handleChange}
                      required
                    />
                  
                      <div>
                        <label htmlFor="metric"><b>Weight metric: </b>
                          <select  name="metric" required id="weight_metric" onChange={this.handleChange}>
                          {
                            options.map((c) => 
                            <option key={c.text} value={c.value}>
                              {c.text}
                            </option>)
                          }
          
                          </select>
                        </label>
                      </div>
          
                      <TextArea 
                        label="description"
                        text="description"
                        placeholder="description"
                        id="description"
                        value = {description}
                        handleChange={this.handleChange}
                      />
                    </div>
                        
                    <div className={style.formLeft}>
                    <Input 
                      label="from"
                      text="Sender Address: "
                      type="text"
                      placeholder="Enter sender address"
                      id="sender_address"
                      value = {sender_address}
                      handleChange={this.handleChange}
                      required
                    />
        
                    <Input 
                      label="to"
                      text="Destination Address: "
                      type="text"
                      placeholder="Enter Destination Address"
                      id="receiver_address"
                      value = {receiver_address}
                      handleChange={this.handleChange}
                      required
                    />  
                    <Input 
                      label="zip"
                      text="Zip "
                      type="number"
                      placeholder="zip code"
                      id="zip"
                      value = {zip}
                      handleChange={this.handleChange}
                      required
                      
                    />  
                    
                    <Input 
                      label="state"
                      text="State"
                      type="text"
                      placeholder="Enter Destination State"
                      id="state"
                      value = {state}
                      handleChange={this.handleChange}
                      required
                    />  
                      
                    </div>
                    
                    <div className={style.center}>
                        <button  type="submit"> Create order</button>
                    </div>        
                  
                  </fieldset>   
                      
                </form>
              
            </div>
          </section>
        </div>
      </div>
    );
  }
} 
export default connect(null, { parcelRequest })(withRouter(CreateParcel));