import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ChipField,
  FunctionField,
  Responsive,
  SimpleList
} from 'admin-on-rest';

const formattedAddress = ({recepient}) => {
  const {street, city, zip} = recepient;
  return `${street}, ${city} ${zip}`;
};

const smallView = <SimpleList
  primaryText={formattedAddress}
  secondaryText={record => `Delivery on ${record.deliveryDate}`}
  tertiaryText={record => `Status: ${record.status}`} />;

const mediumView = <Datagrid>
    <NumberField label="id" source="id" />
    <DateField label= "Delivery On" source="deliveryDate" showTime/>
    <TextField label= "Name" source="recepient.name" />
    <FunctionField
      label="Address"
      source="recepientAddress.street.name"
      render={formattedAddress}
    />
    <ChipField label="Status" source="status" />
    <TextField label="Company Name" source="retailer" />
  </Datagrid>;

export const TaskList = (props) => (

    <List {...props}
      title="List of tasks"
      perPage={5}
      sort={{ field: "deliveryDate", order: 'ASC' }}>
       <Responsive
           small={smallView}
           medium={mediumView}
       />
   </List>
);
