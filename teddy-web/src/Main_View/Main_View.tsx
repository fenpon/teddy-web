

import React, { Component } from 'react';

import './Main_View.scss';
interface Props { src: string, sub_src: string }
class Main_View extends Component<Props> {
    data: any;
    constructor(ln : any){
        super(ln);
        this.data = ln;
    }
    render() {
        return (
            <div className="Main_View">
                <img  className="Main_Img" src={this.data["src"]}/>
            </div>
          
        );
    }

}

export default Main_View;