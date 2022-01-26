import React from 'react';
import { useNavigate } from "react-router-dom";
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './ListRow.scoped.css';
import { FormInput } from '../../interface/FormInput';

export default function ListRow({
  item,
  deleteFn
} : {
  item: FormInput,
  deleteFn: (id: number) => void,
}): JSX.Element {
  const navigate = useNavigate();

  const gotoEdit = (id: number) => {
    navigate(`/edit/${id}`);
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
