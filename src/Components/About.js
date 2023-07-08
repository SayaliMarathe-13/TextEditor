import React from 'react'

export default function About(props) {


  // const [MyStyle, setMyStyle] = useState({
  //       color:'black',
  //       backgroundColor:'white'

  //   })
  //   const [btntext, setBtnText] = useState("Enable Dark Mode")

  //   const toggleStyle = ()=>{
  //       if(MyStyle.color === "black"){
  //           setMyStyle({
  //               color:'white',
  //              backgroundColor:'#0a0222',
  //              border: "1px solid white"
  //           })
  //           setBtnText("Enable Light Mode");
  //       }
  //       else{
  //           setMyStyle({
  //               color:'#0a0222',
  //               backgroundColor:'white'
  //           })
  //           setBtnText("Enable Dark Mode");
  //       }

  //   }


    return (
    <div className="container" style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}}>
         {/* here MyStyle is a object */}
        <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils gives you a way to analyze your text quickly and efficiently. 
          be it word count, character count and else 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}}>
       TextUtils is a free character counter tool that provides instant character count and word count
          statistics for a given text. TextUtils reports the number of words and characters. thus it is suitable
          for writing text with word/ character limit. 
         
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"  style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}}>
       This word counter software works in any web browers such as Chrome, Firefox, Internet Explorer,
          safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays, exact
       
      </div>
    </div>
  </div>
</div>
<div className="container my-3">

</div>
    </div>
  )
}
