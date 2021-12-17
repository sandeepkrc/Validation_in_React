<form className="" onSubmit={this.submitForm}>
                  <div className="rc-form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            id="selectcourse"
                            onChange={this.courseid.bind(this)}
                            className="form-select form-control"
                          >
                            <option selected="selected" disabled>
                              Course
                            </option>
                            {courseNames}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label style={{ marginBottom: "5%" }} for="inputFirstname">===Title</label>
                          <input
                            type="text"
                            className="form-control mt-n4 mb-2"
                            id="chapter"
                            placeholder="Course section"
                            value={this.state.title}
                            onChange={this.title_handler}
                            // pattern="[A-Za-z]{18}"  //added for validation @sand / 
                            // title="Course Section Name Should not contain special Character"//added for validation @sand / 
                            
                            // pattern="^(?!\s*$).+"
                            required
                          />
                          <span className="text-danger" id="title">{this.state.error}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer btn-model">
                    <button type="submit" className="btn btn-primary btn-learn px-4 ">
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={this.reset.bind(this)}
                      className="btn btn-primary btn-learn px-4  "
                    >
                      Reset
                    </button>
                  </div>
                </form>
