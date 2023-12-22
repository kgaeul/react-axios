import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Row, Col, Alert, Nav, Container } from 'react-bootstrap';

export default function RowColAlerts() {
  return (
    <div>
      <Navbar bg='dark'>
        <Container>
          <Navbar.Brand href='#home' className='text-light'>
            리액트
          </Navbar.Brand>
          <Navbar.Brand className='text-light' href='#home'>
            리액트
          </Navbar.Brand>
          <Navbar.Brand className='text-light' href='#home'>
            리액트
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Alert>
        <Alert.Heading>알람 성공!!</Alert.Heading>
        <p>이것을 알랍이무니다</p>
      </Alert>
    </div>
  );
}
