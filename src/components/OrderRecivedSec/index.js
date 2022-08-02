import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { totalPrice } from '../../utils';
import './style.scss';
import { AttendanceInfo, Message } from '../../models';
import useQuery from '../../main-component/useQuery';
import { DataStore } from '@aws-amplify/datastore';

const OrderRecivedSec = ({ cartList }) => {
  const [attendenceOrder, setAttendenceOrder] = useState({});
  const [messageOrder, setMessageOrder] = useState({});
  const query = useQuery();
  useEffect(() => {
    const type = query.value.type;
    const id = query.value.id;
    if (type === 'attendance') {
      DataStore.query(AttendanceInfo, id).then((res) => {
        setAttendenceOrder({
          Name: res.name,
          Phone: res.phone,
          Email: res.email,
          Address: res.address,
          Relationship:
            res.relationship === 1 ? '孟婕 Morrie 的親友' : '敬原 Henry 的親友',
          Guest: res.guestCount,
          'Meal Preference':
            res.vegetarion === false ? '葷食 Normal' : '素食 Vegetarian',
        });
      });
    } else if (type === 'message') {
      DataStore.query(Message, id).then((res) => {
        setMessageOrder({
          Name: res.name,
          Email: res.email,
          Message: res.content,
        });
      });
    }
  });

  return (
    <section className="cart-recived-section section-padding">
      <div className="container">
        <div className="row">
          <div className="order-top">
            <h2>
              Thank You For Your Reply!{' '}
              <span>The form you submit has been recived</span>
            </h2>
            <Link to="/" className="theme-btn">
              Back Home
            </Link>
          </div>
          <Grid className="cartStatus">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid className="cartTotals">
                  <h4>Submitted Form Details</h4>
                  <Table>
                    <TableBody>
                      {Object.keys(messageOrder).map((key, index) => (
                        <TableRow key={index}>
                          <TableCell>{key}</TableCell>
                          <TableCell align="right">
                            {messageOrder[key]}
                          </TableCell>
                        </TableRow>
                      ))}
                      {Object.keys(attendenceOrder).map((key, index) => (
                        <TableRow key={index}>
                          <TableCell>{key}</TableCell>
                          <TableCell align="right">
                            {attendenceOrder[key]}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell>
                          <b>Looking forward to meet you at the wedding ❤❤❤</b>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default OrderRecivedSec;
