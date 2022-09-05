import React, { useState } from 'react';
import { Form, Row, Column, DivInput, Button } from './FormStyle.js';

const FormClientes = () => {
  return (
    <div>
      <Form>
        <Row>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput></DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput></DivInput>
          </Column>
          <Column mobile="12" tablet="12" desktop="12">
            <DivInput></DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className=""></DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className=""></DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className=""></DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className=""></DivInput>
          </Column>
        </Row>
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default FormClientes;
