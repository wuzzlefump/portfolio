import React from 'react'

function Footer(){

    return(<div style={{color:"green", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h4 >Outside Links</h4>
        <a style={{color:"lime"}} href="https://www.linkedin.com/in/paulelliottwork
">Linked in Page</a>
        <a style={{color:"lime"}} href="https://github.com/wuzzlefump">Github page</a>
        <a style={{color:"lime"}} href="https://github.com/wuzzlefump/MyReact">This site's repo</a>
        <a style={{color:"lime"}} href="https://www.codewars.com/users/wuzzlefump"> Codewars Page</a>
        <a style={{color:"lime"}} href="https://docs.google.com/document/d/1dZ9WkE417211-XtYJWxiAKc_k-SHpgZMAo5Q-SFLKMQ/edit?usp=sharing">Paul's Resume</a>
    </div>)
}
export default Footer