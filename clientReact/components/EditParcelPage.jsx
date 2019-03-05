import React from 'react';
import { NavLink } from 'react-router-dom';

const EditParcel = (props) => {
  console.log(props);
  return (
    <div className="container">
      Editing parcel with id of {props.match.params.id}
    </div>
);
}

export default EditParcel;