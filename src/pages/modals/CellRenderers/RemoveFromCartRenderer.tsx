import { CustomCellRendererProps } from 'ag-grid-react'
import React, { useContext } from 'react'
import { rootContext } from '../../../context/root.context';

function RemoveFromCartRenderer(props: CustomCellRendererProps) {
  const context = useContext(rootContext);
  return (
    <div className="pro-remove">
      <button onClick={context?.removeFromCart}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  )
}

export default RemoveFromCartRenderer