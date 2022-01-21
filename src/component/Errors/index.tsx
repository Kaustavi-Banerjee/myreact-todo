import React from 'react';
import './ErrorMessage.scoped.css';

export default function ErrorMessage({
  message
} : {
  message: string
}) {
  return <div className="errors">
    <p>{message}</p>
  </div>;
}
