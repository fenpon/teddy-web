

import React, { Component } from 'react';

import './Top_View.scss';

class Top_View extends Component {
    Sub_Menu: any;
    Sub_Menu_But: any;
    OnClickSubMenu(e: any,sub_menu : any) {
        //e.preventDefault();
        console.log("Sub Menu_Click ", sub_menu);//타겟이 무엇인가 질문
        e.target.className = "r Sub_Menu_But d-none";
        sub_menu.className = "Sub_Menu d-block";
       // let spliter  = this.Sub_Menu_Class.split(" ");
        //let you_class_str = spliter[0] + " " + spliter[1] + " d-none";
       
    }
    OnCloseSubMenu(e: any, sub_menu_Button: any, sub_menu: any) {
        //e.preventDefault();
        console.log("Sub Menu_Click ", e.target.parent);//타겟이 무엇인가 질문
        sub_menu.className = "Sub_Menu d-none";
        sub_menu_Button.className = "r Sub_Menu_But d-block";
        // let spliter  = this.Sub_Menu_Class.split(" ");
        //let you_class_str = spliter[0] + " " + spliter[1] + " d-none";

    }
    render() {
       
        const top_view_title = {
           
            overflow:"hidden",
            lineHeight: 2
        };
        const top_view_sub_title = {
            overflow: "hidden",
            lineHeight: 2.7
        };

        const top_view_title_sm = {
            height: "50px",
            lineHeight: 2,
            overflow: "hidden"

        };
        const menu_ui = {
            width: "30px"
        };
        const sub_menu_style = {
            lineHeight: 2
          
        };
       
        return (
            <div className="Top_View_Wraper" id="Top_View_Wraper">
                <header className=" Top_View" >
                    <div className="d-block d-sm-block  d-md-block  d-lg-none    " style={top_view_title_sm}>
                        <a href="./#Top_View_Wraper">
                            <span className="sub_title sm_title l" style={top_view_title_sm} data-toggle="tab-hover">
                                    Teddy Defense
                             </span>
                         </a>
                        <img className="r Sub_Menu_But d-block" src="./res/menu_ui.png" style={menu_ui} ref={(ref) => { this.Sub_Menu_But = ref}} onClick={(e) => this.OnClickSubMenu(e,this.Sub_Menu)} data-toggle="collapse" />
                    </div>
           

                    <div className="d-none d-sm-none d-md-none d-lg-block   col-lg-4  top_view_default   " style={top_view_title}>               
                        <a href="./#Top_View_Wraper"><span className="main_title">Teddy Defense</span></a>
                    </div>
               
                    <div className="d-none d-sm-none  d-md-none d-lg-block col-lg-2 top_view_default " style={top_view_sub_title}>
                
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block  col-lg-2 top_view_default " style={top_view_sub_title}>
                        <a href="./#Game_info_View">
                            <span className="sub_title">게임 소개</span>
                        </a>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block  col-lg-2 top_view_default  " style={top_view_sub_title}>
                        <a href="./#Doll">
                            <span className="sub_title">인형 보기</span>
                         </a>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block  col-lg-2 top_view_default " style={top_view_sub_title}>
                        <a href="./#Stroy">
                            <span className="sub_title">세계관</span>
                        </a>
                    </div>
               
               
              
                </header>
                <ul className="Sub_Menu d-none" ref={(ref) => { this.Sub_Menu = ref }} onClick={(e) => this.OnCloseSubMenu(e, this.Sub_Menu_But, this.Sub_Menu )}>
                    <li className="Sub_Menu_close" >
                        <span>X</span>

                    </li>
                    <li className="Sub_Menu_Tag" style={sub_menu_style}>
                        <a href="./#Game_info_View">
                            <span >게임 소개</span>
                        </a>
                    </li>
                    <li className=" Sub_Menu_Tag " style={sub_menu_style}>
                        <a href="./#Doll">
                            <span >인형 보기</span>
                        </a>
                    </li>
                    <li className="Sub_Menu_Tag " style={sub_menu_style}>
                        <a href="./#Stroy">
                            <span>세계관</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        );
    }

}

export default Top_View;