import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ClientBase from "../../fabrics-api-library/befeni-fabric-api-wrapper.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Fabric = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkZDE2OTZkMWU4ODkxNGUyZjhhYTcyZWYwZTc2MDkzYzE1NmRkOWUxYmIxNzYwYjM3ZDQxNGZjODE2ODkyYjNiNmExMTUzNGFkYWU3OGQ5In0.eyJhdWQiOiIxIiwianRpIjoiMGRkMTY5NmQxZTg4OTE0ZTJmOGFhNzJlZjBlNzYwOTNjMTU2ZGQ5ZTFiYjE3NjBiMzdkNDE0ZmM4MTY4OTJiM2I2YTExNTM0YWRhZTc4ZDkiLCJpYXQiOjE2NDMxMzQzNzEsIm5iZiI6MTY0MzEzNDM3MSwiZXhwIjoxNjc0NjcwMzcwLCJzdWIiOiIxMjYzOTIiLCJzY29wZXMiOlsiYnV0dG9uX2NvbG9yX2xpc3RfaXRlbXMiLCJmYWJyaWNfbGlzdF9pdGVtcyIsImZhYnJpY19jb21wb3NpdGlvbl9saXN0X2l0ZW1zIiwiZmFicmljX2ZhbWlseV9saXN0X2l0ZW1zIiwic2hpcnRfZ2FsbGVyeV9saXN0X2l0ZW1zIiwic2hpcnRfZ2FsbGVyeV91cGRhdGVfcHJlZmVyZW5jZSIsInRocmVhZF9jb2xvcl9saXN0X2l0ZW1zIiwiZmFicmljX2Jvb2tfbGlzdF9pdGVtcyIsImZhYnJpY19ib29rX2dldF9pdGVtIiwiZmFicmljX2Jvb2tfY3JlYXRlX2l0ZW0iLCJmYWJyaWNfYm9va191cGRhdGVfaXRlbSIsImZhYnJpY19ib29rX2RlbGV0ZV9pdGVtIiwiZmFicmljX2Jvb2tfdXBkYXRlX3ByZWZlcmVuY2UiLCJmYWJyaWNfYm9va19jYXRlZ29yeV9saXN0X2l0ZW1zIiwiZmFicmljX2Jvb2tfY2F0ZWdvcnlfZ2V0X2l0ZW0iLCJmYWJyaWNfYm9va19jYXRlZ29yeV9jcmVhdGVfaXRlbSIsImZhYnJpY19ib29rX2NhdGVnb3J5X3VwZGF0ZV9pdGVtIiwiZmFicmljX2Jvb2tfY2F0ZWdvcnlfZGVsZXRlX2l0ZW0iXX0.eANAS7g1HjMrsKr96htF3UzVZ1jGK7djI51x7lQaBHTRH01zRmc9miUn-STreLfrBLy7NIUxAX2H4a6OGdBGbAsZPxAxiZHtfiu906gIZAmOIj3PYdXBpiFvSip_37UMW4KkQlrEIUlozlEWBFXe0jcUYtm-SUsIDZrtxgCQTNgsMVTqM_y-TPHg-9ZoorfklYzTn2gcKmcnaqZZgkxYECquPdrGPxUTJ3ZiBOGTji-Q8GMIFEjrShOZ7V4Xvde8xXS9u4p7_eCEz68fOwc6Ows-JpV4OrR5PjH7sgOMTi7h4Dx_jYqQoZrLCxf2VHJMop-B-mwEwcUHXq31f9n0aivPbJuCGXpabPkM9M6zl_LA7AhgSGNlhuTWLmV1g1mVPoKtPV1Pt_l_iWI14z9s4-1e0_URchB6HEc8Be-BVKP08MfNItg-CIlwo5CifuSz7wazIaz5JUjZZEeaJIPI4m_TZ60-jtQuBLscvFv07Axl_kY6PAwasPYnYgdgrVlKfvlEFMSTiZBFjaZ0Z4nj19hGImEJ_0K2JT8UqfBrH14lM33KH1f7MmMocU0rXb-Ad89BTQcwvvXhkE6hHhJqgO3lzJ9PoLfExfIl3VV1lQ3ChvvdPoiCrU1TIvHt5Ttflwo4PJEpiFnAdy_KHLxsa8XnZ-MZHgrXsRMYAUAJ2Ow";
  const config = {
    shopBaseUrl: "",
    apiBaseUrl: "https://production.befeni.net/api/v2",
  };
  const fabricCode = {
    22: 10022,
    38: 10038,
    124: 10124,
    K10: 30010,
    K5: 30005,
    T500: 20500,
  };
  let [fabric, setFabric] = useState({
    id: "",
    name: "",
    comfort: "",
    ironing: "",
    type: "",
    fabricImages: [],
    material: "",
    weight: "",
    finish: "",
    weave: "",
  });
  const [isShowed, setIsShowed] = useState(false);
  const { id } = useParams();

  const fabricId = fabricCode[id];
  useEffect(() => {
    const fetchData = async () => {
      const client = new ClientBase(config, "de");
      client.updateAccessTokenDirectly(token);
      await client.getFabric(fabricId).then((res) => {
        console.log(res);
        let material = res.getFabricCompositionLabel().fiber_1;
        setFabric({
          id: res.id,
          name: res.name,
          comfort: res.comfort,
          ironing: res.ironing,
          type: res.type,
          fabricImages: res.fabricImages,
          material,
          weight: res.default_weight,
          finish: res.default_finish,
          weave: res.default_weave,
        });
      });
    };
    fetchData();
    //cleanup function
    return () => {
      setFabric([]);
    };
  }, []);
  return (
    <>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-between">
          <h1>{fabric.name}</h1>
          <h1>{id}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-3 my-md-2">
          <Carousel dynamicHeight={true} showThumbs={false} className="vh-30">
            {fabric.fabricImages &&
              fabric.fabricImages.map((fa, index) => {
                return (
                  <div key={index}>
                    <img
                      src={fa.image_url}
                      alt=""
                      style={{ objectFit: "contain" }}
                      height="500"
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
        <div className="col-md-6 table-responsive">
          <table className="table table-bordered table-responsive text-nowrap">
            <tbody>
              <tr>
                <th scope="row">Type:</th>
                <td>{fabric.type}</td>
              </tr>
              <tr>
                <th scope="row">Material:</th>
                <td>{fabric.material}</td>
              </tr>
              <tr>
                <th scope="row">Weave:</th>
                <td>{fabric.weave}</td>
              </tr>
              <tr>
                <th scope="row">Weight:</th>
                <td>{fabric.weight}</td>
              </tr>
            </tbody>
          </table>
          <div className="my-5">
            <div className="d-flex align-items-center justify-content-start">
              <span className="me-auto">Ironing:</span>
              <span>
                {fabric.ironing && (
                  <ReactStars
                    count={5}
                    size={24}
                    value={fabric.ironing}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                  />
                )}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-auto">Comfort:</span>
              <span>
                {fabric.comfort && (
                  <ReactStars
                    count={5}
                    size={24}
                    value={fabric.comfort}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex">
        <button
          className="btn btn-primary col-10 mx-auto d-md-none"
          onClick={() => setIsShowed(true)}
        >
          View design inspiration
        </button>
        <h1 className="my-5 text-center">Design Inspiration</h1>
        <div className="col-12 d-flex justify-content-between mb-5">
          <div className="card col-3">
            <img
              src="https://i.pinimg.com/originals/58/ec/77/58ec7707465907e7ba28cf7ddcf0ee64.jpg"
              className="card-img-top"
              alt="..."
              height="300"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card col-3">
            <img
              src="https://i.pinimg.com/originals/58/ec/77/58ec7707465907e7ba28cf7ddcf0ee64.jpg"
              className="card-img-top"
              alt="..."
              height="300"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card col-3">
            <img
              src="https://i.pinimg.com/originals/58/ec/77/58ec7707465907e7ba28cf7ddcf0ee64.jpg"
              className="card-img-top"
              alt="..."
              height="300"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fabric;
