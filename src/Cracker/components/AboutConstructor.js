import React, { useEffect, useState } from "react";
import soybean from "../img/icon/soybean.png";
import sesame from "../img/icon/sesame.png";
import wheat from "../img/icon/wheat.png";
import corn from "../img/icon/corn.png";
import pacage from "../img/icon/pacage.png";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/product";

function AboutConstructor() {
  const dispatch = useDispatch();

  
  const small = 10;
  const medium = 20;
  const large = 30;
  const max = 100;
  
  
  const [soybeanValue, setSoybeanValue] = useState(0);
  const [sesameValue, setSesameValue] = useState(0);
  const [wheatValue, setWheatValue] = useState(0);
  const [cornValue, setCornValue] = useState(0);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("CHOOSE YOUR PACK");
  const [showButton, setShowButton] = useState(false)



 
  function getValues(soybean,sesame,wheat) { 
    var constructorObj={
        soybean: 0,
        sesame: 0,
        wheat: 0,
        corn:0,
      }
      constructorObj.soybean = soybean
      if(soybean<=max&&(soybean+sesame)<max){
        constructorObj.sesame = sesame
      }else{
        constructorObj.sesame = max-soybean
      }
      if((soybean+sesame)<=max&&(soybean+sesame+wheat)<max){
        constructorObj.wheat = wheat
      }else{
        constructorObj.wheat = max-(sesame+soybean)>0?max-(sesame+soybean):0
      }
      if((soybean+sesame+wheat)<max&&soybean!==0){
        constructorObj.corn=max-(soybean+sesame+wheat)
      }
  
  return constructorObj
  }
  
  
  let objValues = getValues(soybeanValue, sesameValue, wheatValue,cornValue);

  const onSub = (e) => {
    e.preventDefault();
    const coof = (soybeanValue+1)*0.5+(sesameValue+1)*0.1+(wheatValue+1)*0.5+(cornValue+1)*0.5
    const price =Math.round((coof/100)*100)/100
    objValues.id = Date.now();
    switch (buttonTitle) {
      case "SMALL PACK":
        objValues.weight = small;
        break;
      case "MEDIUM PACK":
        objValues.weight = medium;
        break;
      case "LARGE PACK":
        objValues.weight = large;
        break;
      default:
        objValues.weight = medium;
    }
    objValues.price = objValues.weight * price;
    if (
      objValues.soybean === 0 &&
      objValues.sesame === 0 &&
      objValues.wheat === 0
    ) {
      alert("You are trying to add to cart - empty :)");
      return null;
    }
    dispatch(addProduct(objValues));
  };
  return (
    <div className="about-block_constructor-slider_list">
      <section>
      <form onSubmit={(e) => onSub(e)}>
        <ul className="about-block_constructor-slider_list-ul">
          <li className="about-block_constructor-slider_list-item">
            <img
              src={soybean}
              alt=""
              className="constructor-slider_list-icon"
            ></img>
            <input
              onChange={(e) => {
                setSoybeanValue(+e.target.value);
              }}
              type="range"
              min="0"
              max="100"
              value={objValues.soybean}
            />
            <span className="constructor-list-item_value">
              {objValues.soybean} %
            </span>
          </li>

          <li className="about-block_constructor-slider_list-item">
            <img
              src={sesame}
              alt=""
              className="constructor-slider_list-icon"
            ></img>
            <input
              onChange={(e) => {
                setSesameValue(+e.target.value);
              }}
              type="range"
              min="0"
              max="100"
              value={objValues.sesame}
              className="sesame"
            />
            <span className="constructor-list-item_value">
              {objValues.sesame} %
            </span>
          </li>

          <li className="about-block_constructor-slider_list-item">
            <img
              src={wheat}
              alt=""
              className="constructor-slider_list-icon"
            ></img>
            <input
              onChange={(e) => {
                setWheatValue(+e.target.value);
              }}
              type="range"
              min="0"
              max="100"
              value={objValues.wheat}
              className="wheat"
            />
            <span className="constructor-list-item_value">
              {objValues.wheat} %
            </span>
          </li>

          <li className="about-block_constructor-slider_list-item">
            <img
              src={corn}
              alt=""
              className="constructor-slider_list-icon"
            ></img>
            <input
            onChange={e=>setCornValue(+e.target.value)}
              type="range"
              min="0"
              max="100"
              value={objValues.corn ? objValues.corn : (objValues.corn = 0)}
              className="corn"
              readOnly={objValues.corn ? objValues.corn : (objValues.corn = 0)}
            />
            <span className="constructor-list-item_value">
              {objValues.corn ? objValues.corn : (objValues.corn = 0)} %
            </span>
          </li>

          <li className="about-block_constructor-slider_list-item">
            <img
              src={pacage}
              alt=""
              className="constructor-slider_list-icon"
            ></img>
            <div
              onClick={() => {
                setVisibleMenu(!visibleMenu);
              }}
              className="constructor-slider_list-button"
            >
              {buttonTitle}
            </div>

            {visibleMenu && (
              <div
                onClick={(e) => {
                  setButtonTitle(e.target.innerText);
                }}
                className="constructor-slider_list-menu"
              >
                <div
                  onClick={() => {
                    setVisibleMenu(!visibleMenu);
                  }}
                >
                  <p className="slider_list-menu_item-choose">
                    CHOOSE YOUR PACK
                  </p>
                  <p className="slider_list-menu_item">SMALL PACK</p>
                  <p className="slider_list-menu_item">MEDIUM PACK</p>
                  <p className="slider_list-menu_item">LARGE PACK</p>
                </div>
              </div>
            )}
          </li>
        </ul>

        <div onMouseEnter={()=>setShowButton(true)} className="constructor-slider_list-button-add">+
       {showButton&& <button className="constructor-slider_list-button-text" onMouseOut={()=>setShowButton(false)}>ADD TO CART</button>}</div>


      </form>
      </section>
    </div>
  );
}

export default AboutConstructor;
