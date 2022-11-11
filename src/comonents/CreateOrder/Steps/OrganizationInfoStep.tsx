import * as React from "react";
import {useEffect, useState} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {useAppDispatch, useAppSelector} from "../../../hook/reduxHooks";
import * as Actions from "../../../state/slices/OraganizationInfoSlice";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {Dayjs} from "dayjs";
import {ImgPickerIcon} from "../../../assets/img/export";
import classes from "./Steps.module.scss";
import TextField from "@mui/material/TextField";


const OrganizationInfoStep = () => {
    const [FirstSelectedFile, setFirstSelectedFile] = useState<any>();
    const [SecondSelectedFile, setSecondSelectedFile] = useState<any>();
    const dispatch = useAppDispatch();
    const {
        nameOfBuying,
        offerDeadline,
        FirstImage,
        SecondImage,
        bidDeadline,
        sourcesOfFinancing,
        ReasonsForChoosingRestrictedMethod,
        ChoiceOfApplication,
    } = useAppSelector((state) => state.organizationInfo);


    const handleChangeSelectImg = (e: any, imgFor: string) => {
        switch (imgFor) {
            case "first":
                setFirstSelectedFile(e.target?.files[0]);
                break;
            case "second":
                setSecondSelectedFile(e.target.files[0]);
                break;
            default:
        }
    };

    const handleChange = (newValue: Dayjs | null, valueFor: string) => {
        switch (valueFor) {
            case "Offer":
                dispatch(Actions.setOfferDeadline(newValue));
                break;
            case "Bid":
                dispatch(Actions.setBidDeadline(newValue));
                break;
            default:
                dispatch(Actions.setOfferDeadline(newValue));
        }
    };

    useEffect(() => {
        dispatch(Actions.setFirstImage(FirstSelectedFile));
    }, [FirstSelectedFile]);

    useEffect(() => {
        dispatch(Actions.setSecondImage(SecondSelectedFile));
    }, [SecondSelectedFile]);


    return (
        <>
            <form className={classes.form}>

                <div className={classes.item}>
                    <p className={classes.title}>название закупки</p>
                    <div className={classes.content}>
                        <TextField
                            fullWidth
                            value={nameOfBuying}
                            placeholder='текст'
                            multiline
                            required
                            onChange={(e) => dispatch(Actions.setNameOfBuying(e.target.value))}
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
                                    label='Выбрать дату'
                                    inputFormat='MM/DD/YYYY'
                                    value={offerDeadline}
                                    onChange={(e: any) => {
                                        handleChange(e, "Offer");
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
                                    inputFormat='MM/DD/YYYY'
                                    value={bidDeadline}
                                    onChange={(e: any) => {
                                        handleChange(e, "Bid");
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
                        <div
                            role='group'
                            aria-labelledby='checkbox-group'
                            className={classes.checkboxes}
                        >
                            <label>
                                <p>Кыргызский сом</p>

                                <input
                                    required
                                    type='radio'
                                    name='checked'
                                    value='SOM'
                                    onChange={(e) =>
                                        dispatch(Actions.setTypeOfCurrency(e.target.value))
                                    }
                                />
                            </label>

                            <label>
                                <p>Другая валюта</p>

                                <input
                                    onChange={(e) =>
                                        dispatch(Actions.setTypeOfCurrency(e.target.value))
                                    }
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
                        <div className={classes.checkboxes}>
                            <label>
                                <p>да</p>

                                <input
                                    required
                                    type='radio'
                                    name='ensured'
                                    value={"YES"}
                                    onChange={(e) => dispatch(Actions.setIsEnsured(e.target.value))}
                                />
                            </label>

                            <label>
                                <p>Нет</p>

                                <input
                                    onChange={(e) => dispatch(Actions.setIsEnsured(e.target.value))}
                                    type='radio'
                                    name='ensured'
                                    value={"NO"}
                                />
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
                            value={sourcesOfFinancing}
                            onChange={(e) =>
                                dispatch(Actions.setSourcesOfFinancing(e.target.value))
                            }
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
                            value={ReasonsForChoosingRestrictedMethod}
                            onChange={(e) =>
                                dispatch(
                                    Actions.setReasonsForChoosingRestrictedMethod(e.target.value)
                                )
                            }
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
                        <label htmlFor='upload-first-photo'>
                            <input
                                style={{display: "none"}}
                                id='upload-first-photo'
                                required
                                name='upload-first-photo'
                                type='file'
                                onChange={(e) => handleChangeSelectImg(e, "first")}
                            />
                            <div className={classes.button_pick_img}>
                                <ImgPickerIcon/>
                                Прикрепить
                            </div>
                            {FirstImage?.name && `${FirstImage.name}`}
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
                            <InputLabel id='demo-select-small'>Выбрать </InputLabel>
                            <Select
                                labelId='demo-select-small'
                                id='demo-select-small'
                                value={ChoiceOfApplication}
                                label='Age'
                                onChange={(e) =>
                                    dispatch(Actions.setChoiceOfApplication(e.target.value))
                                }
                            >
                                <MenuItem value=''>
                                    <em>Нет</em>
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
                        <label htmlFor='upload-second-photo'>
                            <input
                                style={{display: "none"}}
                                required
                                id='upload-second-photo'
                                name='upload-second-photo'
                                type='file'
                                onChange={(e) => handleChangeSelectImg(e, "second")}
                            />
                            <div className={classes.button_pick_img}>
                                <ImgPickerIcon/>
                                Прикрепить
                            </div>
                            {SecondImage?.name && `${SecondImage.name}`}
                        </label>
                    </div>
                </div>
                <input type="submit"/>
            </form>

        </>

    );
};

export default OrganizationInfoStep;
