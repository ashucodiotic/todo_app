import React, { useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../src/redux/slices/ProductSlice';
const style = StyleSheet.create({
    row: {
        // backgroundColor:"blue",
        // width:100,
        flex: 1,
        fontSize: 30,
        padding: 1,
        borderWidth: 1,
        textAlign: 'center'
        // borderColor:'black'

    },
    componet: {
        flex: 1,
        backgroundColor: "white"
    },
    product: { fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: "blue" }

})
const ProductComponent = () => {
  const { productList }=  useSelector((state)=>state.product)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
  }, [])
  
    return (
        <View style={[style.componet]}>
            <Text style={[style.product]}>Product list</Text>
                <FlatList
                    data={productList}
                    renderItem={({ item }) => <Text style={[style.row]}>{item.title}</Text>}
                
                />
        </View>
    )
}



export default ProductComponent