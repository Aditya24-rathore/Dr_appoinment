let register=()=>{
    let Num=document.querySelector("#num").value.trim()
    let Email=document.querySelector("#email").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()
    let Name=document.querySelector("#name").value.trim()
    
    let errName=document.querySelector("#name")
    let errNum=document.querySelector("#num")
    let errEmail=document.querySelector("#email")
    let errCpass=document.querySelector("#cpass")
    let errPass=document.querySelector("#pass")
    
    if(Name==""){
        errName.style.border="2px solid #e16408"
        document.querySelector("#name").value=""
        document.querySelector("#name").placeholder="Enter valid name"
        return false
    }
    else if(isNaN(Num)){
           errNum.style.border="2px solid #e16408"
           document.querySelector("#num").value=""
           document.querySelector("#num").placeholder="Enter valid number"
           return false
    }
    else if(Num.length!=10){
        errNum.style.border="2px solid #e16408"
        document.querySelector("#num").value=""
           document.querySelector("#num").placeholder="Enter valid number"
        //    document.querySelector("#num").focus()
           return false
    }
    else if(!(Email.includes("@") && Email.includes(".com"))){
        errEmail.style.border="2px solid #e16408"
        document.querySelector("#email").value=""
        document.querySelector("#email").placeholder="Enter valid email"
        // document.querySelector("#email").focus()
           return false
    }
    else if(!(Pass.match(/[@$&!]/) &&
            Pass.match(/[0123456789]/) &&
            Pass.match(/[A-Z]/) &&
            Pass.match(/[a-z]/))){
                errPass.style.border="2px solid #e16408"
                document.querySelector("#pass").value=""
       document.querySelector("#pass").placeholder="Please enter srtong password"
                return false
             }
   else if(Pass==""){
       errPass.style.border="2px solid #e16408"
       document.querySelector("#cpass").value=""
       document.querySelector("#cpass").placeholder="Please enter password"
       return false
   }
   else if(Cpass!=Pass){
       errCpass.style.border="2px solid #e16408"
       document.querySelector("#cpass").value=""
       document.querySelector("#cpass").placeholder="Confirm password not match"
        return false
   }
}


