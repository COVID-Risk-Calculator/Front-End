import { FormControl, TextField, Typography } from "@mui/material";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import LuxonUtils from '@date-io/luxon'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from "react";
import dayjs from 'dayjs'
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function NewEvent() {
    const [dateValue, setDateValue] = useState(dayjs('2022-04-07'));

    return (
        <>
            <Typography variant="h3">New Event Page! Woo!</Typography>
            <FormControl>
                <Typography>What would you like to call your event?</Typography>
                <TextField
                    id="event-title"
                    label="Event Title"
                    variant="outlined"
                />
                <Typography>Where will this event take place?</Typography>
                <TextField
                    id="event-county"
                    label="County"
                    variant="outlined"
                />
                <Typography>
                    This will be the default location for your guests, but you
                    can change the location for an individual guest when you add
                    them to the event.
                </Typography> --
            </FormControl>
        </>
    );
}
