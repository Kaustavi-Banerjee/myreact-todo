import React from 'react';
import { useNavigate } from "react-router-dom";
import { FormInput } from '../../lib/FormInput';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './ListRow.scoped.css';
import { useDispatch } from 'react-redux';
import { editItem } from '../../lib/redux-store/reducers/listSlice';

export default function ListRow({
  item
} : {
  item: FormInput
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gotoEdit = (id: number) => {
    dispatch(editItem(id));
    navigate(`/edit/${id}`);
  }

  const deleteFn = (id: number) => {
    console.log(id);
  }

  return <div className="item-row">
    <div>
      <span>{item.id}</span>{'. '}
      {item.text}
    </div>
    <div>
      <button className="btn-warning btn" onClick={() => gotoEdit(item.id)}>
        <FiEdit3 />
      </button>
      <button className="btn-danger btn" onClick={() => deleteFn(item.id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  </div>;
}
