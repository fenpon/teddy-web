

import React, { Component } from 'react';
import './App.scss';
import Top_View from './Top_View/Top_View';
import Main_View from './Main_View/Main_View';
import Game_info from './Game_info/Game_info';
import Doll_Info from './Doll_Info/Doll_Info';
import StroyView from './StroyView/StroyView';

interface Props {
    src: string,
    sub_src: string,
    info_src: Array<Array<string>>;
    Doll: any;
    intro: any;
}

class App extends Component<Props>{
    View_Type: number = 0;
    data: any;
  
    constructor(ln : any) {
        super(ln);
        this.data = ln;
        console.log(this.data["intro"]);
    }
    Get_Main_View(props : any) {
        return <Main_View src={props["src"]} sub_src={props["sub_src"]}/>;
    }
    Get_Game_Info(props: any) {
        return <Game_info info_src={props["info_src"]} />;
    }
    Get_Doll_Info(props: any) {
        console.log("G ", props["info_src"]);
        return <Doll_Info Doll={props["info_src"]} />;
    
    }
    Get_StroyView(props: any) {
        console.log("G ", props["info_src"]);
        return <StroyView intro={props["info_src"]} />;

    }
    render() {
   
        return (
            <div className="App">
                <Top_View />    
                <this.Get_Main_View src={this.data["src"]} sub_src={this.data["sub_src"]} />
                <this.Get_Game_Info info_src={this.data["info_src"]} />
                <this.Get_Doll_Info info_src={this.data["Doll"]} />
                <this.Get_StroyView info_src={this.data["intro"]} />
            </div>
        );
    }
 
}

export default App;
