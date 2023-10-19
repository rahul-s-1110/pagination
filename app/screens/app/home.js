import { StyleSheet, Text, View,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const HomeScreen = () => {
    const [listData,setListData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(' https://randomuser.me/api/?results=10'); 
                console.log("listData",response.json())

            }
            catch (error) {
                Alert.alert("error to fecth data",error)
              }
        };
        fetchData();
       },[])


  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})