import {useEffect, useState} from "react";
import axios from "axios";

export default function Imago(props) {
    const [blobImag, setBlobImag] = useState();
    console.log("wat zijn de props in imago?", props.id)

    useEffect(()=>{
        async function fetchImag() {
            try {
                const result = await axios.get(`http://localhost:8080/product/display/${props.id}`, {
                    responseType: 'blob',
                });
                console.log("de result uit imago display", result.config.url)
                // const imageUrl = result;
                 setBlobImag(result.config.url);
                console.log("controle uit setBlobImag",blobImag)
            } catch (e) {
                console.error(e);
            }
        }
        fetchImag()
    },[])


    return (
        <>
            {blobImag && <img src={blobImag} alt={props} width="100px" />}
        </>
    )
}