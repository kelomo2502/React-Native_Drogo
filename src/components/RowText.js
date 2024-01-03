import React from 'react'
import {View, Text} from 'react-native'

export default function RowText({description,message}) {
  return (
    <View>
        <Text>{description}</Text>
        <Text>{message}</Text>
    </View>
  )
}
