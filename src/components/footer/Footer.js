import React,{useState} from 'react'
import "./Footer.css"
import map from "../../assets/footer/map.svg";
import mail from "../../assets/footer/mail.svg";
import phone from "../../assets/footer/phone.svg";
import copyright from "../../assets/footer/copyright.svg";

function Footer() {
    const [footerData,setFooterData]=useState([
        {
            title:map,
            data: "69 A/1 Tooveypuram 2nd Street, \n\ Tuticorin, TamilNadu, India - 628003"
        },
        {
            title:mail,
            data:"info@renixinformatics.com"
        },
        {
            title:phone,
            data:"(+91)7010283980"
        }
    ])
    return (
        <div className='renix-footer-section'>
           <div className='renix-addres'>
            {
                footerData.map((each,i)=>{
                    return  <div className='renix-footer-data'>
                    <div className='renix-footer-icon'>
                        <img src={each.title}/>
                    </div>
                    <div className={`renix-footer-data ${i==0?"add-width":""}`}>

                    {each.data}
                    </div>
                </div>
                })
            }
            </div>
           <div className='copyright'>
            <img src={copyright}/>&nbsp;
            2022 Renix Informatics Pvt. Ltd. All rights reserved.
           </div>
        </div>
    )
}

export default Footer
