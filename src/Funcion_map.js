import React,{Component, useState} from "react";
import { render } from "react-dom";


function Function_map(){
    return <ul>
        {["coder","house"].map(u=> <li>{u}</li>)}
    </ul>
}

