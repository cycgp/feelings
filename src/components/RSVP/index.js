import React, { Component } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DataStore } from '@aws-amplify/datastore';
import { AttendanceInfo } from '../../models';
import Auth from '@aws-amplify/auth';
import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk

import vec1 from '../../images/contact/1.png';
import vec2 from '../../images/contact/2.png';

class RSVP extends Component {
  state = {
    name: 'test',
    phone: '0987654321',
    email: 'test@test.com',
    address: 'test address',
    meal: 'true',
    service: 1,
    guest: 1,
    error: {
      address: '',
      email: '',
      guest: '',
      meal: '',
      name: '',
      phone: '',
      service: '',
    },
  };
  // state = {
  //   name: '',
  //   phone: '',
  //   email: '',
  //   address: '',
  //   meal: '',
  //   service: 0,
  //   guest: 0,
  //   error: {},
  // };

  goToOrder = (id) => {
    window.location = '/order-received?type=attendance&id=' + id;
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = '';

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = async (e) => {
    e.preventDefault();

    const { name, phone, email, address, error } = this.state;

    var service = Number(this.state.service);
    var guest = Number(this.state.guest);
    var meal = this.state.meal;

    if (name === '') {
      error.name = 'Please enter your name';
    }
    if (phone === '') {
      error.phone = 'Please enter your phone';
    } else if (!phone.match(/^09\d{8}$/)) {
      error.phone = 'Please enter a valid phone number (e.g. 0987654321)';
    }
    if (email === '') {
      error.email = 'Please enter your email';
    }
    if (service === 0) {
      error.service = 'Please select your relationship';
    }
    if (guest === 0) {
      error.guest = 'Please select your number of guest';
    }
    if (meal === '') {
      error.meal = 'Please select your meal preference';
    }

    if (error) {
      this.setState({
        error,
      });
    }
    meal = this.state.meal === 'true' ? true : false;
    if (
      error.name === '' &&
      error.phone === '' &&
      error.email === '' &&
      error.service === '' &&
      error.meal === '' &&
      error.guest === ''
    ) {
      await DataStore.save(
        new AttendanceInfo({
          name: name,
          phone: phone,
          email: email,
          address: address,
          relationship: service,
          guestCount: guest,
          vegetarion: meal,
        }),
      ).then((res) => {
        if (res.id !== null) {
          this.goToOrder(res.id);
        }
      });

      this.setState({
        name: '',
        phone: '',
        email: '',
        address: '',
        meal: '',
        service: 0,
        guest: 0,
        error: {},
      });
    }
  };

  render() {
    const { name, phone, email, address, service, guest, meal, error } =
      this.state;

    return (
      <section className={`wpo-contact-section ${this.props.pt}`} id="RSVP">
        <div className="container">
          <div className="wpo-contact-section-wrapper">
            <div className="wpo-contact-form-area">
              <SectionTitle MainTitle={'Are you attending ?'} />
              <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                  <div>
                    <div className="form-field">
                      <input
                        value={name}
                        onChange={this.changeHandler}
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                      <p>{error.name ? error.name : ''}</p>
                    </div>
                  </div>
                  <div>
                    <div className="form-field">
                      <input
                        value={phone}
                        onChange={this.changeHandler}
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="phone (e.g. 0987654321)"
                      />
                      <p>{error.phone ? error.phone : ''}</p>
                    </div>
                  </div>
                  <div>
                    <div className="form-field">
                      <input
                        onChange={this.changeHandler}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                      <p>{error.email ? error.email : ''}</p>
                    </div>
                  </div>
                  <div>
                    <div className="form-field">
                      <input
                        onChange={this.changeHandler}
                        value={address}
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Address (required for invitation card)"
                      />
                      <p>{error.address ? error.address : ''}</p>
                    </div>
                  </div>
                  <div>
                    <select
                      name="service"
                      className="form-control"
                      value={service}
                      onChange={this.changeHandler}
                    >
                      <option value={0}>Releatives and Friends of</option>
                      <option value={1}>孟婕 Morrie 的親友</option>
                      <option value={2}>敬原 Henry 的親友</option>
                    </select>
                    <p>{error.service ? error.service : ''}</p>
                  </div>
                  <div>
                    <select
                      name="guest"
                      className="form-control"
                      value={guest}
                      onChange={this.changeHandler}
                    >
                      <option value={0}>Number of Guests</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                    <p>{error.guest ? error.guest : ''}</p>
                  </div>
                  <div>
                    <select
                      name="meal"
                      className="form-control last"
                      value={meal}
                      onChange={this.changeHandler}
                    >
                      <option value={''}>Meal Preferences</option>
                      <option value={false}>葷食 Normal</option>
                      <option value={true}>素食 Vegetarian</option>
                    </select>
                    <p>{error.meal ? error.meal : ''}</p>
                  </div>
                  <div className="submit-area">
                    <div className="form-submit">
                      <button type="submit" className="theme-btn-s3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="border-style"></div>
            </div>
            <div className="vector-1">
              <img src={vec1} alt="" />
            </div>
            <div className="vector-2">
              <img src={vec2} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default RSVP;
