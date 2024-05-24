import React, { useState } from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as XLSX from 'xlsx';
import customAxios from '../authAxios';
import Swal from 'sweetalert2';

const UploadExcel = () => {
    const [jsonData, setJsonData] = useState(null);
    const theme = useTheme();

    const handleClick = () => {
        try {
            try {
                customAxios.post("/api/v1/company", jsonData)
                    .then((response) => {
                        console.log(response);
                        if (response.data.success) {

                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Data uploaded successfully",
                                showConfirmButton: false,
                                timer: 2000,
                            }).then(() => {

                            });

                            return;
                        } else {
                            console.log("in else login");
                            Swal.fire({
                                position: "center",
                                icon: "error",
                                title: "Upload failed",
                                showConfirmButton: false,
                                timer: 2000,
                            });
                        }
                    })
                    .catch((err) => {
                        console.log("in el ");
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "upload failed",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            } catch (error) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: error,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                setJsonData(json);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <Container>
            <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ marginTop: theme.spacing(4) }}>
                <Grid item>
                    <input
                        accept=".xlsx, .xls"
                        style={{ display: 'none' }}
                        id="upload-file"
                        type="file"
                        onChange={handleFileUpload}
                    />
                    <label htmlFor="upload-file">
                        <Button variant="contained" color="primary" component="span" startIcon={<UploadFileIcon />}>
                            Upload Excel File
                        </Button>
                    </label>
                </Grid>
            </Grid>

            {jsonData && (
                <Container style={{ marginTop: theme.spacing(4) }}>
                    <Typography variant="h6" gutterBottom>
                        JSON Data:
                    </Typography>
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                    <Button variant="contained" color="primary" onClick={handleClick}>Upload</Button>
                </Container>
            )}
        </Container>
    );
};

export default UploadExcel;
