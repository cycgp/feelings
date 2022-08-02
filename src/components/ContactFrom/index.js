import React, { Component } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Message } from '../../models';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    notes: '',
    error: {},
  };

  goToOrder = (id) => {
    window.location = '/order-received?type=message&id=' + id;
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

    const { name, email, notes, error } = this.state;

    if (name === '') {
      error.name = 'Please enter your name';
    }
    if (email === '') {
      error.email = 'Please enter your email';
    }
    if (notes === '') {
      error.notes = 'Please enter your message';
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (error.name === '' && error.email === '' && error.notes === '') {
      // await DataStore.save(
      //   new Message({
      //     name: name,
      //     email: email,
      //     content: notes,
      //   }),
      // );
      await DataStore.save(
        new Message({
          name: name,
          email: email,
          content: notes,
        }),
      ).then((res) => {
        if (res.id !== null) {
          console.log(res);
          this.setState({
            id: res.id,
          });
          // this.goToOrder(res.id);
        }
      });

      this.setState({
        name: '',
        email: '',
        notes: '',
        error: {},
      });
    }
  };

  render() {
    const { name, email, notes, error } = this.state;

    return (
      <form onSubmit={this.subimtHandler} className="form">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-field">
              <input
                value={name}
                onChange={this.changeHandler}
                type="text"
                name="name"
                placeholder="Name"
              />
              <p>{error.name ? error.name : ''}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
              <p>{error.email ? error.email : ''}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-field">
              <textarea
                name="notes"
                value={notes}
                onChange={this.changeHandler}
                placeholder="Message"
              ></textarea>
              <p>{error.notes ? error.notes : ''}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-submit">
              <button type="submit" className="theme-btn-s4 mt-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default ContactForm;
