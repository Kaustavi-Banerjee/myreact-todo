import React from 'react';

export default function ErrorMessage({
  message
} : {
  message: string
}) {
  return <div className="errors">
    <p>{message}</p>
  </div>;
}
