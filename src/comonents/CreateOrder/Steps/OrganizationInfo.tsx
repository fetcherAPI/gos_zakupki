import * as React from "react";
import {useEffect, useState} from "react";
import {Dayjs} from "dayjs";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {Field, Form, Formik} from "formik";
import classes from "./Steps.module.scss";
import {ImgPickerIcon} from "../../../assets/img/export";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import * as Actions from "../../../state/slices/OraganizationInfoSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../state/store";


const OrganizationInfo = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [selectedFile, setSelectedFile] = useState<any>('')
    const dispatch: AppDispatch = useDispatch()
    const {nameOfBuying, offerDeadline, FirstImage, bidDeadline} = useSelector((state: RootState) => state.organizationInfo)

    const [age, setAge] = React.useState("");

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const handleChangeSelectImg = (e: any) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleChange = (newValue: Dayjs | null, valueFor: string) => {
        switch (valueFor) {
            case 'Offer':
                dispatch(Actions.setOfferDeadline(newValue))
                break
            case "Bid" :
                dispatch(Actions.setBidDeadline(newValue))
                break
            default :
                dispatch(Actions.setOfferDeadline(newValue))

        }
    };

    useEffect(() => {
        dispatch(Actions.setFirstImage(selectedFile))
    }, [selectedFile])

    return (
        <>
            <Formik
                initialValues={{
                    toggle: false,
                    checked: [],
                }}
                onSubmit={async (values) => {
                    alert(JSON.stringify(values));
                }}
            >
                {({values}) => (
                    <Form className={classes.form}>
                        <div className={classes.item}>
                            <p className={classes.title}>название закупки</p>
                            <div className={classes.content}>
                                <TextField
                                    fullWidth
                                    required
                                    value={nameOfBuying}
                                    onChange={(e) => dispatch(Actions.setNameOfBuying(e.target.value))}
                                    placeholder='текст'
                                    multiline
                                />
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>Сроки</p>
                            <div className={classes.content}>
                                <label className={classes.date_picker}>
                                    <p>Срок подачи предложений поставщиков</p>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            label='Date desktop'
                                            inputFormat='MM/DD/YYYY'
                                            value={offerDeadline}
                                            onChange={(e: any) => {
                                                handleChange(e, 'Offer')
                                            }}
                                            renderInput={(params: any) => (
                                                <TextField
                                                    fullWidth
                                                    required={true}
                                                    name='date'
                                                    {...params}
                                                    size='small'
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </label>

                                <label>
                                    <p>Срок действия предложений поставщиков</p>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            label='Date desktop'
                                            inputFormat='MM/DD/YYYY'
                                            value={bidDeadline}
                                            onChange={(e: any) => {
                                                handleChange(e, 'Bid')
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    fullWidth
                                                    required={true}
                                                    name='date'
                                                    {...params}
                                                    size='small'
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </label>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>
                                Валюта предложения <br/> поставщика
                            </p>

                            <div className={classes.content}>
                                <div id='checkbox-group'></div>
                                <div
                                    role='group'
                                    aria-labelledby='checkbox-group'
                                    className={classes.checkboxes}
                                >
                                    <label>
                                        <p>Кыргызский сом</p>

                                        <Field type='radio' name='checked' value='SOM' />
                                    </label>

                                    <label>
                                        <p>Другая валюта</p>

                                        <Field
                                            type='radio'
                                            name='checked'
                                            value='OTHER_CURRENCY'
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>
                                Гарантийное обеспечение <br/>
                                предложения поставщика
                            </p>

                            <div className={classes.content}>
                                <div id='checkbox-group'></div>
                                <div
                                    role='group'
                                    aria-labelledby='checkbox-group'
                                    className={classes.checkboxes}
                                >
                                    <label>
                                        <p>Да</p>

                                        <Field type='checkbox' name='checked' value='True'/>
                                    </label>

                                    <label>
                                        <p>Нет</p>

                                        <Field type='checkbox' name='checked' value='False'/>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>Источники финансирования</p>
                            <div className={classes.content}>
                                <TextField
                                    fullWidth
                                    required
                                    onChange={(e) => console.log(e)}
                                    placeholder='MultiLine with rows: 2 and rowsMax: 4'
                                    multiline
                                />
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>
                                Основания для выбора <br/>
                                ограниченного метода
                            </p>
                            <div className={classes.content}>
                                <TextField
                                    fullWidth
                                    required
                                    onChange={(e) => console.log(e)}
                                    placeholder='MultiLine with rows: 2 and rowsMax: 4'
                                    multiline
                                />
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>
                                Загрузить обоснование по <br/>
                                применению ограниченного <br/>
                                метода
                            </p>
                            <div className={classes.content}>
                                <label htmlFor='upload-photo'>
                                    <input
                                        style={{display: "none"}}
                                        id='upload-photo'
                                        name='upload-photo'
                                        type='file'
                                        onChange={(e) => handleChangeSelectImg(e)}
                                    />
                                    <div className={classes.button_pick_img}>
                                        <ImgPickerIcon/>
                                        Прикрепить
                                    </div>
                                    {
                                        FirstImage.name && `${FirstImage.name}`
                                    }

                                </label>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>
                                Выбор случая применения <br/>
                                ограниченного метода
                            </p>
                            <div className={classes.content}>
                                <FormControl size='small'>
                                    <InputLabel id='demo-select-small'>Age</InputLabel>
                                    <Select
                                        labelId='demo-select-small'
                                        id='demo-select-small'
                                        value={age}
                                        label='Age'
                                        onChange={handleChangeSelect}
                                    >
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <p className={classes.title}>
                                Загрузить обоснование по <br/>
                                применению ограниченного <br/>
                                метода
                            </p>
                            <div className={classes.content}>
                                <label htmlFor='upload-photo'>
                                    <input
                                        style={{display: "none"}}
                                        id='upload-photo'
                                        name='upload-photo'
                                        type='file'
                                    />
                                    <div className={classes.button_pick_img}>
                                        <ImgPickerIcon/>
                                        Прикрепить
                                    </div>
                                </label>
                            </div>
                        </div>
                        <button>отпавить</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default OrganizationInfo;
