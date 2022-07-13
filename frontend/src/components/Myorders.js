import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./myorder.css";
import { useSelector, useDispatch } from "react-redux";
import { myorder, clearerrors } from "../actions/orderaction";

import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Launch } from "@mui/icons-material";
import { Typography } from "@material-ui/core";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state.myorder);


  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 200, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <Launch />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderitems.length,
        id: item._id,
        status: item.orderstatus,
        amount: item.totalprice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error("You need to register to order");
      dispatch(clearerrors());
      navigate("/")
    }

    dispatch(myorder());

  }, [dispatch, alert, error]);

  return (
    <Fragment>
    

      <div className="myOrdersPage">
      <a href="/"><button className="ok">Home</button></a>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="myOrdersTable"
          autoHeight
        />

        
      </div>

    </Fragment>
  );
};

export default MyOrders;