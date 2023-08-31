import React, { Component } from "react";
import { dataGlasses } from "./data.js";

export default class GlassesComponent extends Component {
  // state
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesResource/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  //render glasses
  renderListGlasses = () => {
    return dataGlasses.map((item, index) => {
      return (
        <img
          onClick={() => {
            this.handleChangeGlasses(item);
          }}
          className="border boder-width-1 p-2"
          width={"100px"}
          height={"auto"}
          style={{ margin: "10px", cursor: "pointer" }}
          src={item.url}
          key={index}
        />
      );
    });
  };
  // thay đổi kính
  handleChangeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };
  // render component
  render() {
    // animation

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(./glassesResource/glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", height: "100vh" }}>
          <h3
            className="text-center text-light py-3 mb-5"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          >
            TRY GLASSES APP
          </h3>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./glassesResource/glassesImage/model.jpg"
                    style={{ width: "250px" }}
                  />
                  <img
                    className="position-absolute"
                    src={this.state.glassesCurrent.url}
                    style={{
                      width: "150px",
                      top: "75px",
                      right: "69px",
                      opacity: "0.8",
                    }}
                  />
                  <div
                    className="position-relative"
                    style={{
                      width: "250px",
                      height: "105px",
                      top: "200px",
                      left: "270px",
                      paddingLeft: "15px",
                      backgroundColor: "rgba(255,127,0,.5)",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{ fontWeight: "bold" }}
                      className="d-block text-primary"
                    >
                      {this.state.glassesCurrent.name}
                    </span>
                    <span className="d-block ">
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesResource/glassesImage/model.jpg"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
            <div className="bg-light text-center mt-5 py-4 px-3 d-flex">
              {this.renderListGlasses()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
