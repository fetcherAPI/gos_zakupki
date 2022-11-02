import * as React from 'react';
import {Dayjs} from 'dayjs';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {Field, Form, Formik, useFormik} from 'formik';
import Box from "@mui/material/Box";



const OrganizationInfo = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    /*const validationSchema = yup.object({
        email: yup
            .string("Enter your email")
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });*/

    /*const WithMaterialUI = () => {
        const formik = useFormik({
            initialValues: {
                email: 'foobar@example.com',
                password: 'foobar',
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                alert(JSON.stringify(values, null, 2));
            },
        });*/
    return (
        <div>
            <Formik
                initialValues={{
                    toggle: false,
                    checked: [],
                    date: null,
                    orderName: ''
                }}
                onSubmit={async (values) => {

                    alert(JSON.stringify(values));
                }}
            >
                {({values}) => (
                    <Form>
                        <Box sx={{display: 'flex'}}>
                            название закупки
                            <TextField
                                id={"orderName"}
                            name = 'orderName'/>

                        </Box>
                        <label>
                            <Field type="checkbox" name="toggle"/>
                            {`${values.toggle}`}
                        </label>

                        <div id="checkbox-group">Checked</div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="checked" value="One"/>
                                One
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField required={true} name='date' {...params} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default OrganizationInfo;