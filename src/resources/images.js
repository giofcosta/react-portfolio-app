import React from "react";

const IconSVG = (props) => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d={props.d} />
  </svg>
);

const images = {
  presentation: require("./profile.jpg"),
  presentationOne: require("./work-office.jpg"),
  presentationTwo: require("./solo-developers.png"),
  character: require('./character.png'),
  technology: require("./technology.png"),
  tdc: require("./tdc.png"),
  contactUs: require("./contact-us.png"),
  certified: require("./certified.png"),
  certifiedBackground: require('./certificationBackground.png'),
  resume: require('./resume.png'),
  iconUnity: () => <IconSVG d="M388.693333 725.333333H277.333333l-209.493333-213.333333L277.333333 298.666667h111.36l55.893334-96.426667L734.293333 128l79.786667 287.573333L758.186667 512l55.893333 96.426667L734.293333 896l-289.706666-74.24L388.693333 725.333333m5.973334-10.666666l218.88 58.88L487.253333 554.666667H234.666667l160 160m293.12 16.213333L746.666667 512l-58.88-218.88L561.066667 512l126.72 218.88M394.666667 309.333333L234.666667 469.333333h252.586666l126.293334-218.88-218.88 58.88z" />
};

export default images;
