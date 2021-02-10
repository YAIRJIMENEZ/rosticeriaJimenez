import {useEffect, useState} from 'react';
export const useFectImages = (pathSource) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        fetch(pathSource,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }).then((res) => res.json()) .then((imgs) => {  
            setstate({
                data: imgs,
                loading:false
            });
        }).catch(error=>{
            console.log(error);
        });

    }, [pathSource]);
    return state;
}