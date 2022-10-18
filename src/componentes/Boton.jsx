import React from "react";
import '../css/Boton.css';
import '../App'


function Botons({text,bgColor,color,btnTexto, boxShadow,startIcon,btnText,endIcon, border, cursor,width,height,pColor}){

    return(
       <aside>
            <p className="btn-head" style={{color: pColor}}>{text}</p>
            <button
                style={{
                    backgroundColor: bgColor,
                    color: color,
                    border: border,
                    boxShadow: boxShadow,
                    cursor: cursor,
                    width:width,
                    height:height,
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    {" "}
                {startIcon && (
                <span className="material-symbols-outlined">{startIcon}</span>
                )}
                {btnText}
                {endIcon && (
                <span className="material-symbols-outlined">{endIcon}</span>
                )}
            </button>
       </aside>
    )    
}

export default Botons;