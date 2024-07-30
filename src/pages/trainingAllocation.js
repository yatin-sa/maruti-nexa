import * as React from 'react';
import { isEmpty } from "lodash";
import "./admin.css";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

const Api = () => {
    const [tableData, setTableData] = useState([]);
    const [units, setUnits] = useState('');
    const [company, setCompany] = useState('');
    const [type, setType] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [isEditID, setIsEditID] = useState('');
    const [code, setCode] = useState('');
    const [actualPrice, setActualPrice] = useState('');
    const [remainingUnits, setRemainingUnits] = useState('');


    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchUsers = () => {
        let config = {
            headers: {
                header1: "test",
            },
        };
        axios
            .get("https://viku.space/informatica/getData.php", [], config)
            .then((response) => {
                setTableData(response.data)
            });
    };

    useEffect(async () => {
        fetchUsers();
        // console.log("anu ", abc);

    }, []);

    const editHandler = (id) => {
        let config = {
            headers: {
                header1: "test",
            },
        };
        axios
            .post('https://viku.space/informatica/getData.php?code=' + id, [], config)
            .then((response) => {
                if (response.data) {
                    console.log(response.data)
                    setUnits(response.data[4]);
                    setCompany(response.data[1]);
                    setType(response.data[3]);
                    setCode(response.data[2]);
                    setStatus(response.data[8]);
                    setActualPrice(response.data[7]);
                    setOpen(true)
                    setIsEdit(true)
                    setIsEditID(response.data[0])
                    setRemainingUnits(response.data[5])
                }
            });
    }
    const deleteData = (id) => {
        let config = {
            headers: {
                header1: "test",
            },
        };
        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("type", "delete");

        axios
            .post('https://viku.space/informatica/crud.php', formdata, config)
            .then((response) => {
                if (response.data) {
                    fetchUsers();
                }
            });
    }

    const editData = () => {
        let config = {
            headers: {
                header1: "test",
            },
        };

        var formdata = new FormData();
        formdata.append("id", isEditID);
        formdata.append("units", units);
        formdata.append("remaining_unit", remainingUnits);
        formdata.append("company", company);
        formdata.append("d_type", type);
        formdata.append("type", "edit");
        formdata.append("code", code);
        formdata.append("status", status);
        formdata.append("actual_unit_price", actualPrice);
        axios
            .post('https://viku.space/informatica/crud.php', formdata, config)
            .then((response) => {
                if (response.data) {
                    toast.success(`Record updated successfully`);
                    fetchUsers();
                    setOpen(false)
                    setIsEdit(false)
                    setUnits('');
                    setCompany('');
                    setType('');
                    setCode('');
                    setStatus('');
                    setActualPrice('');
                    setRemainingUnits('')
                }
            });
    }
    const addData = () => {
        let config = {
            headers: {
                header1: "test",
            },
        };

        var formdata = new FormData();
        formdata.append("units", units);
        formdata.append("remaining_unit", remainingUnits);
        formdata.append("company", company);
        formdata.append("d_type", type);
        formdata.append("type", "add");
        formdata.append("code", code);
        formdata.append("status", status);
        formdata.append("actual_unit_price", actualPrice);

        axios
            .post('https://viku.space/informatica/crud.php', formdata, config)
            .then((response) => {
                if (response.data) {
                    toast.success(`Record added successfully`);
                    fetchUsers();
                    setOpen(false)
                    setUnits('');
                    setCompany('');
                    setType('');
                    setCode('');
                    setStatus('');
                    setActualPrice('');
                    setRemainingUnits('')
                }
            });
    }
    return <>
        <div className="main_admin_table">
            <div className="container">
                <div className="card p-4">
                    <h2>Training Unit Data <div className='float-end '><a className='btn-sm btn btn-dark' onClick={handleOpen}>Create</a>&nbsp;<a className='btn-sm btn btn-dark' href='https://viku.space/informatica/export.php'>Export</a>&nbsp;<a target='_blank' className='btn-sm btn btn-dark' href='https://viku.space/infr/informatica.html'>Upload Data</a></div></h2>
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Company</th>
                                <th>Training Code</th>
                                <th>Distribution Type</th>
                                <th>Training Units</th>
                                <th>Remaining Training Units</th>
                                <th>Actual Unit Price</th>
                                <th>Status</th>
                                <th>Created</th>
                                <th>Modified</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map(function (item) {

                                    return (
                                        <tr key={item.training_unit_id}>
                                            <td>{item.company}</td>
                                            <td>{item.code}</td>
                                            <td>{item.type}</td>
                                            <td>{item.units}</td>
                                            <td>{item.remaining_unit}</td>
                                            <td>{item.actual_unit_price}</td>
                                            <td>{item.status}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                    <a onClick={() => editHandler(item.code)} className="btn btn-dark btn-sm">Edit</a>
                                                    <a onClick={() => deleteData(item.training_unit_id)} type="button" className="btn btn-danger btn-sm">Delete</a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">{(isEdit) ? 'Edit Data' : 'Add Data'}</Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <form className='training_form'>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                <div className='form-group mb-2'>
                                <label className='control-label'>Company</label>
                                <input onChange={(e) => setCompany(e.target.value)} type='text' className='form-control' name='company' value={company} />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='control-label'>Code</label>
                                <input onChange={(e) => setCode(e.target.value)} type='text' className='form-control' name='code' value={code} />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='control-label'>Training Units</label>
                                <input onChange={(e) => setUnits(e.target.value)} type='text' className='form-control' name='units' value={units} />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='control-label'>Remaining Training Units</label>
                                <input onChange={(e) => setRemainingUnits(e.target.value)} type='text' className='form-control' name='units' value={remainingUnits} />
                            </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div className='form-group mb-2'>
                                <label className='control-label'>Actual Unit Price</label>
                                <input onChange={(e) => setActualPrice(e.target.value)} type='text' className='form-control' name='actualPrice' value={actualPrice} />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='control-label'>Status</label>
                                <select onChange={(e) => setStatus(e.target.value)} className='form-control' name='status' value={status}>
                                    <option value="">Select status</option>
                                    <option value="processed">Processed</option>
                                    <option value="available">available</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='control-label'>Distribution Type</label>
                                <input onChange={(e) => setType(e.target.value)} type='text' className='form-control' name='type' value={type} />
                            </div>
                                </Grid>
                            </Grid>
                           
                            
                            <div className='form-group mb-2'>
                                {
                                    (isEdit) ? <button onClick={() => editData()} type='button' className='btn btn-dark'>Update</button> :
                                        <button onClick={() => addData()} type='button' className='btn btn-dark'>Save</button>
                                }

                            </div>
                        </form>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    </>;
};

export default Api;
