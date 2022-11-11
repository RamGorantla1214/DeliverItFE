import { getDistance } from 'geolib'


const Distance = ({lat1,long1},{lat2,long2}) => {

    

    getDistance(
        { latitude: lat1, longitude: long1 },
        { latitude: lat2, longitude: long2 }
    );



    // return(
    //     <>
    //     </>
    // )
}

export default Distance