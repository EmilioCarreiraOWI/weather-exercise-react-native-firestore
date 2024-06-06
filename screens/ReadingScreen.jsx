import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReadingCard from './ReadingCard'
import { Picker } from '@react-native-picker/picker'
import { getAllDays } from '../services/FirestoreServices'

const ReadingScreen = ({navigation}) => {

    // TODO: Get all Days
  var dummyReading = {name: "Monday", icon: "sun", id: "123456789"}

  useEffect(() => {
    handleGettingDays()
  }, [])

  const [days, setDays] = useState([])

  const handleGettingDays = async() => {
    console.log('running get days on home...')
    var daysData = await getAllDays();
    setDays(daysData)
}

  return (
    <View style={styles.container}>
      <Button title='Add Reading' onPress={() => navigation.navigate("Add")} />

                {days != [] ? (
                  days.map((day) => (
                    <ReadingCard day={day} key={day.id} />
                ))) : <Text>no Days Logged</Text>}

      <ReadingCard day={dummyReading} />

    </View>
  )
}

export default ReadingScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})