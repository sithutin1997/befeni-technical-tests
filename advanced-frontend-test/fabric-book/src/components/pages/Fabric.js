import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ClientBase from '../../fabrics-api-library/befeni-fabric-api-wrapper.js'

const Fabric = () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkZDE2OTZkMWU4ODkxNGUyZjhhYTcyZWYwZTc2MDkzYzE1NmRkOWUxYmIxNzYwYjM3ZDQxNGZjODE2ODkyYjNiNmExMTUzNGFkYWU3OGQ5In0.eyJhdWQiOiIxIiwianRpIjoiMGRkMTY5NmQxZTg4OTE0ZTJmOGFhNzJlZjBlNzYwOTNjMTU2ZGQ5ZTFiYjE3NjBiMzdkNDE0ZmM4MTY4OTJiM2I2YTExNTM0YWRhZTc4ZDkiLCJpYXQiOjE2NDMxMzQzNzEsIm5iZiI6MTY0MzEzNDM3MSwiZXhwIjoxNjc0NjcwMzcwLCJzdWIiOiIxMjYzOTIiLCJzY29wZXMiOlsiYnV0dG9uX2NvbG9yX2xpc3RfaXRlbXMiLCJmYWJyaWNfbGlzdF9pdGVtcyIsImZhYnJpY19jb21wb3NpdGlvbl9saXN0X2l0ZW1zIiwiZmFicmljX2ZhbWlseV9saXN0X2l0ZW1zIiwic2hpcnRfZ2FsbGVyeV9saXN0X2l0ZW1zIiwic2hpcnRfZ2FsbGVyeV91cGRhdGVfcHJlZmVyZW5jZSIsInRocmVhZF9jb2xvcl9saXN0X2l0ZW1zIiwiZmFicmljX2Jvb2tfbGlzdF9pdGVtcyIsImZhYnJpY19ib29rX2dldF9pdGVtIiwiZmFicmljX2Jvb2tfY3JlYXRlX2l0ZW0iLCJmYWJyaWNfYm9va191cGRhdGVfaXRlbSIsImZhYnJpY19ib29rX2RlbGV0ZV9pdGVtIiwiZmFicmljX2Jvb2tfdXBkYXRlX3ByZWZlcmVuY2UiLCJmYWJyaWNfYm9va19jYXRlZ29yeV9saXN0X2l0ZW1zIiwiZmFicmljX2Jvb2tfY2F0ZWdvcnlfZ2V0X2l0ZW0iLCJmYWJyaWNfYm9va19jYXRlZ29yeV9jcmVhdGVfaXRlbSIsImZhYnJpY19ib29rX2NhdGVnb3J5X3VwZGF0ZV9pdGVtIiwiZmFicmljX2Jvb2tfY2F0ZWdvcnlfZGVsZXRlX2l0ZW0iXX0.eANAS7g1HjMrsKr96htF3UzVZ1jGK7djI51x7lQaBHTRH01zRmc9miUn-STreLfrBLy7NIUxAX2H4a6OGdBGbAsZPxAxiZHtfiu906gIZAmOIj3PYdXBpiFvSip_37UMW4KkQlrEIUlozlEWBFXe0jcUYtm-SUsIDZrtxgCQTNgsMVTqM_y-TPHg-9ZoorfklYzTn2gcKmcnaqZZgkxYECquPdrGPxUTJ3ZiBOGTji-Q8GMIFEjrShOZ7V4Xvde8xXS9u4p7_eCEz68fOwc6Ows-JpV4OrR5PjH7sgOMTi7h4Dx_jYqQoZrLCxf2VHJMop-B-mwEwcUHXq31f9n0aivPbJuCGXpabPkM9M6zl_LA7AhgSGNlhuTWLmV1g1mVPoKtPV1Pt_l_iWI14z9s4-1e0_URchB6HEc8Be-BVKP08MfNItg-CIlwo5CifuSz7wazIaz5JUjZZEeaJIPI4m_TZ60-jtQuBLscvFv07Axl_kY6PAwasPYnYgdgrVlKfvlEFMSTiZBFjaZ0Z4nj19hGImEJ_0K2JT8UqfBrH14lM33KH1f7MmMocU0rXb-Ad89BTQcwvvXhkE6hHhJqgO3lzJ9PoLfExfIl3VV1lQ3ChvvdPoiCrU1TIvHt5Ttflwo4PJEpiFnAdy_KHLxsa8XnZ-MZHgrXsRMYAUAJ2Ow'
  const config = {
    shopBaseUrl: '',
    apiBaseUrl: 'https://production.befeni.net/api/v2'
  }
  const fabricCode = {
      '22'    :	10022,
      '38'    :	10038,
      '124'   :	10124,
      'K10'   :	30010,
      'K5'    :	30005,
      'T500'  :	20500
  }
  const [fabric,setFabric] = useState();
  const {id} = useParams();

  const fabricId = fabricCode[id];
  useEffect(()=>{
    const fetchData = async() => {
      const client = new ClientBase(config, 'de');
      client.updateAccessTokenDirectly(token);
      const data = await client.getFabric(fabricId).then(res=>console.log(res))
      setFabric(data)
    }
    fetchData();
    return setFabric({})
  },[])

  return (
    <div> 
      <h1>Fabric id - {id}</h1>
      {/* <p>{fabric}</p> */}
    </div>
  )
}

export default Fabric