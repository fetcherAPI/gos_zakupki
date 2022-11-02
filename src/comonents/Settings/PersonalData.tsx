import classes from "./Settings.module.scss";

export const PersonalData = () => {
  return (
      <div className={classes.wrapper}>
        <div className={classes.column}>
          <label className={classes.input_label}>
            ПИН пользователя
            <input
                type='text'
                placeholder='123456789000'
                className={classes.input}
            />
          </label>
          <label className={classes.input_label}>
            ФИО пользовател
            <input
                type='text'
                placeholder='ФИО или название'
                className={classes.input}
            />
          </label>
          <label className={classes.input_label}>
            Должность
            <input type='text' placeholder='Директор' className={classes.input}/>
          </label>
          <label className={classes.input_label}>
            Сотовый телефон
            <input
                type='text'
                placeholder='номер телефона'
                className={classes.input}
            />
          </label>
        </div>
        <div className={classes.column}>
          <label className={classes.input_label}>
            ПИН пользователя
            <input
                required
                type='text'
                placeholder='123456789000'
                className={classes.input}
            />
          </label>
          <label className={classes.input_label}>
            ФИО пользовател
            <input
                type='text'
                placeholder='ФИО или название'
                className={classes.input}
            />
          </label>
          <label className={classes.input_label}>
            Должность
            <input type='text' placeholder='Директор' className={classes.input}/>
          </label>
          <label className={classes.input_label}>
            Сотовый телефон
            <input
                type='text'
                placeholder='номер телефона'
                className={classes.input}
            />
          </label>
        </div>
      </div>
  );
};
