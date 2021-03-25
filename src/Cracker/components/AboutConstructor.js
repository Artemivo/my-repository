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

  let maximum = 100;
  const small = 10;
  const medium = 20;
  const large = 30;

  
  
  const [soybeanValue, setSoybeanValue] = useState(0);
  const [sesameValue, setSesameValue] = useState(0);
  const [wheatValue, setWheatValue] = useState(0);
  const [cornValue, setCornValue] = useState(0);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("CHOOSE YOUR PACK");
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    var val = maximum - (soybeanValue + sesameValue + wheatValue);
    val >= 0 ? setCornValue(val) : setCornValue(0);
  }, [soybeanValue, sesameValue, wheatValue]);



  function slider(...sliders) {
    var arr = [...sliders];
    const newArr = [];
    const object = {
      soybean: 0,
      sesame: 0,
      wheat: 0,
      corn: 0,
    };
    var sum = sliders.reduce((summ, el) => summ + el, 0);
    for (var j = 0; j < sliders.length; j++) {
      if (sliders[j] != sum) {
        sliders[j] = Math.trunc((sliders[j] / sum).toFixed(4) * 100);
        newArr.push(sliders[j]);
      }
    }
    var b = 0;
    for (var key in object) {
      object[key] = newArr[b];
      ++b;
    }
    return object;
  }
  let objValues = slider(soybeanValue, sesameValue, wheatValue, cornValue);

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
              nameProduct="soybean"
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
              nameProduct="sesame"
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
              nameProduct="wheat"
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
              type="range"
              min="0"
              max="100"
              nameProduct="corn"
              value={objValues.corn ? objValues.corn : (objValues.corn = 0)}
              className="corn"
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
       {showButton&& <button className="constructor-slider_list-button-text">ADD TO CART</button>}</div>


      </form>
    </div>
  );
}

export default AboutConstructor;
