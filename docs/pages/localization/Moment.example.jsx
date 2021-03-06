import 'moment/locale/fr';
import 'moment/locale/ru';
import moment from 'moment';
import React, { useState, useCallback } from 'react';
import MomentAdapter from '@material-ui/pickers/adapter/moment';
import { TextField } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { DatePicker, LocalizationProvider } from '@material-ui/pickers';

moment.locale('fr'); // it is required to select default locale manually

const localeMap = {
  en: 'en',
  fr: 'fr',
  ru: 'ru',
};

const maskMap = {
  fr: '__/__/____',
  en: '__/__/____',
  ru: '__.__.____',
};

function MomentLocalizationExample() {
  const [locale, setLocale] = useState('fr');
  const [selectedDate, handleDateChange] = useState(new Date());

  const selectLocale = useCallback(locale => {
    moment.locale(locale);

    setLocale(locale);
  }, []);

  return (
    <LocalizationProvider dateLibInstance={moment} dateAdapter={MomentAdapter} locale={locale}>
      <DatePicker
        renderInput={props => <TextField {...props} />}
        mask={maskMap[locale]}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
      />

      <ButtonGroup>
        {Object.keys(localeMap).map(localeItem => (
          <Button key={localeItem} onClick={() => selectLocale(localeItem)}>
            {localeItem}
          </Button>
        ))}
      </ButtonGroup>
    </LocalizationProvider>
  );
}

export default MomentLocalizationExample;
