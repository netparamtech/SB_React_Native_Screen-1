import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'


export default function DateCal() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View>
            <DatePicker
                mode={"date"}
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})