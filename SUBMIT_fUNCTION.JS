 async submitForm(e) {
    e.preventDefault()
    if (this.state.courseId != null) {
          // added new condition for validation@sandeep
      if(this.state.flag2){
        



        const formdata = new FormData();
        formdata.append("id", this.state.courseId);
        formdata.append("title", this.state.title);
  
        if (this.state.editing == true) {
          this.setState({ editing: false });
          formdata.append("id", this.state.id);
          await CourseSecService.editSec(formdata, this.state.id).then((res) => {
            switch (res.status) {
              case "true": {
                this.setState({
                  title: "",
                });
                this.getSecData(this.state.courseId);
                this.getCourseData();
                Alert.success("Course Section updated");
                break;
              }
              case "fail": {
                this.setState({
                  title: "",
                });
                Alert.warning("some error occoured ");
                this.getCourseData();
                break;
                // this.getSecData(this.state.courseId);
  
              }
            }
          });
  
        } else {
          await CourseSecService.createSec(formdata).then((res) => {
            switch (res.status) {
              case "true": {
                this.setState({
                  title: "",
                });
                this.getSecData(this.state.courseId);
                this.getCourseData();
                Alert.success("Course Section created");
                break;
              }
              case "fail": {
                this.setState({
                  title: "",
                });
                Alert.warning("some error occoured ");
                this.getCourseData();
                break;
                // this.getSecData(this.state.courseId);
  
              }
            }
          });
  
        }

      }
      else{
        Alert.warning("please provide valid Title Name")
      }

      
     


    }
    else { Alert.error(" first select course "); }
  }
