 title_handler(e) {

    this.setState({ title: e.target.value });

    var string = e.target.value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    	if(!format.test(string)){
    		console.log("return true")
        console.log("value is",e.target.value);
        this.setState({ 
          title: e.target.value,
          flag2: true,
          error:""
         });
        
       
    		//containig  not special character
    	} 
    	else {
        this.setState({
          error :"*Special Characters not allowed.",
          flag2: false
      })
    console.log("value is",e.target.value);
        // Alert.error("Please enter valid Name");
    	}

  }
