import Geocode from "react-geocode";
import {useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {addToState} from '../../Redux/actions'
import {useEffect, useState} from 'react'

const Location = () => {

 const eircode = useSelector((s) => s.eircode)
 const dispatch = useDispatch()
const [lat, setLat] = useState()
const [long, setLong] = useState()
const [address, setAddress] = useState()


const fetchAddress = () => {
    Geocode.setApiKey('AIzaSyCJ_JRKA4QOfkfaEdM69ovi-irxdKIoA6M');
Geocode.setLocationType("APPROXIMATE");
    Geocode.fromLatLng(lat,long).then(
        (response) => {
          const curr_address = response.results[0].formatted_address;
          console.log('address',curr_address);
          setAddress(curr_address)
          dispatch(addToState(curr_address))
        //   dispatch(addToState(lat,lng))
        },
        (error) => {
          console.error(error);
        }
      );
}


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
          })
        
    },[])

    useEffect(() => {
        fetchAddress()
    },[lat,long])
    

   
        
        
    
    

    // const fetchLocation = () => {

    //     Geocode.setApiKey("AIzaSyCJ_JRKA4QOfkfaEdM69ovi-irxdKIoA6M");

    //     Geocode.setLocationType("ROOFTOP");
    //     if(eircode != ''){
    //         console.log('eircode',eircode)
    //         Geocode.fromAddress(eircode).then(
    //             (response) => {
    //                 const { latitude, longitude } = response.results[0].geometry.location;
    //                 console.log('with eir',latitude, longitude);
    //                 fetchAddress(latitude,longitude)
    //               },
    //               (error) => {
    //                 console.error(error);
    //               }
    //         )
    //     }
    //     else{
    //     fetchAddress(lat,long)
    //     }
    // }


    return(
        <>
        { console.log('test',lat,long)}
        {console.log('eir',eircode)}
        </>
    )
}

export default Location
