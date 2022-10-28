import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import classes from "../../scss/global.module.scss";
import styles from "./Settings.module.scss";
import { Invoice } from "../Invoice/Invoice";

type Props = {};

export const Settings = (props: Props) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.header}>
        <p>{`кабинет`}</p>
        <h1>Настройки</h1>
      </div>

      <Box className={styles.settings} sx={{ flexGrow: 1, p: 3 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} variant='scrollable'>
              <Tab label='Личные данные' value='1' />
              <Tab label='Информация об организации' value='2' />
              <Tab label='Управление учетными записями' value='3' />
              <Tab label='Сотрудники' value='4' />
              <Tab label='Инспекторы' value='5' />
              <Tab label='Мои документы' value='6' />
              <Tab label='Мои сертификаты' value='7' />
              <Tab label='Сертификаты организации' value='8' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <Invoice />
          </TabPanel>
          <TabPanel value='2'>Item Two</TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
          <TabPanel value='4'>Item Three</TabPanel>
          <TabPanel value='5'>Item Three</TabPanel>
          <TabPanel value='6'>Item Three</TabPanel>
          <TabPanel value='7'>Item Three</TabPanel>
          <TabPanel value='8'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
